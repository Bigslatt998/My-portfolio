      import React, { useEffect, useState } from 'react'
      import Styles from './Order.module.css'
      import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
      import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
      import Burger from '../../../assets/Burger.jpg'
      import { faNairaSign, faTrash } from '@fortawesome/free-solid-svg-icons';
      import { Link, useNavigate } from 'react-router-dom';

      const Order = ({cart, handleRemove, setCart, handleChange, Price}) => {
          const FaceSmileIcon = <FontAwesomeIcon icon={faFaceSmile}/>
          const NairaIcon = <FontAwesomeIcon icon={faNairaSign}/>
          const TrashIcon = <FontAwesomeIcon icon={faTrash}/>

      const navigate = useNavigate()

        const ClearCart = () => {
          setCart([])
        }
        const TableHead = [
            {id:1, Head: 'Product'},
            {id:2, Head: 'Price'},
            {id:3, Head: 'Quantity'},
            
        ]
        const ReturntoShop =() =>{
          navigate('/FastFoodOrder')
        }
        const formatPrice = (amount) => {
          return amount.toLocaleString('en-US')
      }
        return(
          <div className={Styles.ProductDisplay}>
          <p className={Styles.Here}>Here are your Orders! <span>{FaceSmileIcon}</span></p>
          <div className={Styles.CartProduct}>

      <div className={Styles.CartProduct}>
      <div className={Styles.Oeder}>
      <div className={Styles.OrderText}>
      {TableHead.map((Content) => (
        <div key={Content.id} className={Styles.Box}>
          <p>{Content.Head}</p>
        </div>
      ))}
      </div>
      <div className={Styles.Line}/>
      </div>
      {cart.map((Content) => (
        <div key={Content.id} className={Styles.ggggggg}>
      <div className={Styles.OrderDisplay}>
      <div className={Styles.Img}>
        <div className={Styles.IMgDisplay}>
          <img src={Content.Img}/>
          <div className={Styles.SelectSize}>
            <p className={Styles.Foodtext}>{Content.FoodName}</p>
            <select>
              <option>Small</option>
              <option>Big</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        </div>
      </div>
      <div className={Styles.Price}> <span>{NairaIcon}</span> { formatPrice(Content.Price)}</div>
      <div className={Styles.Quantity}>
      <div className={Styles.Btn}>
            <button onClick={() => handleChange (Content , -1)} disabled={Content.Amount === 1}>-</button>
            {Content.Amount}
            <button onClick={() => handleChange (Content , +1)} disabled={Content.Amount === 100}>+</button>
        </div>

      </div>

      </div>
      <i onClick={() => handleRemove(Content.id)} className={Styles.TrashIcon}>{TrashIcon}</i>
      <div className={Styles.Lines}/>

      </div>
      ))}

      </div>
      </div>
      <span onClick={ClearCart}  className={Styles.ccc}>Clear Cart <i  className={Styles.Clearcart}>{TrashIcon}</i></span>
      <div className={Styles.TotalContainer}>
      <p>Total:</p>
      <p > <span>{NairaIcon}</span> { formatPrice (Price)}</p>
      </div>
      
      <button className={Styles.Tot} onClick={ReturntoShop}>Return to shop</button>
      </div> 

        )
      }
      export default Order