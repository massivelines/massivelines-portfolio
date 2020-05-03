import React from 'react';

const Footer = () => {
  return (
    <footer>
      <a href="tel:501-733-9480" aria-label="Phone Number">
        {/* <Phone className="icon" /> */}
        501-733-9480
      </a>
      <a href="mailto:shawn@massivelines.com" aria-label="Email">
        {/* <Email className="icon" /> */}
        shawn@massivelines.com
      </a>
      <a
        href="/Shawn_Rhodes_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
      >
        {/* <Pdf className="icon" /> */}
        Resume
      </a>
      <a
        href="https://github.com/massivelines"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Profile"
      >
        {/* <Github className="icon" /> */}
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/shawn-rhodes/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin Profile"
      >
        {/* <Linkedin className="icon" /> */}
        Linkedin
      </a>
    </footer>
  );
};

export default Footer;
