import { useState } from 'react'
import React from 'react'
import './Form1.scss'

const Form1 = () => {
  const [name,setName] =useState("")

 const handleSave = (e) =>setName(e.target.value)
  return (
    <div className='form1-container'>
     <div className="form-items">
      <h2>Enter your Name Here </h2>
      <input value={name} onChange={(e)=>handleSave(e)} type='text' name='name'  />
     </div>
     <button>Save</button>
    </div>
  )
}

export default Form1
