import React, { useEffect, useState } from 'react'
import Styles from './PizzaAds.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import pizza from '../../../assets/pizza.png'
import pizzasmoke from '../../../assets/pizza-smoke.png'
import Leave from '../../../assets/Leave.png'
import Leave2 from '../../../assets/Leave2.png'
import Leave3 from '../../../assets/Leave3.png'
const PizzaAds = () => {
  return(
    <div className={Styles.HotPizza}>
            <div className={Styles.PizzaText}>
              <h1> <span className={Styles.Always}> Always</span> <br/> the Hottest Pizza</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt vel delectus labore at error, nobis temporibus laudantium obcaecati asperiores ipsa modi officia dolor quia officiis! Omnis, corporis quos. Animi, est!</p>
              <button className={Styles.GetPizz} >Get Pizza</button>
            </div>
            <div className={Styles.PizzaImg}>
              <img src={pizzasmoke}/>
              <img src={pizza}/>
              <img src={Leave}/>
              <img src={Leave2}/>
              <img src={Leave3}/>
            
            </div>
            
          </div>
  )
}

export default PizzaAds