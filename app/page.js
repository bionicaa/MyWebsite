
import styles from "../styles/app.module.css";
import Base from './base.jsx';
import Link from 'next/link';
import Image from 'next/image';
import Expertise from './expertise.jsx';
import stylesExpertise from '../styles/expertise.module.css';
import Projects from './projects.jsx';

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
            I am a <strong>technical product development specialist</strong> with expertise in <strong>software product management</strong> and <strong>agile project delivery</strong>. <br />
            Having worked in the tech industry for over 7 years under various frameworks, in both engineering and product, I want to share my skills and knowledge to help develop and deliver exciting products around the world. <br />
            I can help you strategise, plan and execute on your software product ideas, with knowledge of cutting edge technologies like AI, Cloud and Web technologies. <br />
            Additionally, I can help with change management, automating operations and improving team engagement & output velocity through the use of modern tools and methodologies like DevOps. <br />
            <Expertise
              items={[
                { 
                  slug: 'product-1', 
                  title: 'Product', 
                  text: <>Lead <span className={stylesExpertise.highlight}>product strategy</span> and manage roadmap execution to maximise <span className={stylesExpertise.highlight}>value delivery</span>. Communicating <span className={stylesExpertise.highlight}>clear vision</span> to align teams towards <span className={stylesExpertise.highlight}>north star metrics</span>.</> 
                },
                { 
                  slug: 'analysis-1', 
                  title: 'Analytics', 
                  text: <>Leverage <span className={stylesExpertise.highlight}>data-driven</span> insights to build intelligent products and <span className={stylesExpertise.highlight}>automate development pipelines</span> to iterate successfully. Understand business & customer needs and translate them into actionable product requirements.</>
                },
                { 
                  slug: 'agile-1', 
                  title: 'Agile', 
                  text: <>Coachine teams to collaboratively <span className={stylesExpertise.highlight}>deliver fast & efficiently</span>, maintaining consistent velocity and engagement levels. Fostering a transparent and courageous working environment that <span className={stylesExpertise.highlight}>blends leading frameworks</span> to continually improve and grow product teams.</>
                }
              ]}
            />
            <Projects
              projects={[
              {
                slug: 'mdt-1',
                title: 'Software Deployment Automation Tool',
              description: <>Researched market and conducted <span className={stylesExpertise.highlight}>product discovery</span> to present solutions and get buy-in from stakeholders. Led a team to deliver an <span className={stylesExpertise.highlight}>integrated prototype</span> following agile scrum and validated against success metrics. Introduced new feature that <span className={stylesExpertise.highlight}>reduced project timelines by weeks</span> and <span className={stylesExpertise.highlight}>increased customer satisfaction</span> as we were able to deliver more reliably.</>,
              image: '/images/mdt.png'
              },
              {
              slug: 'sky-1',
              title: 'Sky Glass Accessibility Feature Expansion',
              description: <>Worked with Sky Glass to improve their accessibility features on their Sky Glass Tv. After <span className={stylesExpertise.highlight}>user discovery and analysis</span>, I devoloped a prototype and conducted <span className={stylesExpertise.highlight}>A/B & Userability testing</span> to validate hypothesise and present final solution to managment for production sign off. The solution was set to <span className={stylesExpertise.highlight}>increase engagement by 22%</span> and <span className={stylesExpertise.highlight}>improve customer satisfaction by over 40%.</span>.</>,
              image: '/images/skyglass.jpg'
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