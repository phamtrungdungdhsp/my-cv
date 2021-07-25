import React, {Fragment, useEffect, useState} from 'react';
import './style.scss';
import Hello from '../../assets/images/hello3.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Cover () {
  // eslint-disable-next-line
  const [load, setLoading] = useState('title')
  useEffect(() => {
    setLoading('title load')
  }, [])
  return (
    <Fragment>
      <div id="cover-content">
        <div className="content">
          <div className="half left">
            <img src={Hello} alt="cover"/>
          </div>
          <div className="half right">
            <div style={{ marginTop: '4rem !important'}}>
              <p className="lead">Hello!</p>
              <h1 className='title'>I'm Trung Dung Pham</h1>
              <p className="office">Web Fullstack Developer (NodeJs + ReactJs)</p>
              <div className="social">
                <a href="https://www.facebook.com/zen.netqd/" target="__blank"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a>
                <a href="https://www.facebook.com/zen.netqd/" target="__blank"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
                <a href="https://www.facebook.com/zen.netqd/" target="__blank"><FontAwesomeIcon className="social-icon" icon={faSkype} /></a>
                <a href="https://www.facebook.com/zen.netqd/" target="__blank"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
              </div>
              <div className="contain-button">
                <a href="#contact" className="contact-button">Get in touch <FontAwesomeIcon className="social-icon" icon={faArrowRight} /></a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="wave-bg"></div>
    </Fragment>

  )
}