import React from 'react'
import Styles from './Services.module.css'
import { ServicesList , Flight } from '../../List'
const Services = () => {
  return (
    <div className={Styles.ServicesContainer}>
      <i>{Flight}</i>
      <p>Services</p>
      <h1>Navigating Visa Applications Made Easy</h1>
      <div className={Styles.Services}>
        
       {ServicesList.map((Content) => (
        <div key={Content.id} className={Styles.Box}>
            <div className={Styles.Icon}>
              <span className={Styles.Front}>{Content.Icon}</span>
              {/* <span className={Styles.back}>{Content.Icon}</span> */}
            </div>
          <p>{Content.Text}</p>
          <p>{Content.Discription}</p>
          <button>Read More</button>
        </div>
       ))}
      </div>
      <button className={Styles.Join}>Join Our Visa Journey</button>
      <i>{Flight}</i>

    </div>
  )
}

export default Services