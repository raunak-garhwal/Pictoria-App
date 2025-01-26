import React from 'react'

function Logo({width}) {
  return (
    <div>
      <img
      className='h-18 w-24'
      src="favicon.png"
      alt="logo"
      style={{width: width}}
      />
    </div>
  )
}

export default Logo