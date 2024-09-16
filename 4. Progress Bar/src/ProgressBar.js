import React from 'react'
// width from the App.js. it should be the same variable name as App.js
function ProgressBar({width}) {
  
  return (
    <>
    <div className="container">
    <div className="inner-container" style={{ width: `${width}%` }}>

      {width}%
    </div>
    </div>
    </>
  )
}

export default ProgressBar