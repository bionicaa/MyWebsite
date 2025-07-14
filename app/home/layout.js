function homeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Home Page</title>
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}

export default homeLayout;