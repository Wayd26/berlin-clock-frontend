import React, { useEffect, useState } from 'react'
import '../assets/styles/DigitalTimeComponent.css'


const DigitalTimeComponent = (props) => {
  const { handleChangeEntry } = props

  const [digitalTime, setDigitalTime] = useState({hours: "", minutes: "", seconds: ""})

  const handleChangeTimeInput = (type, value) => {
    if(type === "hours") { setDigitalTime({...digitalTime, hours: value})}
    if(type === "mins") { setDigitalTime({...digitalTime, minutes: value})}
    if(type === "secs") { setDigitalTime({...digitalTime, seconds: value})}
  }

  useEffect(() => {
    let condition = digitalTime.hours !== "" && digitalTime.mins !== "" && digitalTime.secs !== ""
    if(condition) { 
      handleChangeEntry('digital', digitalTime) }
          // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [digitalTime])
  
  return (
    <div className='digital-time-container'>
      <div> 
      <input type='number' className='digital-time__input' value={digitalTime.hours} onChange={e => handleChangeTimeInput("hours", e.target.value)} /> h 
      <input type='number' className='digital-time__input' value={digitalTime.mins}  onChange={e => handleChangeTimeInput("mins", e.target.value)} /> m 
      <input type='number' className='digital-time__input' value={digitalTime.secs}  onChange={e => handleChangeTimeInput("secs", e.target.value)} /> s </div>
    </div>
  )
}

export default DigitalTimeComponent