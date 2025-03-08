import React, { useEffect, useState } from 'react'
import Styles from './Paypal.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Paypal = () => {
  return(
    <div className={Styles.CardContainer}>
       
          <div className={Styles.Cardinput}>
            <p>Card Details</p>
          <form >
            <input type='text' placeholder='Card Holder Name'/>
            <input type='text' placeholder='Card Number'/>
            <div className={Styles.CVV}>
              <input type='text' placeholder='MM/YY'/>
              <input type='text' placeholder='CVV'/>
            </div>
    
            <button>Checkout</button>
    
          </form>
          </div>
        </div>
  )
}

export default Paypal