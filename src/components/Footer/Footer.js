import React from 'react';

import { ReactComponent as Github } from '../../content/assets/icons/github-brands.svg';
import { ReactComponent as Linkedin } from '../../content/assets/icons/linkedin-in-brands.svg';
import { ReactComponent as Pdf } from '../../content/assets/icons/file-pdf-light.svg';
import { ReactComponent as Email } from '../../content/assets/icons/envelope-light.svg';
import { ReactComponent as Phone } from '../../content/assets/icons/mobile-android-light.svg';

const Footer = () => (
  <footer id="contact">
    <div className="contact-links">
      <a href="tel:501-733-9480" aria-label="Phone Number">
        <Phone className="icon" />
        <span className="text">501-733-9480</span>
      </a>

      <a
        href="mailto:shawn@massivelines.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <Email className="icon" />
        <span className="text">shawn@massivelines.com</span>
      </a>

      <a
        href="/0#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
      >
        <Pdf className="icon" />
        <span className="text">Resume</span>
      </a>
    </div>

    <div className="social-links">
      <a
        href="https://github.com/massivelines"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Profile"
      >
        <Github className="icon" />
      </a>

      <a
        href="https://www.linkedin.com/in/shawn-rhodes/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin Profile"
      >
        <Linkedin className="icon" />
      </a>
    </div>
  </footer>
);

export default Footer;
