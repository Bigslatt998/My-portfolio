import React from 'react'
import Styles from './Footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPhone, faX, faXmark} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/logo.png'
import { faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import EarthBackGround from '../../../assets/EarthBackGround.png'
import CustomerService from '../../../assets/CustomerService.jpg'


const Footer = ({setIsMenu, isMenu, HandleMenue}) => {
    const XmarkIcon = <FontAwesomeIcon icon={faXmark}/>
    const IGIcon = <FontAwesomeIcon icon={faInstagram}/>
    const XIcon = <FontAwesomeIcon icon={faX}/>
    const TikTokIcon = <FontAwesomeIcon icon={faTiktok}/>
    const YouTubeIcon = <FontAwesomeIcon icon={faYoutube}/>
    const PhoneIcon = <FontAwesomeIcon icon={faPhone}/>


  return (
    <div className={Styles.footer}>
    <footer>
            
              <div className={Styles.CallUs}>
                  <div className={Styles.img}>
                      {/* <img src={CustomerService}/> */}
                    
                  </div>
                  <div className={Styles.PhoneIcon}>
                        <i>{PhoneIcon}</i>
                  </div>
                  <div className={Styles.Text}>
                    <div className={Styles.textCa}>
                    <p>Call us to make order now</p>
                    <p>90-944-56-580</p>
                    </div>
                  </div>
              </div>
                <img src={Logo}/>
                <p className={Styles.PPPPP} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus nulla cumque assumenda sint perferendis iure deserunt. Totam nemo iure architecto quo sit quos nesciunt itaque explicabo. Ratione, nisi perferendis!</p>
                <div className={Styles.Socials}>
                  <i>{IGIcon}</i>
                  <i>{XIcon}</i>
                  <i>{YouTubeIcon}</i>
                  <i>{TikTokIcon}</i>
                </div>
                <div className={Styles.hhhjjjkk}>
                <div className={Styles.Line}/>
                <p>Web Developed by <span className={Styles.Code}><b>icode.xx</b></span></p>
                </div>
          </footer>
          </div>

  )
}

export default Footer