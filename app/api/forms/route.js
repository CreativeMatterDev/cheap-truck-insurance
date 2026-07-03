import { writeClient } from "@/sanity/lib/writeClient";

export async function POST(req) {
  try {
    const body = await req.json();

    const { formTitle, submissionData } = body || {};

    if (!formTitle || !Array.isArray(submissionData)) {
      return Response.json(
        {
          success: false,
          error: "Invalid form submission payload.",
        },
        { status: 400 }
      );
    }

    await writeClient.create({
      _type: "formSubmission",
      title: `Form submission: ${formTitle}`,
      submissionType: "Custom Form Submission",
      submittedAt: new Date().toISOString(),
      formTitle,
      submissionData,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({
      success: false,
      error: error?.message || "Unknown error",
    });
  }
}
