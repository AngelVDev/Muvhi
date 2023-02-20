import React from "react";
import "./Footer.css";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

function Footer() {
  return (
    <div className='footer-wrap'>
      <div role='contentinfo' className='member-footer' id='member-footer'>
        <img id='footer-logo' alt='muvhilogo' src='../../logoHenry.svg' />
        <div className='social-links'>
          <a
            className='social-link'
            href='https://www.facebook.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='facebook'
          >
            <FacebookIcon />
          </a>
          <a
            className='social-link'
            href='https://www.instagram.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='instagram'
          >
            <InstagramIcon />
          </a>
          <a
            className='social-link'
            href='https://twitter.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='twitter'
          >
            <TwitterIcon />
          </a>
          <a
            className='social-link'
            href='https://www.youtube.com/'
            target='_blank'
            rel='noreferrer'
            aria-label='youtube'
          >
            <YoutubeIcon />
          </a>
        </div>
        <ul className='member-footer-links'>
          <li className='member-footer-link-wrapper'>
            <a className='member-footer-link' href='/'>
              <span className='member-footer-link-content'>Gift Cards</span>
            </a>
          </li>
          <li className='member-footer-link-wrapper'>
            <a className='member-footer-link' href='/'>
              <span className='member-footer-link-content'>Press area</span>
            </a>
          </li>
          <li className='member-footer-link-wrapper'>
            <a className='member-footer-link' href='/'>
              <span className='member-footer-link-content'>Investors</span>
            </a>
          </li>
          <li className='member-footer-link-wrapper'>
            <a className='member-footer-link' href='/'>
              <span className='member-footer-link-content'>Jobs</span>
            </a>
          </li>
          <li className='member-footer-link-wrapper'>
            <a className='member-footer-link' href='/'>
              <span className='member-footer-link-content'>Corp</span>
            </a>
          </li>
          <li className='member-footer-link-wrapper'>
            <a className='member-footer-link' href='/'>
              <span className='member-footer-link-content'>Contact us</span>
            </a>
          </li>
        </ul>
        <div className='member-footer-copyright'>
          <a className='member-footer-link' href='/Cookies'>
            <span className='member-footer-link-content'>
              Cookies preferences
            </span>
          </a>
          <a className='member-footer-link' href='/'>
            <span className='member-footer-link-content'>Terms</span>
          </a>
          <a className='member-footer-link' href='/'>
            <span className='member-footer-link-content'>Help Center</span>
          </a>
          <a className='member-footer-link' href='/'>
            <span className='member-footer-link-content'>Privacy</span>
          </a>
          <span className='made-by'>© Made by Angel Scutari</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
