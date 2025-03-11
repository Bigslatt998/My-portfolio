import React, { useEffect, useState } from 'react'
import Styles from './DebitCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faLock } from '@fortawesome/free-solid-svg-icons';
import ReactInputMask from 'react-input-mask';import { Link, useNavigate } from 'react-router-dom';

import { faCalendar, faCreditCard, faUser } from '@fortawesome/free-regular-svg-icons';
const DebitCard = () => {
  const UserIcon = <FontAwesomeIcon icon={faUser}/>
  const CCIcon = <FontAwesomeIcon icon={faCreditCard}/>
  const CalenderIcon = <FontAwesomeIcon icon={faCalendar}/>
  const LockIcon = <FontAwesomeIcon icon={faLock}/>
  const navigate = useNavigate()
  

  
  // Card Number
  const [CardNumber, setCardNumber] = useState('')
  const HandleCardNumber =(e) => {
    const value = e.target.value
    setCardNumber(value)
  }


  // Holder name
  const [HolderName, setHolderName] = useState('')
  const HandleHolderName = (e) => {
    const value = e.target.value

    setHolderName(value)
  }

  // Expire Date
  const [Expire, setExpire] = useState('MM/YY')
  const HandleExpire = (e) => {
    const value = e.target.value
    
      setExpire(value)
    
  }

  //CVV
  const [CVV, setCVV] = useState('')
  const HandleCVV = (e) => {
    const value = e.target.value

      setCVV(value)
    }

    const HandleHome = () => {
      navigate('/GomotoHome')
    }
  return(
    <div className={Styles.CardContainer}>
      <div className={Styles.CardCont}>
      <div className={Styles.card}>
            <div className={Styles.Head}>
              <p>VISA</p>
              {/* <i>hi</i> */}
            </div>
            <div className={Styles.NUmberXname}>
          <p>{CardNumber || 'xxxx xxxx xxxx xxxx'}</p>
          <p>{HolderName || 'Card Name'}</p>
        </div>
        <div className={Styles.ExpireXcvv}>
          <div className="Expire">
            <p>Expire</p>
            <p>{Expire || 'MM/YY'}</p>
          </div>
          <div className="CVV">
            <p>CVV</p>
            <p>{CVV || 'xxx'}</p>
          </div>
        </div>
      </div>
      <div className={Styles.Cardinput}>
        <p>Card Details:-</p>
      <form >
        <div className={Styles.CardNAme}>
          <ReactInputMask className={Styles.Input} placeholder='Card Name'
              onChange={HandleHolderName}>
          </ReactInputMask>
          <span>{UserIcon}</span>
        </div>
        <div className={Styles.CardNumber}>
            <ReactInputMask className={Styles.Input} placeholder='Card Number'
            mask='9999 9999 9999 9999' onChange={HandleCardNumber}>
            </ReactInputMask>
            <span>{CCIcon}</span>
        </div>
        <div className={Styles.CVV}>
              <div className={Styles.MEX}>
              <ReactInputMask className={Styles.MEXCVV} placeholder='MM/YY'
              mask='99/99' onChange={HandleExpire}>
              </ReactInputMask>
              <span>{CalenderIcon}</span>
                </div>

          <div className={Styles.cccvv}>
          <ReactInputMask className={Styles.MEXCVV} placeholder='CVV'
          mask='999' onChange={HandleCVV}>
          </ReactInputMask>
          <span>{LockIcon}</span>
          </div>

        </div>

        <button onClick={HandleHome}>Checkout</button>

      </form>
      </div>
    </div>
    </div>
  )
}

export default DebitCard