export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XPGWWCFLCE"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XPGWWCFLCE');
        `}} />
        <title>Amin Abdi</title>
        <meta name="description" content="Amin Abdi's personal website" />
        <link rel="icon" href="/icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}



