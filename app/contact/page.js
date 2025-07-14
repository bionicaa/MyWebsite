import React from 'react';
import UpworkLink from './UpworkLink'; 
import LinkedinLink from './LinkedinLink'; 
import GithubLink from './GithubLink';
import Page from '../page';
import styles from '../../styles/contact.module.css';

function ContactPage() {
  return (
    <div>
      <Page>
      </Page>
      <div className={styles.contactContent}>
        <h1><strong>Contact Information</strong></h1>
        <p>
          Get in touch with me. <br />
          <br />
          <strong>Email:</strong> <a href="mailto:amin.abdi@hotmail.co.uk"> amin.abdi@hotmail.co.uk</a> <br />
          <strong>Phone:</strong> <a href="tel:+447580127981"> +44 7580 127981</a> <br />
        </p>
      </div>
      <div className={styles.upworkLink}>
        <UpworkLink />
      </div>
      <div className={styles.linkedinLink}>
        <LinkedinLink />
      </div>
      <div className={styles.githubLink}>
        <GithubLink />
      </div>
    </div>
  );
}

export default ContactPage;
