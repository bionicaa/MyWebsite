import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <html>
      <head>
        <title>Amin Abdi</title>
      </head>
      <body>
        <div className='container'>
          <div className='links-row'>
            <Link className='containLink' href="/home">
              <Image className='links' src="/images/home.svg" alt="home" width={35} height={35} />
            </Link>
            <Link className='containLink' href="/blog">
              <Image className='links' src="/images/blog.svg" alt="blog" width={35} height={35} />
            </Link>
            <Link className='containLink' href="/contact">
              <Image className='links' src="/images/contact.svg" alt="contact" width={35} height={35} />
            </Link>
          </div>
          <Image className='header' src="/images/techInteraction.jpg" alt="displayPic" width={929} height={494} />
        </div>
        <div>
          <p className='footer'> 
            This website was self-built. <br />
            2025 © Amin Abdi. All rights reserved.
          </p>
        </div>  
      </body>
    </html>
  );
}

export default Page;