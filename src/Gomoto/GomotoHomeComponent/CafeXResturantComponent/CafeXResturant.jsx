import React from 'react'
import Styles from './CafeXResturant.module.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark , faPhone, faSearch, faBars , faShoppingBasket, faAngleRight, faClock, faCalendar, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import BugerHouse from '../../../assets/BugerHouse.jpg'
import SpoonXX from '../../../assets/SpoonXX.jpg'
import Shushi from '../../../assets/Suhsii.jpg'
import NightBurger from '../../../assets/NightBurger.jpg'
import Suuyaaa from '../../../assets/Suuyaaa.jpg'





const CafeXResturant = () => {
        const ClockIcon = <FontAwesomeIcon icon={faClock}/>
        const CalenderIcon = <FontAwesomeIcon icon={faCalendar}/>
        const ArrowRightIcon = <FontAwesomeIcon icon={faArrowRight}/>

      
        const Recommendation = [
          {id: 1, Img: BugerHouse, Name: 'Burger House', Day: 'Monday-Sunday', Time: '09:00 - 18:00', Dish: 'Burgers'},
          {id: 2, Img: SpoonXX, Name: 'Resturant Monaco',  Day: 'Monday-Sunday', Time: '09:00 - 18:00', Dish: 'Resturant'},
          {id: 3, Img: NightBurger, Name: 'Ribs and Beer',  Day: 'Monday-Sunday', Time: '09:00 - 18:00', Dish: 'Pubs'},
          {id: 4, Img: Shushi, Name: 'Sushiteria',  Day: 'Monday-Sunday', Time: '09:00 - 18:00', Dish: 'Asian food'},
          {id: 5, Img: Suuyaaa, Name: 'Happy Grill Cafe',  Day: 'Monday-Sunday', Time: '09:00 - 18:00', Dish: 'BBQ'}
        ]
    
  return (
    <div className={Styles.CafeAndResturant}>
      <div className={Styles.Recommendation}>
          <p>Our Recommendation</p>
          <h4>Cafes & Restaurants</h4>
          </div>
          <div className={Styles.CafeAndResturantContainer}>
            {Recommendation.map((Content) => (
              <div key={Content.id} className={`${Styles.Box}`}>
                              <div className={Styles.Dish}>
                                <p>{Content.Dish}</p>
                              </div>
                              
                              <img src={Content.Img}/>
                              <div className={Styles.Text}>
                              <h1>{Content.Name}</h1>
                              <div className={Styles.Spannn}>
                              <p><span style={{marginRight: '10px', color: 'goldenrod'}}>{CalenderIcon}</span>{Content.Day}</p>
                              <p><span style={{marginRight: '10px', color: 'goldenrod'}}>{ClockIcon}</span>{Content.Time}</p>
                              </div>
                           
                              
                                <i className={Styles.Arrow}>{ArrowRightIcon}</i>
                              
                              
                              
                              </div>
                              <div/>
                                              </div>
            ))}
            
            
          </div>
          <div className={Styles.hhhuuu}>
          <button className={Styles.ViewMore}>View More</button>
          </div>
        </div>
  )
}

export default CafeXResturant