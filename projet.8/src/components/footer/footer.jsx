import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer>
        <picture>
          <source media="(max-width: 500px)" srcSet="/src/assets/mobile_footer.svg" />
          <img src="/src/assets/desktop_footer.svg" alt="Image du footer" />
        </picture>
      </footer>
    </div>
  );
}

export default Footer;
