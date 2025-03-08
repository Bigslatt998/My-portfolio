import React, { useState } from 'react'
import Styles from './Cart.module.css'
import GomotoNav from '../GomotoHomeComponent/GomotoNavComponent/GomotoNav'
import NightBurger from '../../assets/NightBurger.jpg'

import Footer from '../GomotoHomeComponent/FooterComponent/Footer'
import { Link, useNavigate } from 'react-router-dom';
import GomotoHome from '../GomotoHomeComponent/GomotoHome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import PaymentMethod from '../GomotoHomeComponent/PaymentMethodComponent/PaymentMethod'
import Order from '../GomotoHomeComponent/OrderComponent/Order'
import FastFoodOrder from '../GomotoHomeComponent/FastFoodOrderComponent/FastFoodOrder'
const Cart = ({setCart, handleRemove, cart, size, handleChange, Price, setIsMenu, isMenu, HandleMenue, FastFoodList, handleTotalPrice}) => {
          const FaceSmileIcon = <FontAwesomeIcon icon={faFaceSmile}/>
  
  const navigate = useNavigate()
  const HandleReturntoShop = () => {
    navigate('/FastFoodOrder')
  }

  const HandleHome = () => {
    navigate('/GomotoHome')
  }


 

  return (
    <div className={Styles.Cart}>
    <div className={Styles.CartContainer}>
      <div className={Styles.CartTRansParent}>
      <GomotoNav setIsMenu={setIsMenu} 
                      isMenu={isMenu} 
                      HandleMenue={HandleMenue}
                      size={size}
                      HandleHome={HandleHome}/>

      <div className={Styles.Text}>
        <p className={Styles.CartPPP}>Cart</p>
        <div className={Styles.HomeXcart}>
          <p className={Styles.HomeX} onClick={HandleHome}>Home</p>
          <div className={Styles.Lin}/>
          <p>Cart</p>
        </div>
        </div>
      </div>
    </div>
    {cart.length === 0 ? (
      <div className={Styles.EmptyCart}>
        <div className={Styles.DIsplay}>
          <p>Your cart is currently empty.</p>
        </div>
        <button onClick={HandleReturntoShop}>Return to shop</button>
      </div>
    ) : (
      <div className={Styles.CartAdded}>
        <Order cart={cart} setCart={setCart} handleChange={handleChange}
                handleTotalPrice={handleTotalPrice}
                Price={Price} 
                handleRemove={handleRemove}/>
          
         
       <PaymentMethod/>
      </div>
    )}

<Footer/>

    </div>

  )
}

export default Cart

// onClick={() => handleChange (item , +1)} disabled={item.Amount === 10}
// onClick={() => handleChange (item , -1)} disabled={item.Amount === 1}


// {/* <div className={Styles.CartProduct}>
// {cart.map((Content) => (
//   <div className={Styles.CartProduct}>
//     <div className={Styles.Oeder}>
//     <div className={Styles.OrderText}>
//       {TableHead.map((Content) => (
//         <div id={Content.id} className={Styles.Box}>
//           <p>{Content.Head}</p>
//         </div>
//       ))}
         
      
//     </div>
//     <div className={Styles.Line}/>
//     </div>


//     <div className={Styles.OrderDisplay}>
//       <div className={Styles.Img}>
//         <div className={Styles.IMgDisplay}>
//           <img src={Burger}/>
//           <div className={Styles.SelectSize}>
//             <p>Burger</p>
//             <select>
//               <option>Small</option>
//               <option>Big</option>
//               <option>Medium</option>
//               <option>Large</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div className={Styles.Price}>1500</div>
//       <div className={Styles.Quantity}>
//       <div className={Styles.Btn}>
//             <button >-</button>
//             {/* {item.Amount} */}1
//             <button>+</button>
//         </div>

//       </div>
//       <div className={Styles.TotalPrice}>10,000</div>
//     </div>
//   </div>
// ))}
// </div>
// <div className={Styles.Line}/>


// </div>  */}