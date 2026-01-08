
import styles from "../styles/app.module.css";
import Base from './base.jsx';
import Link from 'next/link';
import Image from 'next/image';
import Expertise from './expertise.jsx';
import stylesExpertise from '../styles/expertise.module.css';

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
            Hi, my name is Amin Abdi <br />
            <br />
            I am a <strong>technical product development specialist</strong> with expertise in <strong>software product management</strong> and <strong>agile project delivery</strong>. <br />
            Having worked in the tech industry for over 7 years under various frameworks, in both engineering and product, I want to share my skills and knowledge to help develop and deliver exciting products around the world. <br />
            <br />
            I can help you strategise, plan and execute on your software product ideas, with knowledge of cutting edge technologies like AI, Cloud and Web technologies. <br />
            Additionally, I can help with change management, automating operations and improving team engagement & output velocity through the use of modern tools and methodologies. <br />
            <br />
            <br />
            <Expertise
              items={[
                { 
                  slug: 'product-1', 
                  title: 'Product', 
                  text: <>Lead <span className={stylesExpertise.highlight}>product strategy</span> and manage roadmap execution to maximise <span className={stylesExpertise.highlight}>value delivery</span>.</>
                },
                { 
                  slug: 'ai-1', 
                  title: 'AI', 
                  text: <>Leverage <span className={stylesExpertise.highlight}>cutting edge technologies</span> to build intelligent products and <span className={stylesExpertise.highlight}>automate development pipelines</span>.</>
                },
                { 
                  slug: 'agile-1', 
                  title: 'Agile', 
                  text: <>Coachine teams to collaboratively <span className={stylesExpertise.highlight}>deliver fast</span> with sustainable velocity.</>
                }
              ]}
            />
          </p>
          {/*<h2>
            <strong>But that&apos;s not all I do...</strong>
          </h2>
          <br />
          <p>
            I am also a fitness fanatic with over 10 years of experience training in various martial arts and optimizing physical & mental wellbeing. <br />
            When I am not working, you can find me either at the gym, outdoors exploring new places, or reading about history and different cultures. This is because I love to travel and have visited over 25 countries so far!<br />
            <br />
            If you are interested in  <strong>Personal Development, Travel, Physical & Mental Wellbeing, Sports, History, Technology</strong> and more like me, <br />
            I am writing and sharing some content on my <Link className={styles.blogPost} href="/blog">Blog Page</Link> and would love you to check it out!
          </p>*/}
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