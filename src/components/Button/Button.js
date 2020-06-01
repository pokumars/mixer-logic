import React from 'react'
import './Button.css'

const Button = ({ btnText, btnColor, handleClick, btnType }) => {
  return (
    <>
      <button onClick={handleClick}
       type= {btnType? btnType: "button"}
       style={{backgroundColor: btnColor}} >
        {btnText} 
      </button>
    </>
  )
}

export default Button;
