import React from 'react'
import '../assets/styles/ResultComponent.css'

const ResultComponent = ({ result }) => {
  return (
    <div className='result'>
      <div className='result__label'>
        Result :
      </div>
      <div className='result__container'>{result}</div>
    </div>
  )
}

export default ResultComponent