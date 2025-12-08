export default function Head() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XPGWWCFLCE" />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XPGWWCFLCE', { send_page_view: true });
        `
      }} />
      <title>Amin Abdi</title>
      <meta name="description" content="Amin Abdi's personal website" />
      <link rel="icon" href="/icon.png" />
    </>
  );
}