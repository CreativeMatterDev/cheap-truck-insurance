import nodemailer from "nodemailer";

import { writeClient } from "@/sanity/lib/writeClient";
import { client } from "@/sanity/lib/client";
import { FORM_SETTINGS_QUERY, SITE_SETTINGS_QUERY } from "@/lib/queries";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("BODY:", body);
    console.log("TOKEN:", body?.turnstileToken);
    console.log(
      "SECRET EXISTS:",
      !!process.env.TURNSTILE_SECRET_KEY
    );

    if (!body?.turnstileToken) {
      return Response.json(
        {
          success: false,
          error: "Please complete the captcha before submitting.",
        },
        {
          status: 400,
        },
      );
    }

    if (!process.env.TURNSTILE_SECRET_KEY) {
      return Response.json(
        {
          success: false,
          error: "Captcha verification is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,

          response: body.turnstileToken,
        }),
      },
    );

    const verifyResult = await verifyResponse.json();

    if (!verifyResult.success) {
      return Response.json(
        {
          success: false,
          error: "Captcha verification failed.",
        },
        {
          status: 400,
        },
      );
    }

    /* FETCH FORM SETTINGS */

    const formSettings = await client.fetch(FORM_SETTINGS_QUERY);
    const siteSettings = await client.fetch(SITE_SETTINGS_QUERY);

    if (!formSettings?.adminEmail || !body?.email) {
      return Response.json(
        {
          success: false,
          error: "Missing required email settings or customer email.",
        },
        {
          status: 400,
        },
      );
    }

    /* SAVE TO SANITY */

    await writeClient.create({
      _type: "formSubmission",

      title: `${body.fullName} - Truck Insurance Quote`,

      submittedAt: new Date().toISOString(),

      submissionType: "Truck Insurance Quote",

      fullName: body.fullName,

      companyName: body.companyName,

      phone: body.phone,

      email: body.email,

      location: body.location,

      truckType: body.truckType,

      numberOfTrucks: body.numberOfTrucks,

      trailerType: body.trailerType,

      radius: body.radius,

      publicLiability: body.publicLiability,

      marineCargo: body.marineCargo,

      claims: body.claims,

      drivingOffences: body.drivingOffences,

      currentInsuranceProvider: body.currentInsuranceProvider,

      renewalDate: body.renewalDate,

      hearAboutUs: body.hearAboutUs,
    });

    /* TEMPLATE REPLACEMENTS */

    const replacements = {
      "{{fullName}}": body.fullName || "",

      "{{companyName}}": body.companyName || "",

      "{{phone}}": body.phone || "",

      "{{email}}": body.email || "",

      "{{location}}": body.location || "",

      "{{truckType}}": body.truckType || "",

      "{{numberOfTrucks}}": body.numberOfTrucks || "",

      "{{trailerType}}": body.trailerType || "",

      "{{radius}}": body.radius || "",

      "{{publicLiability}}": body.publicLiability || "",

      "{{marineCargo}}": body.marineCargo || "",

      "{{claims}}": body.claims || "",

      "{{drivingOffences}}": body.drivingOffences || "",

      "{{currentInsuranceProvider}}": body.currentInsuranceProvider || "",

      "{{renewalDate}}": body.renewalDate || "",

      "{{hearAboutUs}}": body.hearAboutUs || "",

      "{{logoUrl}}": siteSettings?.contactHeaderLogo?.asset?.url || "",

      "{{copyrightText}}": siteSettings?.footerSection?.copyrightText || "",
    };

    /* TEMPLATE HELPER */

    const applyTemplate = (template = "") => {
      let output = template;

      Object.keys(replacements).forEach((key) => {
        output = output.replaceAll(key, replacements[key]);
      });

      return output;
    };

    /* VERIFY SMTP */

    await transporter.verify();

    /* ADMIN EMAIL */

    await transporter.sendMail({
      from: formSettings?.fromEmail || process.env.SMTP_USER,

      to: formSettings?.adminEmail,

      subject: formSettings?.adminEmailSubject || "New Quote Request",

      html: applyTemplate(formSettings?.adminEmailTemplate),
    });

    /* CUSTOMER EMAIL */

    await transporter.sendMail({
      from: formSettings?.fromEmail || process.env.SMTP_USER,

      to: body.email,

      subject: formSettings?.customerEmailSubject || "Thank You",

      html: applyTemplate(formSettings?.customerEmailTemplate),
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.error("Email Error:", error);

    return Response.json(
      {
        success: false,
        error: error.message || "Email sending failed",
      },
      {
        status: 500,
      },
    );
  }
}
