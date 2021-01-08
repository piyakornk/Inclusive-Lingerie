import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer role="contentinfo" aria-labelledby="footer" className='footer-container'>

        <div className='social-media-wrap'>
          
            <Link to='/' className='ReturnPolicy' role="link" tabindex="0" aria-label="Return Policy">
              Return Policy
            </Link>

          <small className='CustomerService' >
            <h3>Customer Service</h3>
            <p>contactus@loveme.com</p>
          </small>

          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              alt='Facebook'
              aria-label='Facebook'
              title= 'Facebook'
              role="link"
              >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              alt='Instagram'
              aria-label='Instagram'
              title='Instagram'
              role="link" 
              >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              alt='Youtube'
              aria-label='Youtube'
              title='Youtube' 
              role="link"
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              alt='Twitter'
              aria-label='Twitter'
              title='Twitter'
              role="link"
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              alt='LinkedIn'
              aria-label='LinkedIn'
              title='LinkedIn'
              role="link"
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
  
    </footer>
  );
}

export default Footer;