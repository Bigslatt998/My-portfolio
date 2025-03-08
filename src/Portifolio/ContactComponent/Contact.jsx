import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {faAngleDown  } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp, faCalendarDay, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTiktok, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Styles from './Contact.module.css'



const Contact = ({HandleLightMood, setIsLight, isLight, handleDetailsOpen, isDetailsOpened, setIsDetailsOpened}) => {

    const MailIcon = <FontAwesomeIcon icon={faEnvelope}/>
    const AngleDown = <FontAwesomeIcon icon={faAngleDown}/>
    const PhoneIcon = <FontAwesomeIcon icon={faPhone}/>
    const CalenderIcon = <FontAwesomeIcon icon={faCalendarDay}/>
    const LocationIcon = <FontAwesomeIcon icon={faLocationDot}/>
    const TwitterIcon = <FontAwesomeIcon icon={faXTwitter}/>
    const TikTokIcon = <FontAwesomeIcon icon={faTiktok}/>
    // const MailIcon = <FontAwesomeIcon icon={faEnvelope}/>
    const WhatsappIcon = <FontAwesomeIcon icon={faWhatsapp}/>
    const InstagramIcon = <FontAwesomeIcon icon={faInstagram}/>
    const MoonIcon = <FontAwesomeIcon icon={faMoon}/>
    const SunIcon = <FontAwesomeIcon icon={faSun}/>
    const AngleUp = <FontAwesomeIcon icon={faAngleUp}/>
    


return (
    <div className={`${Styles.Contact} ${isLight ? Styles.LightMood : ''} ${isDetailsOpened ? Styles.open : '' }`}>
                    <div className={Styles.email}>
                            <i className={Styles.icon}>{MailIcon}</i>
                            <span  className={Styles.iconText}>Email<br/>
                            <span style={{fontSize: '.6rem'}}>
                                <a className={`${isLight ? Styles.LightMood : ''}`} href='mailto:ganiyutaofeeqolarewaju@gmail.com'>ganiyutaofeeqolarewaju@gmail.com</a></span></span>
                    </div>
                    <div className={Styles.phone}>
                    <i className={`${Styles.icon}`} style={{marginRight: '5px'}}>{PhoneIcon}</i>
                            <span  className={Styles.iconText} style={{fontSize: '0.8rem'}}>Phone No<br/>
                            <span style={{fontSize: '.8rem'}}>
                                <a className={`${isLight ? Styles.LightMood : ''}`} href='tel:09094456850' >+234 9094456850</a></span></span>
                    </div>
                    <div className={Styles.birthDate}>
                    <i className={Styles.icon} style={{marginRight: '5px'}}>{CalenderIcon}</i>
                            <span  className={Styles.iconText} style={{fontSize: '0.8rem'}}>Date of Birth<br/>
                            <span style={{fontSize: '.6rem'}}>
                                <a className={`${isLight ? Styles.LightMood : ''}`} href='#' >April- 23 - 1999</a></span></span>
                    </div>
                    <div className={Styles.location}>
                    <i className={Styles.icon} style={{marginRight: '5px'}}>{LocationIcon}</i>
                            <span  className={Styles.iconText} style={{fontSize: '0.8rem'}}>Location<br/>
                            <span style={{fontSize: '.8rem'}}>
                                <a className={`${isLight ? Styles.LightMood : ''}`} href='#' >Ilorin, Nigeria</a></span>
                            </span>
                    </div>
                        <div className={Styles.Socials}>
                        <a className={`${isLight ? Styles.LightMood : ''}`} href='#'> {InstagramIcon}</a>
                    <a className={`${isLight ? Styles.LightMood : ''}`} href='#'> {TwitterIcon}</a>
                    <a className={`${isLight ? Styles.LightMood : ''}`} href='#'> {TikTokIcon}</a>
                    <a className={`${isLight ? Styles.LightMood : ''}`} href='#'> {WhatsappIcon}</a>
                    <a className={`${isLight ? Styles.LightMood : ''}`} href='mailto:ganiyutaofeeqolarewaju@gmail.com'>{MailIcon}</a>
                        </div>
                        <span onClick={HandleLightMood} className={Styles.DarkMood}>
                            {MoonIcon}
                        </span>
            
                        
                    {/* </div> */}

                    </div>
)
}

export default Contact