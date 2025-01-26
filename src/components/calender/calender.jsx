import React from 'react'

function calender() {
  return (
    <div>
    <iframe
      src="https://nepalicalendar.rat32.com/embed.php"
      frameBorder="0"
      scrolling="no"
      marginWidth="0"
      marginHeight="0"
      style={{
        border: 'none',
        overflow: 'hidden',
        width: '100%',
        height: '650px',
        borderRadius: '5px',
        padding: '0px',
        margin: '0px',
      }}
      allowTransparency="true"
    ></iframe>
  </div>
  
  )
}

export default calender
