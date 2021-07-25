import React, {forwardRef, useState} from 'react'
import './style.scss'
import ExperienceCard from '../../Widgets/ExperienceCard'
import FullStack from '../../assets/images/full-stack.svg'
import {useOnScreen} from "../../hook/useOnScreen";

const Experience = forwardRef(({ a }, ref) => {
  // eslint-disable-next-line
  const [isIntersecting, setIntersecting] = useState(false)
  new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )
  const isVisible = useOnScreen(ref)
  return (
    <div id="experience" ref={ref}>
      <h2 className="title">Experience</h2>
      <div className="content">
        <div className={isVisible ? `card-contain on-screen-2` : 'card-contain'}>
          <ExperienceCard
            title="Web Design"
            company="CodeLab Team (2018)"
            imageSrc={FullStack}
          >
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          </ExperienceCard>
        </div>
        <div className={isVisible ? `card-contain on-screen` : 'card-contain'}>
          <ExperienceCard
            title="Web Design"
            company="CodeLab Team (2018)"
            imageSrc={FullStack}
          >
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
            <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
          </ExperienceCard>
        </div>

      </div>
    </div>
  )
})

export default Experience;