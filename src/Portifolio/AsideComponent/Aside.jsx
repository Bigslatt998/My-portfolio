import React, { useState } from 'react'
import Styles from './Aside.module.css'
import Contact from '../ContactComponent/Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown  } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp, faCalendarDay, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Aside = ({Full, HandleLightMood, 
                setIsLight, isLight, handleDetailsOpen,
                 isDetailsOpened, setIsDetailsOpened}) => {
      const AngleDown = <FontAwesomeIcon icon={faAngleDown}/>
      const AngleUp = <FontAwesomeIcon icon={faAngleUp}/>
  return (
    <> 
    {/* <div className={Styles.ProfileContainer}> */}
    <div className={Styles.Profile}>
        <div className={` ${Styles.Image} ${isLight ? Styles.LightMood : ''}`}>
            <img src={Full}/>
        </div>
        <div className={Styles.Text}>
        <p>Ganiyu Taofeeq</p>
        <p className={` ${Styles.Web}  ${isLight ? Styles.LightMood : ''}`}>Front-end developer</p>
        </div>
    </div>
    <div className={Styles.Line}/>
    <Contact HandleLightMood={HandleLightMood} 
                  setIsLight={setIsLight} 
                  isLight={isLight} handleDetailsOpen={handleDetailsOpen} 
                  isDetailsOpened={isDetailsOpened}
                  setIsDetailsOpened={setIsDetailsOpened}/>

<div className={` ${Styles.Content} ${isLight ? Styles.LightMood : ''}`} 
                            onClick={handleDetailsOpen}>
                            <span className={Styles.Details}>More Details</span>
                            <span style={{marginLeft: '5px'}}>{isDetailsOpened ? AngleUp : AngleDown }</span></div>
{/* </div> */}
</>
  )
}

export default Aside