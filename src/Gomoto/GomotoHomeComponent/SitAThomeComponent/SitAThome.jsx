import React from 'react'
import Styles from './SitAThome.module.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark , faPhone, faSearch, faBars , faShoppingBasket, faAngleRight, faUsers, faMobileScreen, faMap, faClock} from '@fortawesome/free-solid-svg-icons';
import homedecor from '../../../assets/homedecor.png'
import oldsit from '../../../assets/Oldsit.jpg'




const SitAThome = () => {
    const AngleRightIcon = <FontAwesomeIcon icon={faAngleRight}/>
    const UsersIcon = <FontAwesomeIcon icon={faUsers}/>
    const MobilescreenIcon = <FontAwesomeIcon icon={faMobileScreen}/>
    const MapIcon = <FontAwesomeIcon icon={faMap}/>
    const ClockIcon = <FontAwesomeIcon icon={faClock}/>

    const Text = [
      {id: 1, Text: 'Fast Delivery in 1 hour', Icon: ClockIcon},
      {id: 2, Text: 'Amazing Mobile App', Icon: MobilescreenIcon},
      {id: 3, Text: 'Wide Coverage Map', Icon: MapIcon},
      {id: 4, Text: 'More Than 150 Countries', Icon: UsersIcon},
    ]

    
  return (
    <div className={Styles.SitAtHomeContainer}>
    <div className={Styles.SitAtHome}>
              <div className={Styles.SitAtHomeImg}>
                <img src={oldsit}/>
              </div>
              <div className={Styles.SitAtHomeText}>
                <div className={Styles.hjgjjg}>
                <div className={Styles.TText}>
                <p>Sit at Home</p>
                <h3>We Will Take Care</h3>
                <p>Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci ultrices imperdiet ut id ligula. Sed interdum eros eget sagittis rutrum. Vestibulum in elementum mauris. In iaculis odio urna.</p>
                </div>
                <div className={Styles.IconsText}>
                  {Text.map((Content) => (
                    <div key={Content.id} className={Styles.Box}>
                      <i>{Content.Icon}</i>
                      <p>{Content.Text}</p>
                    </div>
                  ))}
                </div>
                <button className={Styles.btnII}>Read More</button>
              </div>
              </div>
              </div>
            </div>
  )
}

export default SitAThome