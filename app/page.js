
import styles from "../styles/app.module.css";
import Base from './base.jsx';
import Link from 'next/link';
import Image from 'next/image';

// This is the home page of the application
function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <Base />
      <div className={styles.contentOverlay}>
        <div className={styles.profilePic}>
          <Image
            src={`/images/profile-pic.jpg`}
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
            <br />
            I am a <strong>freelancer</strong> with expertise in <strong>software product management</strong> and <strong>agile project delivery</strong>. <br />
            Having worked in the tech industry for nearly 6 years under various frameworks, in both engineering and product, I want to share my skills and knowledge to help develop and deliver exciting products around the world. <br />
            <br />
            I can help you strategise, plan and execute on your software product ideas, with knowledge of cutting edge technologies like AI, Cloud and Web technologies. <br />
            Additionally, I can help drive digital transformation, automate development processes and improve team collaboration through the use of modern tools and methodologies. <br />
            <br />
            <br />
          </p>
          <h2>
            <strong>But that&apos;s not all I do...</strong>
          </h2>
          <br />
          <p>
            If you are interested in  <strong>Travel, Physical & Mental Wellbeing, Sports, History</strong> and more like me, <br />
            I am writing and sharing some content on my <Link className={styles.blogPost} href="/blog">Blog Page</Link>, visit to discover more of my experiences!
          </p>
        </div>
        <div>
          <p className={styles.downloadContent}>
            Download my <Link className={styles.blogPost} href={`/CV_ABDI_Amin.pdf`} download>CV</Link> or visit the <Link className={styles.blogPost} href="/contact">Contact Page</Link> if you wish to work together.
            <a className={styles.downloadIcon} href={`/CV_ABDI_Amin.pdf`} download>
              <Image src={`/images/download.svg`} alt='CV' width={30} height={30} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;