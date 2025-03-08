import React from 'react'
import Styles from './MyContact.module.css'

const MyContact = () => {
  return (
    <div className={Styles.MyContact}>
        <div className={Styles.Container}>
        <h1>Contact</h1>
        <div className={Styles.ContactInput}>
          <div/>
        </div>

        <div className={Styles.TextInput}>
          <h2>Contact Form</h2>
          <div className={Styles.Inputs}>
          <input placeholder='Full name'/>
          <input placeholder='Email address'/>
          </div>
          <div className={Styles.MessageINpt}>
          <textarea placeholder='Enter your message'/>
          <button id="Submit" type="submit">Submit</button>

          </div>
          
        </div>
        </div>

    </div>
  )
}

export default MyContact