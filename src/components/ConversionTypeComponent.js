import React from 'react'
import '../assets/styles/ConversionTypeComponent.css'

const ConversionTypeComponent = (props) => {
    const { handleChangeType, handleClickSubmitButton } = props
    return (
        <div className='convert-type-container'>
            <div>To :
                <select onChange={(e) => handleChangeType(e.target.value)} className='convert-type__select' name="conversion-type" id="">
                    <option value="digital">Digital Time</option>
                    <option value="berlin">Berlin Time</option>
                </select>
      <button onClick={handleClickSubmitButton}>Submit</button>

            </div>
        </div>
    )
}

export default ConversionTypeComponent