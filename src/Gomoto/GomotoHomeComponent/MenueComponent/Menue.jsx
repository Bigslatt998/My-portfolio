  import React, { useState, useEffect } from 'react'
  import Styles from './Menue.module.css'
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {  faXmark, faPlus, faMinus, faShoppingBasket, faUser, faSearch} from '@fortawesome/free-solid-svg-icons';
  import LogoII from '../../../assets/logo.png'
  import Cart from '../../CartComponent/Cart';
  import { Link, useNavigate } from 'react-router-dom';

  
  


  const Menue = ({setIsMenu, isMenu, HandleMenue, size}) => {
      const XmarkIcon = <FontAwesomeIcon icon={faXmark}/>
      const PlusIcon =  <FontAwesomeIcon icon={faPlus} />
  const MinusIcon = <FontAwesomeIcon icon={faMinus} />
  const BagIcon = <FontAwesomeIcon icon={faShoppingBasket}/>
  const UserIcon = <FontAwesomeIcon icon={faUser}/>
  const SearchIcon = <FontAwesomeIcon icon={faSearch}/>
  const navigate = useNavigate()


  const [OpenAnswer, setOpenAnswer] = useState(null)
    const toggleAnswer = (id) => {
        setOpenAnswer(OpenAnswer === id ? null : id)
    }

    const HandleCart = () => {
      navigate('/GomotoHome/Cart')
      setIsMenu(false)
    }

      const MenueComponet = [ 
          {id: 1, Text: 'Home' , DropDown: (<><li>Food Delivery</li>
                                              <li>Water Delivery</li>
                                              <li>Pizza Time</li>
                                              <li>Medical Supplies</li></>), 
                                              Icon: MinusIcon},
          {id: 2, Text: 'About US', DropDown:  (<><li>Testimonials</li>
                                                    <li>FAQ</li>
                                                    <li>Gallery</li>
                                                    <li>404 Page</li></>)},
          {id: 3, Text: 'Catalog', DropDown:  (<><li>Shop</li>
                                                  <li>Cart</li>
                                                  <li>Checkout</li>
                                                  <li>My Account</li></>)},
          {id: 4, Text: 'Blog', DropDown: (<><li>Blog with Sidebar</li>
                                              <li>Blog without Sidebar</li>
                                             </>)},
          // {id: 5, Text: 'Home'}
        ]

    

    return (
      <div className={Styles.Menue}>
          <div className={Styles.MenueOpen}>
              <div className={Styles.OOOOpen}>
                <div className={Styles.Header}>
                  <img src={LogoII}/>
                  <span onClick={HandleMenue}  className={Styles.CloseMenue}>{XmarkIcon}</span>
                </div>

                <div className={Styles.DropDoeeen}>
              
                {MenueComponet.map((Content) => (
                                    <div key={Content.id} className={Styles.FAQContent}>
                                        {/* Question Box */}
                                        <div className={Styles.QuestionBox} onClick={() => toggleAnswer (Content.id)}>
                                        <p>{Content.Text}</p>
                                        <div>{OpenAnswer === Content.id ? MinusIcon : PlusIcon}</div>
                                        </div>
                                        {/* Answer Box */}
                                        {OpenAnswer === Content.id && (
                                          <div className={Styles.AnswerBox}>
                                              <ul>
                                              {Content.DropDown}
                                              </ul>
                                          </div>
                                        )}
                                    </div>
                                    
                                    
                                  ))}
                                  <div className={Styles.Contact}>
                                  <li>Contacts</li>
                                  </div>
                              </div>
    <div className={Styles.Cartt}>
        <div className={Styles.USerXcart}>
           <div className={Styles.Catt} onClick={HandleCart}>
                  <i >{BagIcon}</i> {size === 0 ? '' : <span className={Styles.Carttt}>{size}</span>}
            </div>
          
        <i>{UserIcon}</i>
        
        </div>
        <div className={Styles.Inpt}>
        <input type='text' placeholder='Search'/>
        <span>{SearchIcon}</span>
        </div>
    </div>       
              </div>
          </div>
      </div>
    )
  }

  export default Menue