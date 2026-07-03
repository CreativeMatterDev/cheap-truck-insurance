import Script from 'next/script';

function extractScriptContent(value) {
  if (!value) {
    return "";
  }

  const scriptTagRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  const matches = [...value.matchAll(scriptTagRegex)].map((match) => match[1].trim()).filter(Boolean);

  return matches.length ? matches.join('\n') : value.trim();
}

function isValidId(value) {
  const result = value?.trim?.();
  if (!result) {
    return false;
  }

  const lower = result.toLowerCase();
  return lower !== 'null' && lower !== 'undefined';
}

function isLikelyJS(value) {
  const result = value?.trim();
  if (!result) {
    return false;
  }

  if (/^</.test(result)) {
    return /^<script\b/i.test(result);
  }

  if (/^[\sA-Za-z0-9_]+$/.test(result)) {
    return false;
  }

  return true;
}

export default function ScriptInjector({ globalSettings }) {
  if (!globalSettings) {
    return null;
  }

  const { ga4Id, metaPixelId, headerScripts, bodyScripts } = globalSettings;
  const normalizedHeaderScripts = extractScriptContent(headerScripts);
  const normalizedBodyScripts = extractScriptContent(bodyScripts);
  const shouldRenderHeaderScripts = isLikelyJS(normalizedHeaderScripts);
  const shouldRenderBodyScripts = isLikelyJS(normalizedBodyScripts);
  const shouldRenderGa4 = isValidId(ga4Id);
  const shouldRenderMetaPixel = isValidId(metaPixelId);

  return (
    <>
      {/* Google Analytics 4 */}
      {shouldRenderGa4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}');
              `,
            }}
          />
        </>
      )}

      {/* Meta Pixel */}
      {shouldRenderMetaPixel && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${metaPixelId}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1" alt="Meta Pixel" />`,
            }}
          />
        </>
      )}

      {/* Custom Header Scripts */}
      {shouldRenderHeaderScripts && (
        <Script
          id="custom-header-scripts"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: normalizedHeaderScripts,
          }}
        />
      )}

      {/* Custom Body Scripts */}
      {shouldRenderBodyScripts && (
        <Script
          id="custom-body-scripts"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: normalizedBodyScripts,
          }}
        />
      )}
    </>
  );
}
