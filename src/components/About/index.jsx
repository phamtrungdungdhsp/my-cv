import React, { forwardRef, useState } from 'react'
import avatar from '../../assets/images/avatar.jpg'
import './style.scss'
import { useOnScreen } from '../../hook/useOnScreen'
const AboutSection = forwardRef(({ a }, ref) => {
  // eslint-disable-next-line
  const [isIntersecting, setIntersecting] = useState(false)
  new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )
  const isVisible = useOnScreen(ref)
  return (
    <div id="about" ref={ref}>
      <div className="info">
       <h3>Hello! I'm Trung Dung Pham</h3>
       <p>I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
        <ul className="personal-info">
          <li className="list-item">
            <span className="key">Age:</span>
            <span className="value">28</span>
          </li>
          <li className="list-item">
            <span className="key">Email:</span>
            <span className="value">phamtrungdungdhsp@gmail.com</span>
          </li>
          <li className="list-item">
            <span className="key">Skype:</span>
            <span className="value">phamtrungdungdhsp@outlook.com</span>
          </li>
          <li className="list-item">
            <span className="key">Phone:</span>
            <span className="value">(+84) 358 946 998</span>
          </li>
          <li className="list-item">
            <span className="key">Address:</span>
            <span className="value">Da Nang</span>
          </li>
          <li className="list-item">
            <span className="key">Status:</span>
            <span className="value">Available</span>
          </li>
        </ul>
      </div>
      <div className={isVisible ? 'image on-screen' : 'image'}>
        <img src={avatar} alt="avatar"/>
      </div>
    </div>
  )
});
export default AboutSection;