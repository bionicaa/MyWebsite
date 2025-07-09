import '../../styles/home.module.css';

function homeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Home Page</title>
      </head>
      <body>
        <div className="content">
          {children}
        </div>
      </body>
    </html>
  );
}

export default homeLayout;