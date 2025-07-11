'use client';
import React from 'react';


const LinkedinLink = () => {
  return (
    <div>
      <button onClick={() => window.open('https://www.linkedin.com/in/amin-abdi-8aa0a9110/', '_blank')}>
        Checkout my LinkedIn
      </button>
    </div>
  );
}

export default LinkedinLink;