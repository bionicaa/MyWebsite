export const mdxComponents = {
  h1: (props) => (
    <h2
      style={{
        fontSize: '2.8rem',
        fontWeight: 700,
        letterSpacing: '-0.03em',
        margin: '2rem 0 1.2rem 0',
        fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        color: '#222',
      }}
      {...props}
    />
  ),
  p: (props) => (
    <p
      style={{
        fontSize: '1.08rem',
        fontFamily: 'Georgia, Times New Roman, Times, serif',
        color: '#444',
        margin: '0.7rem 0',
        lineHeight: 1.7,
      }}
      {...props}
    />
  ),
};
