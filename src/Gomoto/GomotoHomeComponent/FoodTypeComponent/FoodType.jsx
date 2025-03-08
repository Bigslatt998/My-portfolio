// import React from 'react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Styles from './FoodType.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBacon, faBowlFood, faBurger, faCircle, faPizzaSlice, faStepBackward } from '@fortawesome/free-solid-svg-icons';


const FoodType = () => {
      const navigate = useNavigate()
  
  const BurgerIcon = <FontAwesomeIcon icon={faBurger}/>
  const PizzaIcon = <FontAwesomeIcon icon={faPizzaSlice}/>
  const BowlIcon = <FontAwesomeIcon icon={faBowlFood}/>
  const BaconIcon = <FontAwesomeIcon icon={faBacon}/>

  const FoodType = [
    {id: 1, Text: 'Fastfood', Icon: BurgerIcon},
    {id: 2, Text: 'Hot Piza', Icon: PizzaIcon},
    {id: 3, Text: 'Asian Food', Icon: BowlIcon},
    {id: 4, Text: 'Raw Meat', Icon: BaconIcon},
  ]
 
  const HandleFastFoodOrder = [
    () => navigate('/FastFoodOrder'),
    () => navigate('/HotPizzaOrder'),
    () => navigate('/AsiaFoodOrder'),
    () => navigate('/RawMeatOrder')
  ]

  return (
      <div className={Styles.Foodtype}>
              {FoodType.map((Content , id) => (
                <div key={Content.id} className={`${Styles.Box}`} onClick={HandleFastFoodOrder[id]}>                  
                
                <div className={Styles.Icon}>
                    <i>{Content.Icon}</i>
                  </div>
                  <div className="Text">
                    {Content.Text}
                  </div>
              </div>
              ))}
              </div>
  )
}

export default FoodType