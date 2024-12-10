import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../Assets/footer-logo.png'
import facebookLogo from '../../../Assets/facebook-icon.png'
import googleLogo from '../../../Assets/google-icon.png'
import twitterLogo from '../../../Assets/twitter-icon.png'
import githubLogo from '../../../Assets/github-icon.png'
import '../../../css/Footer.scss';
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12 mt-3">
                <div className="footers-box">
                  <Link>
                    <img src={logo} alt="Logo" to={{ pathname: '/' }} onClick={() => scrollToTop()} width={"50%"} height='auto' />
                  </Link>

                  <h5>Empowering learners through accessible and engaging online education.<br />
                    Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. </h5>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12 mt-3">
                <div className="footers-box">
                  <h4 className='heading'>Get Help</h4>
                  <ul className='link-clickable'>
                    <li>
                      <Link to={{ pathname: '/contactus' }} onClick={()=>scrollToTop()}>Contact Us</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: '/Terms' }} onClick={()=>scrollToTop()}>Terms</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12 mt-3">
                <div className="footers-box">
                  <h4 className='heading'>Programs</h4>
                  <ul className='link-clickable'>
                    <li>
                      <Link to={{ pathname: '/Category/ArtandDesign' }} onClick={()=>scrollToTop()}>Art & Design</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: '/Category/Business' }} onClick={()=>scrollToTop()}>Business</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: '/Category/ITandSoftware' }} onClick={()=>scrollToTop()}>IT & Software</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: '/Category/Languages' }} onClick={()=>scrollToTop()}>Languages</Link>
                    </li>
                    <li>
                      <Link to={{ pathname: '/Category/Programming' }} onClick={()=>scrollToTop()}>Programming</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12 mt-3">
                <div className="footers-box">
                  <h4 className='heading'>Contact Us</h4>
                  <ul>
                    <li>
                      Address: 123 Main Street, Anytown, CA 12345
                    </li>
                    <li>
                      Tel: +(123) 456-7890
                    </li>
                    <li>
                      <a href="mailto:bywayedu@webkul.in">Mail: bywayedu@webkul.in</a>
                    </li>
                    <li>
                      <div className="links" style={{flexWrap:'wrap'}}>
                        <a className="tab-circle">
                          <img src={facebookLogo} alt="facebookLogo" width={'80%'} />
                        </a>
                        <a className="tab-circle">
                          <img src={googleLogo} alt="googleLogo" width={'80%'} />
                        </a>
                        <a className="tab-circle">
                          <img src={twitterLogo} alt="twitterLogo" width={'80%'} />
                        </a>
                        <a className="tab-circle">
                          <img src={githubLogo} alt="githubLogo" width={'80%'} />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
