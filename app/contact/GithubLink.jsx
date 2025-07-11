'use client';
import React from 'react';


const GithubLink = () => {
  return (
    <div>
      <button onClick={() => window.open('https://github.com/bionicaa', '_blank')}>
        Checkout my GitHub
      </button>
    </div>
  );
}

export default GithubLink;