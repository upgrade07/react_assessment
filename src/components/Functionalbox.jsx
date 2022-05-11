import React from 'react'
import './style.css'

const Functionalbox = () => {
  return (
    <div className='mybox'>
    <h1>This is created using functional Component</h1>
    <span className='span'>This is done using external CSS</span><br></br>
    <span style={{color:"blue"}}>This is done using inline CSS</span>


    </div>
  )
}

export default Functionalbox