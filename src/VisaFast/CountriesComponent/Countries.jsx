import React from 'react'
import Styles from './Countries.module.css'
import { Country } from '../../List'

const Countries = () => {
  return (
    <div className={Styles.ContriesContainer}>
      <div className={Styles.Containerrr}>
      <div className={Styles.Text}>
        <p>Countries We Offer</p>
        <p>Visa consulting offers a range of services and expertise to help businesses.</p>

      </div>

      <div className={Styles.Contries}>
        {Country.map((Content) => (
          <div key={Content.id} className={Styles.Box}>
          <img src={Content.Img}/>
          <span>{Content.Text}</span>        
          
          </div>
        ))}
      </div>

      <button className={Styles.butt}>View all Countries</button>
      </div>
    </div>
  )
}

export default Countries