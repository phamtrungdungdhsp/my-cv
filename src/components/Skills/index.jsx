import React, {forwardRef, useState} from 'react';
import './style.scss';
import Progress from '../../Widgets/Progress';
import { useOnScreen } from '../../hook/useOnScreen';

const SkillSection = forwardRef(({ a }, ref) =>{
  // eslint-disable-next-line
  const [isIntersecting, setIntersecting] = useState(false)
  new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )
  const isVisible = useOnScreen(ref)
  return (
    <div id="skill" ref={ref}>
      <h2 className="title">My Skills</h2>
      <p className="subtitle">I am a quick learner and specialize in multitude of skills required for Web Application Development and Product Design</p>
      <div className={'list'}>
        <Progress visible={isVisible} percentage={10} name="HTML"/>
        <Progress visible={isVisible} percentage={60} name="HTML"/>
        <Progress visible={isVisible} percentage={80} name="HTML"/>
        <Progress visible={isVisible} percentage={90} name="HTML"/>
        <Progress visible={isVisible} percentage={40} name="HTML"/>
        <Progress visible={isVisible} percentage={30} name="HTML"/>
      </div>
    </div>
  )
})

export default SkillSection;