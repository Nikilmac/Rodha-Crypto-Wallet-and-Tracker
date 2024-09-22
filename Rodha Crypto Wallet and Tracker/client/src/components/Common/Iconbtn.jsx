import React from 'react'

function Iconbtn({ onClick, children, className }) {
  return (
    <button onClick={onClick} className={`py-2 px-7 mx-4 rounded-full cursor-pointer ${className}`}>
    {children}
  </button>
  )
}

export default Iconbtn
