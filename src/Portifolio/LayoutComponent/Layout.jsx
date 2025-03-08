import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import Styles from './Layout.module.css'
import Aside from '../AsideComponent/Aside.jsx'
import Main from '../MainComponent/Main.jsx';
// import Full from './assets/Full.png'
// import Half from '../assets/Half.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {faAngleDown  } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp, faCalendarDay, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Layout = ({Full, HandleLightMood, 
                  setIsLight, isLight, handleDetailsOpen, isDetailsOpened, setIsDetailsOpened}) => {


  const EmailIcon = <FontAwesomeIcon icon={faEnvelope}/>
  const AngleDown = <FontAwesomeIcon icon={faAngleDown}/>
  const PhoneIcon = <FontAwesomeIcon icon={faPhone}/>
  const CalenderIcon = <FontAwesomeIcon icon={faCalendarDay}/>
  const LocationIcon = <FontAwesomeIcon icon={faLocationDot}/>
  const TwitterIcon = <FontAwesomeIcon icon={faXTwitter}/>
  const WhatsappIcon = <FontAwesomeIcon icon={faWhatsapp}/>
  const InstagramIcon = <FontAwesomeIcon icon={faInstagram}/>
  const MoonIcon = <FontAwesomeIcon icon={faMoon}/>
  const SunIcon = <FontAwesomeIcon icon={faSun}/>
  const AngleUp = <FontAwesomeIcon icon={faAngleUp}/>

  return (
    <div className={`${Styles.LayoutContainer} ${isLight ? Styles.LightMood : ''}`}>
      <div className={Styles.Container}>
        <aside className={`${Styles.AsideContainer} ${isLight? Styles.LightMood : ''}`} >
          <div className={Styles.Aside}>
           <Aside Full={Full} HandleLightMood ={HandleLightMood}
                              setIsLight={setIsLight} 
                              isLight={isLight} handleDetailsOpen={handleDetailsOpen}
                              isDetailsOpened={isDetailsOpened}
                  setIsDetailsOpened={setIsDetailsOpened}/>
          </div>
        </aside>
        <main className={`${Styles.MainContainer} ${isLight? Styles.LightMood : ''}` } >
          <Main HandleLightMood ={HandleLightMood}
                              setIsLight={setIsLight} 
                              isLight={isLight} handleDetailsOpen={handleDetailsOpen}
                              isDetailsOpened={isDetailsOpened}
                  setIsDetailsOpened={setIsDetailsOpened}/>
                  
        </main>
      </div>
    </div>
  )
}

export default Layout