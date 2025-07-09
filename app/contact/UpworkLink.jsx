'use client';
import React from 'react';

const UpworkLink = () => {
  return (
    <div>
      <button onClick={() => window.open('https://www.upwork.com/freelancers/~01e0416b38ecb75b5d', '_blank')}>
        Visit my Upwork Profile
      </button>
    </div>
  );
}

export default UpworkLink;