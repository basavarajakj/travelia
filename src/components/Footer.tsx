import Image from "next/image";
import Link from "next/link";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <Link href="#" className="logo">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={187}
                height={38}
              />
            </Link>

            <p className="footer-text">
              We always make our customer happy by providing as many choices as possible.
            </p>

            <ul className="social-list">

              <li>
                <Link href="#" className="social-link">
                  <FaSquareXTwitter />
                </Link>
              </li>

              <li>
                <Link href="#" className="social-link">
                  <FaMeta />
                </Link>
              </li>

              <li>
                <Link href="#" className="social-link">
                  <RiInstagramFill />
                </Link>
              </li>

            </ul>

          </div>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">Company</p>
            </li>

            <li>
              <Link href="#" className="footer-link">Why Company</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">Partner With Us</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">FAQ</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">Blog</Link>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">About</p>
            </li>

            <li>
              <Link href="#" className="footer-link">About Us</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">Features</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">News</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">Menu</Link>
            </li>

          </ul>

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">Support</p>
            </li>

            <li>
              <Link href="#" className="footer-link">Account</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">Support Center</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">Feedback</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">Contact Us</Link>
            </li>

            <li>
              <Link href="#" className="footer-link">Accessibility</Link>
            </li>

          </ul>

          <div className="footer-list">

            <p className="footer-list-title">Get in Touch</p>

            <p className="footer-text">
              Question or feedback? We would love to hear from you.
            </p>

            <form action="" className="input-wrapper">
              <input 
                type="email" 
                name="email_address" 
                placeholder="Email Address" 
                autoComplete="off" 
                required 
                className="input-field"
              />

              <button 
                type="submit"
                className="input-btn"
                aria-label="send a message"
              >
                <IoPaperPlaneOutline />
              </button>
            </form>

          </div>

        </div>

        <div className="footer-bottom">

          <p className="copyright">
            Copyright 2024. Made by <span className="copyright-link">Bassu</span>
          </p>

          <ul className="footer-bottom-list">

            <li>
              <a href="#" className="footer-bottom-link">Terms and Condition</a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">Privacy and Policy</a>
            </li>

            

          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;