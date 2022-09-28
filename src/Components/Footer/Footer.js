import React from 'react';
import './Footer.scss';

const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="developer">
        ⚡️ Developer : 김응수, 김지원, 남장현, 성종화, 신지윤, 이경은, 조준형
      </span>
      <span className="copyright">
        &copy; {thisYear} Melon Plate. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
