// ...existing code...
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* load gtag.js in the head at SSR time */}
        <Script
          async src="https://www.googletagmanager.com/gtag/js?id=G-XPGWWCFLCE"
          strategy="beforeInteractive"
        />
        {/* inline config also in head at SSR time */}
        <Script id="ga-analytics" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XPGWWCFLCE');`}
        </Script>

        <title>Amin Abdi</title>
        <meta name="description" content="Amin Abdi's personal website" />
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        {/* If you're using GTM (not just gtag), include the noscript iframe here:
            <noscript>
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
                      height="0" width="0" style={{display:'none',visibility:'hidden'}} />
            </noscript>
         */}
        {children}
      </body>
    </html>
  );
}
// ...existing code...


