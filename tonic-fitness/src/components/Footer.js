import React from 'react';

const Footer = (props) => {
  return (
    <footer id="footer">
      <section className="left">
        <p className="footer-text"><strong>Built by:</strong></p>
        <a href="https://github.com/kfarfan"
           target="_blank" rel="noopener noreferrer">Kevin Farfan</a>
        <a href="https://github.com/dionadk"
           target="_blank" rel="noopener noreferrer">Diona Kurien</a>
        <a href="https://github.com/ZumDeWald"
           target="_blank" rel="noopener noreferrer">Eric Zumwalt</a>
      </section>

      <section className="right">
        <p className="footer-text">&copy; Tonic-Fitness</p>
        <a href="https://github.com/chingu-voyages/geckos-project-11" target="_blank" rel="noopener noreferrer">App Source Code</a>
        <a href="https://chingu.io/" target="_blank" rel="noopener noreferrer">Chingu.io</a>
        <a href="https://medium.com/chingu" target="_blank" rel="noopener noreferrer">Chingu on Medium</a>
      </section>

    </footer>
  );
}

export default Footer;
