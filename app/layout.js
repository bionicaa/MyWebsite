// ...existing code...
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{}</head>
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


