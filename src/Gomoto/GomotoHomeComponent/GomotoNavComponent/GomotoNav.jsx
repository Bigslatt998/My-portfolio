import React, { useState, useEffect } from 'react'
import Styles from './GomotoNav.module.css'
import Logo from '../../../assets/logo.png'
import { NavContetnt } from '../../../List';
import { NavProfile } from '../../../List';
import Menue from '../MenueComponent/Menue';
import Navigate from '../NavigateComponent/Navigate';
import HomeDropDown from '../HomeDropDownComponent/HomeDropDown';
// import { SearchIcon } from '../../../List';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark , faPhone, faSearch, faBars , faShoppingBasket, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
// const SearchIconn = <FontAwesomeIcon Icon={faSearch}/>





const GomotoNav = ({setIsMenu,Warning,  isMenu, HandleMenue, size }) => {
    const SearchIcon = <FontAwesomeIcon icon={faSearch}/>
    const BarIcon = <FontAwesomeIcon icon={faBars}/>
    const XmarkIcon = <FontAwesomeIcon icon={faXmark}/>
    const BagIcon = <FontAwesomeIcon icon={faShoppingBasket}/>
    const AngleRightIcon = <FontAwesomeIcon icon={faAngleRight}/>
    const navigate = useNavigate()
    
    
    const [SeacrhShow, SetsearchShow] = useState(false)
    const [ScreenWith, setScreenWith] = useState(false)
    // const [isMenu, setIsMenu] = useState(false)
    useEffect(() => {
        const HandleResize = () => {
            setScreenWith(window.innerWidth <= 1200)
        }
        HandleResize();
        window.addEventListener('resize', HandleResize)

        return () => {
            window.removeEventListener('resize', HandleResize)
        }
    }, [])

    const HandleSearch = () => {
        SetsearchShow(!SeacrhShow)
    }

    const HandleCart = () => {
        navigate('/GomotoHome/Cart')
        setIsMenu(false)
      }
    
      const HandleHome = () => {
        navigate('/GomotoHome')
      }
    
    
return (
    <div className={Styles.GomotoNav}>
        <nav>
            <div onClick={HandleHome} className={Styles.Logo}>
                <img src={Logo}/>
            </div>
            <div className={Styles.Navigate}>
                <Navigate HandleHome={HandleHome}/>
            </div>
            
            <div className={Styles.CartIno}>
                {NavProfile.map((content) => (
                    <ul key={content.id} className={``}><Link className={`${content.id === 1? Styles.PhoneNumb : ''}`}> 
                        <i>{content.Icon}</i> 
                        {content.Text}</Link>
                    </ul>
                ))}
                
            </div>
            <div className={Styles.Srrrrr}>   
            <div className={Styles.BarIcon}>
                <div className={Styles.Cartt} onClick={HandleCart}>
                    <i >{BagIcon}</i> {size === 0 ? '' : <span className={Styles.Carttt}>{size}</span>}
                </div>
                <span className={Styles.SearchIcon} onClick={HandleSearch}>{SearchIcon}</span>
                <div className={Styles.BBar}>
                <div  onClick={HandleMenue} className={`${Styles.Bar} `}>
                        <span className={Styles.Barline}></span>
                        <span className={Styles.Barline}></span>
                        <span className={Styles.Barline}></span>
                </div>
                </div>
                </div>
        {Warning && <div className={Styles.CardAdded}>Product is already added to your cart</div> }
                    
                {/* MenueDrop */}
                {isMenu && (
                    <Menue setIsMenu={setIsMenu} 
                    isMenu={isMenu} 
                    HandleMenue={HandleMenue}
                    size={size}/>
                )}
            </div>
            <div className={`${Styles.Input} ${SeacrhShow ? Styles.Show : '' }`} >
            <input type='text'/>
            <span className={Styles.Cancle} onClick={HandleSearch}>{XmarkIcon}</span>
            </div>
        </nav>
        <div className={Styles.Lin}></div>

    </div>
  )
}

export default GomotoNav