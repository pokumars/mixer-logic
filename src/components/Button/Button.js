/* eslint-disable react/prop-types */
import React from 'react'
import './Button.css'

const Button = ({ btnText, btnColor, handleClick, btnType, testId }) => {
  // btnType is reference to whether it is of type reste, submit or the basic one button
  return (
    <>
      <button onClick={handleClick}
        type= {btnType || 'button'}
        style={{ backgroundColor: btnColor }} data-testid={testId ||"generic-button"}>
        {btnText}
      </button>
    </>
  )
}

export default Button
