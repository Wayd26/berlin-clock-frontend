import React, { useEffect, useState } from 'react';
import '../assets/styles/BerlinTimeComponent.css'

const BerlinTimeComponent = (props) => {
  const { handleChangeEntry } = props
  const [berlinTime, setBerlinTime] = useState("")
  const handleChangeInput = (value) => {
    setBerlinTime(value)
  }

  useEffect(() => {
    handleChangeEntry('berlin', berlinTime)
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [berlinTime])
  

  return (
    <div className='berlin-time-container'>
      <input className='berlin-time__input' value={berlinTime} onChange={(e) => handleChangeInput(e.target.value)} />
    </div>
  )
}

export default BerlinTimeComponent