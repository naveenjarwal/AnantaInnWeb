import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: 20, marginTop: 40 }}>
    © {new Date().getFullYear()} All rights reserved | Hotel Ananta Inn
  </footer>
);

export default Footer;