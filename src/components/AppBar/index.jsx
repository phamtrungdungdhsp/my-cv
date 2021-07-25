import React, { useEffect, useState } from 'react';
import './style.scss';
export default function AppBar ({ callback }) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])
  return (
      <header id="header" className={offset !== 0 ? 'header-fixed' : 'header-normal'}>
        <nav className="appbar">
          <div className="title">Super Folio</div>
          <div className="menu">
            <ul className="list">
              <li className="list-item"><span href="#" onClick={() => callback('about')} className="link">About</span></li>
              <li className="list-item"><span href="#" className="link">Services</span></li>
              <li className="list-item"><span href="#"  onClick={() => callback('skill')} className="link">Skills</span></li>
              <li className="list-item"><span href="#"  onClick={() => callback('experience')} className="link">Experience</span></li>
              <li className="list-item"><span href="#" onClick={() => callback('contact')} className="link">Contact</span></li>
            </ul>
          </div>
        </nav>
      </header>
  )
}