import React from 'react'
import './style.scss'

export default function Progress ({ name, percentage, visible }) {
  return (
    <div className="wrapper">
      <div className="sub-title">
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress">
        <div className={visible ? `percent percent-${percentage}` : 'percent'}></div>
      </div>
    </div>
  )
}