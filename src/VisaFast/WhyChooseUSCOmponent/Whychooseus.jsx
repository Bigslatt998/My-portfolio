import React from 'react'
import Styles from './Whychooseus.module.css'
import { Boxxx, Boxxxx, idance2 } from '../../List'
const Whychooseus = () => {

  return (
    <div className={Styles.WhychooseusContainer}>
    <div className={Styles.Whychooseus}>
      <div className={Styles.Text}>
      <p>Why choose us</p>
      <p>Why Choose Visa Consulting for Your Business Transformation</p>
      </div>
      <div className={Styles.Container}>
      <div className={Styles.Box1}>
        {Boxxx.map((Content) => (
          <div key={Content.id} className={Styles.Box}>
            <p>{Content.Head}</p>
            <p>{Content.Text}</p>
              <i className={Styles.Icon}>{Content.Icon}</i>
          </div>
        ))}
        
      </div>
      <div className={Styles.Box2}>
        <img src={idance2}/>
      </div>

      <div className={Styles.Box3}>
        {Boxxxx.map((Content) => (
          <div key={Content.id} className={Styles.Box}>
            <p>{Content.Head}</p>
            <p>{Content.Text}</p>
            <i className={Styles.Icon2}>{Content.Icon}</i>
        </div>
            
        ))}
      </div>
        
      </div>
      </div>
    </div>
  )
}

export default Whychooseus