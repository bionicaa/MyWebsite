import Image from 'next/image';
import Link from 'next/link';
import 'styles/globals.css';

function Base() {
  return (
      <div className='container'>
        <div className='links-row'>
          <Link className='containLink' href="/">
            <Image className='links' src={`/images/home.svg`} alt="home" width={35} height={35} />
          </Link>
          {/*{<Link className='containLink' href="/blog">
            <Image className='links' src={`/images/blog.svg`} alt="blog" width={35} height={35} />
          </Link>}*/}
          <Link className='containLink' href="/contact">
            <Image className='links' src={`/images/contact.svg`} alt="contact" width={35} height={35} />
          </Link>
        </div>
        <Image className='header' src={`/images/beach_header.png`} alt="displayPic" width={929} height={494} />
        <div>
          <p className='footer'> 
            This website was self-built. <br />
            2025 © Amin Abdi. All rights reserved.
          </p>
        </div>
      </div>
  );
}


export default Base;