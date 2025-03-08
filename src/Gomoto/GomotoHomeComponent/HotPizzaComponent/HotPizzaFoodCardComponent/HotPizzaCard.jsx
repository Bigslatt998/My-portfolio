import React from 'react'
import Styles from './HotPizzaCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNairaSign } from '@fortawesome/free-solid-svg-icons';

const HotPizzaCard = ({content, handleClick}) => {
      const NairaIcon = <FontAwesomeIcon icon={faNairaSign}/>
      const {Img, FoodName, Price, Amount} = content

      const formatPrice = (amount) => {
        return amount.toLocaleString('en-US')
    }
    
  return (
    <div className={Styles.Boxes}>
    <img src={content.Img}/>
    <p className={Styles.Name}>{content.FoodName}</p>
    <p className={Styles.Discriotion}>{content.Discription}</p>
    <p className={Styles.Price}>{NairaIcon}{formatPrice(content.Price)}</p>
    <button className={Styles.cartbtn}  onClick={() => handleClick(content)}>Add to Cart</button>
  </div>
  )
}

export default HotPizzaCard