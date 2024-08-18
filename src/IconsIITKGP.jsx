import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

const SocialLinksIITKGP = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <a href="https://www.facebook.com/IITKgp/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='iconsIITKgp' icon={faFacebookF} size="lg" />
      </a>
      <a href="https://www.linkedin.com/school/indian-institute-of-technology-kharagpur/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='iconsIITKgp' icon={faLinkedinIn} size="lg" />
      </a>
      <a href="https://www.instagram.com/iit.kgp/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='iconsIITKgp' icon={faInstagram} size="lg" />
      </a>
      <a href="https://twitter.com/IITKgp" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='iconsIITKgp' icon={faTwitter} size="lg" />
      </a>
      <a href="https://www.youtube.com/channel/UCQCLWAILNrEVemERg4ybAYQ" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className='iconsIITKgp' icon={faYoutube} size="lg" />
      </a>
    </div>
  );
};
export default SocialLinksIITKGP;