import React from 'react'
import './style.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faSkype} from "@fortawesome/free-brands-svg-icons";

export default function Footer () {
  return (
    <div id="footer">
      <div style={{ marginBottom: '2rem' }}>
        <h4>Trung Dung Pham</h4>
        <p className="title">Web Fullstack Developer (NodeJs + ReactJs)</p>
        <div className="social">
          <a href="https://www.facebook.com/zen.netqd/" target="__blank"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a>
          <a href="https://www.facebook.com/zen.netqd/" target="__blank"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
          <a href="https://www.facebook.com/zen.netqd/" target="__blank"><FontAwesomeIcon className="social-icon" icon={faSkype} /></a>
          <a href="https://www.facebook.com/zen.netqd/" target="__blank"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
        </div>
      </div>
      <p className="text-small mb-1">© Super Folio. All rights reserved.</p>
      <p className="text-small">Design - <b>TemplateFlip</b></p>
    </div>
  )
}