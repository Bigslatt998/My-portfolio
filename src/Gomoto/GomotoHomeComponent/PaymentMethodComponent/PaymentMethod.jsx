import React, { useEffect, useState } from 'react'
import Styles from './PaymentMethod.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import DebitCard from '../DebitCardComponent/DebitCard';
const PaymentMethod = () => {
  const [ CurrentPage, setCurrentPage] = useState('DebitCard')

  return(
    <div className={Styles.PaymentStickey}>
    <div className={Styles.PaymentDetails}>
    <p className={Styles.Paym}>Payment Types</p>
    <div className={Styles.PaymentType}>
      <Link className={`${Styles.Link} ${CurrentPage === 'DebitCard' ? Styles.Active : ''}`} 
            onClick={() => setCurrentPage("DebitCard")} to=''>Debit Card</Link>
      <Link className={`${Styles.Link} ${CurrentPage === 'Paypal' ? Styles.Active : ''}`} 
            onClick={() => setCurrentPage("Paypal")} to='Paypal'>PayPal</Link>
      <Link className={Styles.Link} >Cash App</Link>
      <Link className={Styles.Link}>Lucky Code</Link>
    </div>
    <Outlet/> 
  </div>
  </div>
  )
}

export default PaymentMethod