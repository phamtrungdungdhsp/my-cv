import React from 'react'
import './style.scss'

export default function ExperienceCard ({ children, imageSrc, title, company  }) {
  return (
    <div className="experience-card">
      <div className="ex-header">
        <div className="office-info">
          <div className="person-title">{title}</div>
          <div className="company">{company}</div>
        </div>
        <div className="office-icon">
          <img src={imageSrc} alt="office-icon"/>
        </div>
      </div>
      <div className="footer">{children}</div>
    </div>
  )
}