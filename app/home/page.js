import React from 'react'
import Image from 'next/image'
import styles from '../../styles/home.module.css'
import Page from '../page';
import Link from 'next/link';

// This is the home page of the application
function HomePage() {
  return (
    <div>
      <Page>
      </Page>
      <div className={styles.profilePic}>
        <Image
          src="/images/profile-pic.jpg"
          alt="Profile Picture"
          width={248}
          height={252}
        />
      </div>
      <div className={styles.content}>
        <h1>
          <strong>A little about me...</strong>
        </h1>
        <p>
          Hi, I&apos;m Amin Abdi <br />
          I am a <strong>freelancer</strong> with expertise in software product managment and agile project delivery. <br />
          Having worked in the tech industry for nearly 6 years in both engineering and product, I want to share my skills and knowledge to help develop and deliver exciting products. <br />
        </p>
        <h2>
          <strong>But that&apos;s not all I do...</strong>
        </h2>
        <br />
        <p>
          I want to use this platform to share some of my interests<br />
          <strong>Travel & Physical Wellbeing,</strong> in addition to it being a living portfolio. <br />
          So visit my <Link className={styles.blogPost} href="/blog">Blog Page</Link> if you wish to discover more!
        </p>
      </div>
      <div>
        <p className={styles.downloadContent}>
          Download my CV or visit the <Link className={styles.blogPost} href="/contact">Contact Page</Link> if you wish to work together.
          <a className={styles.downloadIcon} href="/CV_ABDI_Amin.pdf" download>
            <Image src='/images/download.svg' alt='CV' width={30} height={30} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default HomePage;