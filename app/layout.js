export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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



