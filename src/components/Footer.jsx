import React from "react";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@all rights reserved</p>
      </div>
      <div className="right-half">
       
          <h5>Foolow Us</h5>

          <a href="https://youtube.com" target="blank">
            Youtube
          </a>
          <a href="https://github.com" target={"blank"}>
            GitHub
          </a>
          <a href="https://facebook.com" target={"blank"}>
            FaceBook
          </a>
  
      </div>
    </footer>
  );
};

export default Footer;
