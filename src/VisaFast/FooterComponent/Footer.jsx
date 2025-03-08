import React, { useState } from 'react'
import Styles from './Footer.module.css'
import { footerLogo } from '../../List'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMessage, faPhone, faPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
        const FaceBookIcon = <FontAwesomeIcon icon={faFacebook}/>
        const InstagramIcon = <FontAwesomeIcon icon={faInstagram}/>
        const TwitterIcon = <FontAwesomeIcon icon={faXTwitter}/>
        const PlaneIcon = <FontAwesomeIcon icon={faPlane}/>

        const EnvelopIcon = <FontAwesomeIcon icon={faEnvelope}/>
        const PhoneIcon = <FontAwesomeIcon icon={faPhone}/>

        const [circle , setCircle] = useState(false)

        const HandleCircle = () =>{
          setCircle(!circle)
        }

  return (
    <div className={Styles.FooterContainer}>
      <div className={Styles.Boxxx1}>
        <i>{footerLogo}</i>
        <p>At visafast we are committed to transforming your dreams of international exploration into reality. Our team of seasoned Visa Consultants is dedicated to providing unparalleled guidance and support throughout your visa application.</p>
        <div className={Styles.Icon}>
          <a href='#'><i className={Styles.Ic}>{InstagramIcon}</i></a>
          <a href='#'><i className={Styles.Ic}>{TwitterIcon}</i></a>
          <a href='#'><i className={Styles.Ic}>{FaceBookIcon}</i></a>
        </div>
      </div>
      <div className={Styles.Boxxx2}>
        <p>Explore</p>
        
          <li> <i>{PlaneIcon}</i> <span>About</span></li>
          <li> <i>{PlaneIcon}</i><span>Meet Expert</span></li>
          <li> <i>{PlaneIcon}</i><span>Blog</span></li>
          <li> <i>{PlaneIcon}</i><span>Countries</span></li>
          <li> <i>{PlaneIcon}</i><span>Contact</span></li>
        
      </div>
      <div className={Styles.Boxxx3}>
        <p>Visa</p>

        <li> <i>{PlaneIcon}</i><span>Work Visa</span></li>
          <li> <i>{PlaneIcon}</i><span>Student Visa</span></li>
          <li> <i>{PlaneIcon}</i><span>Business Visa</span></li>
          <li> <i>{PlaneIcon}</i><span>Family Visa</span></li>
          <li> <i>{PlaneIcon}</i><span>Travel Visa</span></li>
          
      </div>
      <div className={Styles.Boxxx4}>
        <p>Get in touch</p>
        <p>2025 Rockledge Dr #130 Rockledge, United States</p>
        <p> <i>{PhoneIcon}</i>921-888-0022</p>
        <p> <i>{EnvelopIcon}</i>example@visafast.com</p>
      </div>
    </div>
  )
}

export default Footer