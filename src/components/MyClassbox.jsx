import React from 'react'
import './style.css'

const MyClassbox = () => {
  return (
    <div className='mybox1'>
    <h1>This is created using Class Component</h1>
    <span className='span'>This is done using external CSS</span><br></br>
    <span style={{color:"blue"}}>This is done using inline CSS</span>


    </div>
  )
}

export default MyClassbox