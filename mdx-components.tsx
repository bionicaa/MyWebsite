export const mdxComponents = {
  h1: (props) => (
    <h1
      style={{
        fontSize: '2.8rem',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        marginInline: '0.1rem',
        fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        color: 'white',
        borderBottom: '2px solid grey',
        display: 'inline-block',      // Only as wide as content or width
        width: 'auto',               // Custom length
        marginRight: '10rem',
        paddingRight: '10rem',        // Space between text and border
        paddingBottom: '0.7rem',      // Optional: space below text
      }}
      {...props}
    />
  ),
  p: (props) => (
    <p
      style={{
        fontSize: '1.05rem',
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        color: '#ddd',
        marginBottom: '3.3rem',
        marginRight: '10rem',
        paddingRight: '10rem',
        lineHeight: 1.2,
      }}
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      style={{
        paddingLeft: '1.5rem',
        margin: '0.7rem',
        listStyleType: 'disc',
      }}
      {...props}
    />
  ),
  li: (props) => (
    <li
      style={{
        fontSize: '1.05rem',
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        color: '#ddd',
        marginBottom: '0.25rem',
      }}
      {...props}
    />
  ),
  img: (props) => (
    <img
      {...props}
      style={{
        opacity: 0.9,
        borderRadius: '8px',
        marginBottom: '1rem',
        
        ...props.style,
      }}
    />
  ),
};
