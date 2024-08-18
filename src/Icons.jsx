import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div style={{ display: 'flex', gap: '3rem' }}>
      <a href="https://www.facebook.com/mekanikaiitkgp/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='icons' icon={faFacebookF} size="lg" />
      </a>
      <a href="https://www.linkedin.com/company/mekanika-iit-kharagpur/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='icons' icon={faLinkedinIn} size="lg" />
      </a>
      <a href="https://www.instagram.com/mekanika_iitkgp/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='icons' icon={faInstagram} size="lg" />
      </a>
    </div>
  );
};
export default SocialLinks;