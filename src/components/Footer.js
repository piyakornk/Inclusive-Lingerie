import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer role="contentinfo" aria-labelledby="footer" className='footer-container'>

        <div className='social-media-wrap'>
          
          <div>
            <Link to='/' className='ReturnPolicy'>
              Return Policy
            </Link>
          </div>

          <small className='CustomerService'>
            <h3>Customer Service</h3>
            <p>contactus@loveme.com</p>
          </small>

          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              alt= 'Facebook'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              alt='Instagram'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              alt='Youtube'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              alt='Twitter'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              alt='LinkedIn'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
  
    </footer>
  );
}

export default Footer;