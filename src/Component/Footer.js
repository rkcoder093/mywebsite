import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <h3>Contact</h3>
            <ul>
              <li>
                Email: <a href="mailto:keshri093@gmail.com">keshri093@gmail.com</a>
              </li>
              <li>Phone: +91-7488452313</li>
              <li>Address: 136 Kritan kushak AGB Layout, Bangalore, Karnataka 560090</li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>Connect Me</h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/ritik.keshri.35"><i className="fab fa-facebook-square"></i> Facebook</a>
              </li>
              <li>
              <a href="https://www.instagram.com/rkeshri093/"><i className="fab fa-instagram"></i> Instagram</a>
              </li>
              <li>
              <a href="https://www.linkedin.com/in/ritikkeshri/"><i className="fab fa-linkedin"></i> LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
