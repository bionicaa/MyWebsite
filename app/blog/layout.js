function blogLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Blog Page</title>
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}

export default blogLayout;