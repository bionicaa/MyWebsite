export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/*<noscript>
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XPGWWCFLCE"
                      height="0" width="0" style={{display:'none',visibility:'hidden'}} />
            </noscript>*/
         }
        {children}
      </body>
    </html>
  );
}
// ...existing code...


