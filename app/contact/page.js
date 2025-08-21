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
      <div style={{ margin: '26rem 0', marginLeft: '2rem' }}>
        <h2>My Location</h2>
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.057522585!2d-0.510375!3d51.286893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fd7e5b4c7c3%3A0x7c6e8c6e8c6e8c6e!2sLondon!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '10px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
