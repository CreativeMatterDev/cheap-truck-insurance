export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";

import {
  PAGE_QUERY,
  SITE_SETTINGS_QUERY,
  FORM_SETTINGS_QUERY,
} from "@/lib/queries";

import InternalHeader from "@/components/common/InternalHeader";

import QuoteForm from "@/components/forms/QuoteForm";

import Footer from "@/components/common/Footer";

import FinalCTA from "@/components/common/FinalCTA";

import { sectionComponents } from "@/components/sections";

/* ========================================
   SEO METADATA
======================================== */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = await client.fetch(PAGE_QUERY, {
    slug,
  });

  if (!data) {
    return {
      title: "Page Not Found",
    };
  }

  const seoTitle = data?.seoTitle || data?.title;

  const seoDescription =
    data?.seoDescription || "Cheap Truck Insurance Australia.";

  const seoImage = data?.seoImage?.asset?.url;

  return {
    title: seoTitle,

    description: seoDescription,

    robots: data?.noIndex ? "noindex,nofollow" : "index,follow",

    openGraph: {
      title: seoTitle,

      description: seoDescription,

      images: seoImage ? [seoImage] : [],
    },

    twitter: {
      card: "summary_large_image",

      title: seoTitle,

      description: seoDescription,

      images: seoImage ? [seoImage] : [],
    },
  };
}

/* ========================================
   PAGE
======================================== */

export default async function DynamicPage({ params }) {
  const { slug } = await params;

  /* PAGE DATA */

  const data = await client.fetch(PAGE_QUERY, {
    slug,
  });

  /* SITE SETTINGS */

  const siteSettings = await client.fetch(SITE_SETTINGS_QUERY);

  /* FORM SETTINGS */

  const formSettings = await client.fetch(FORM_SETTINGS_QUERY);

  /* NOT FOUND */

  if (!data) {
    notFound();
  }

  /* CONTACT PAGE */

  if (data?.pageType === "contact") {
    return (
      <>
        <QuoteForm settings={formSettings} siteSettings={siteSettings} />

        <Footer data={siteSettings?.footerSection} isContactPage={true} />
      </>
    );
  }

  /* ALL OTHER PAGES */

  return (
    <main className="bg-[#032F35] min-h-screen text-white">
      {/* INTERNAL HEADER */}

      {/* {data?.pageType !== "yes" && <InternalHeader data={siteSettings} />} */}
      {/* INTERNAL HEADER */}

{data?.pageType !== "yes" && (
  <InternalHeader data={siteSettings} />
)}

{/* PAGE TITLE */}

      {/* PAGE SECTIONS */}

      {data?.sections?.map((section, index) => {
        const SectionComponent = sectionComponents[section?._type];

        if (!SectionComponent) {
          return null;
        }

        return <SectionComponent key={index} data={section} />;
      })}

      {/* FINAL CTA */}

      <FinalCTA data={siteSettings?.finalCta} />

      {/* FOOTER */}

      <Footer data={siteSettings?.footerSection} />
    </main>
  );
}
