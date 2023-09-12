import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <>
    <div className="footer-container">
      <button type="button" className="anchor-btn">
        <a href="https://www.google.com/" rel="noreferrer" target="_blank">
          <FaGoogle className="icon" />
        </a>
      </button>
      <button type="button" className="anchor-btn">
        <a
          href="https://twitter.com/i/flow/signup"
          rel="noreferrer"
          target="_blank"
        >
          <FaTwitter className="icon" />
        </a>
      </button>
      <button type="button" className="anchor-btn">
        <a
          href="https://www.instagram.com/accounts/login/"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagram className="icon" />
        </a>
      </button>
      <button type="button" className="anchor-btn">
        <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
          <FaYoutube className="icon" />
        </a>
      </button>
    </div>
    <a
      href="https://www.linkedin.com/in/kiran-ganesh-ande/"
      rel="noreferrer"
      target="_blank"
    >
      <p className="contact-us"> Contact us</p>
    </a>
  </>
)

export default Footer
