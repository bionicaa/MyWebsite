'use client';

const LinkedinLink = () => {
  return (
    <div>
      <button onClick={() => window.open('https://www.linkedin.com/in/aminabdi01/', '_blank')}>
        Checkout my LinkedIn
      </button>
    </div>
  );
}

export default LinkedinLink;