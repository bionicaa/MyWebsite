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
        marginRight: '2.5rem',
        paddingBottom: '0.3rem',      // Optional: space below text
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
        margin: '0.7rem',
        marginRight: '2.5rem',
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
      style={{
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '0.5rem',
        margin: '1rem 0',
        display: 'inline-block',
      }}
      {...props}
    />
  )
};
