import { groq } from "next-sanity";

/* ========================================
   PAGE QUERY
======================================== */

export const PAGE_QUERY = groq`

  *[
    _type == "page" &&
    slug.current == $slug
  ][0]{

    title,

    slug,

    pageType,

    seoTitle,

    seoDescription,

    noIndex,

    seoImage{
      asset->{
        url
      }
    },

    sections[]{

      ...,

      logo{
        asset->{
          url
        }
      },

      image{
        asset->{
          url
        }
      },

      backgroundImage{
        asset->{
          url
        }
      },

      items[]{

        ...,

        icon{
          asset->{
            url
          }
        }

      }

    }

  }

`;

/* ========================================
   SITE SETTINGS QUERY
======================================== */

export const SITE_SETTINGS_QUERY = groq`

  *[_type == "siteSettings"][0]{

    title,

    headerLogo{
      asset->{
        url
      }
    },

    contactHeaderLogo{
      asset->{
        url
      }
    },

    headerButtonText,

    headerButtonLink,

    finalCta{

      ...,

      backgroundImage{
        asset->{
          url
        }
      }

    },

    footerSection{

      disclaimerText,

      copyrightText,

      footerLinks,

      siteCreditText,

      siteCreditLink

    },

    globalSettings{

      ga4Id,

      metaPixelId,

      headerScripts,

      bodyScripts

    }

  }

`;

/* ========================================
   FORM SETTINGS QUERY
======================================== */

export const FORM_SETTINGS_QUERY = groq`
  *[_type == "formSettings"][0]{

    supportPhone,
    supportText,
    privacyPolicyText,

    stepOneTitle,
    stepOneDescription,

    stepTwoTitle,
    stepTwoDescription,

    stepThreeTitle,
    stepThreeDescription,

    stepFourTitle,
    stepFourDescription,

    stepFiveTitle,
    stepFiveDescription,
    stepFiveDisclaimer,

    thankYouTitle,
    thankYouMessage,

    adminEmail,
    fromEmail,
    userEmailSubject,
    adminEmailSubject,
    adminEmailTemplate,
    customerEmailTemplate,

    locationOptions,
    truckTypes,
    trailerTypes,
    radiusOptions,
    yesNoOptions,
    hearAboutOptions

  }
`;