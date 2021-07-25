import React, {forwardRef, useState} from 'react'
import './style.scss'
import {useOnScreen} from "../../hook/useOnScreen";

const Contact = forwardRef(({ a }, ref) => {
  // eslint-disable-next-line
  const [isIntersecting, setIntersecting] = useState(false)
  new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )
  const isVisible = useOnScreen(ref)
  return (
    <div id="contact" ref={ref}>
      <h2 className="title">Contact Me</h2>
      <div className="content">
        <div className={isVisible ? 'half contact-form on-screen-2' : 'half contact-form'}>
          <form className="form">
            <div className="form-group">
              <label>Name</label>
              <input className="form-control"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control"/>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" rows="4" cols="50"/>
            </div>
            <div className="button">
              <button type="button" className="submit-button">Send</button>
            </div>
          </form>
        </div>
        <div className={isVisible ? 'half contact-info on-screen' : 'half contact-info'}>
          <h3 style={{ marginTop: 0 }}>Let's talk how I can help you!</h3>
          <p>If you enjoy my work and would want to hire me, please use the contact form to get in touch.</p>
          <p>Or get in touch using my email, skype or my contact number.</p>
          <p>See you!</p>
          <ul className="list-contact">
            <li className="item">
              <span className="key">Email:</span>
              <span className="value">phamtrungdungdhsp@gmail.com</span>
            </li>
            <li className="item">
              <span className="key">Skype:</span>
              <span className="value">phamtrungdungdhsp@outlook.com</span>
            </li>
            <li className="item">
              <span className="key">Email:</span>
              <span className="value">(+84) 358 946 998</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
})
export default Contact;