import React from 'react'

const Button = ({props}) => (
  <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary rounded-md ${props}`}>
    Get Started
  </button>
)

export default Button