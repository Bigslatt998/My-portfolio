import React, { useState, useEffect, useContext } from 'react'
import { Link, Outlet } from "react-router-dom";
import Styles from './NavComponent.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { Logo } from '../../List';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
const NavComponent = () => {
    const AngleDownIcon = <FontAwesomeIcon icon={faAngleDown}/>
    const BarIcon = <FontAwesomeIcon icon={faBars}/>
    
    const [isSticky, setisSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setisSticky(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [Menue, setMenue] = useState(false)
    const HandleMenue = () => {
        setMenue(!Menue)
    }
    return (
        <div className={`${isSticky ? Styles.sticky : ''} ${Styles.header}`}>
            <div className={Styles.HeaderContent}>
                <div className={Styles.Logo}>
                    {Logo}
                </div>

                
                <nav className={`${Menue ? Styles.Show: ''}`}>
                    <ul>
                        <li><Link className={Styles.Link}>Home  <span>{AngleDownIcon}</span> </Link></li>
                        <li className={Styles.Links}><Link className={Styles.Link}>Services <span>{AngleDownIcon}</span></Link></li>
                        <li><Link className={Styles.Link}>Pages <span>{AngleDownIcon}</span></Link></li>
                        <li><Link className={Styles.Link}>Shop <span>{AngleDownIcon}</span></Link></li>
                        <li><Link className={Styles.Link}>Pages <span>{AngleDownIcon}</span></Link></li>
                    </ul>
                    <button className={Styles.button}>Consult Our Experts</button>
                </nav> 
                
                <i onClick={HandleMenue} className={Styles.Bar}>{BarIcon}</i>
            </div>
            </div>
    )
}

export default NavComponent



{/* <nav>
                <ul>
                    <li><Link className={Styles.Link}>Home  <span>{AngleDownIcon}</span> </Link></li>
                    <li><Link className={Styles.Link}>Services <span>{AngleDownIcon}</span></Link></li>
                    <li><Link className={Styles.Link}>Pages <span>{AngleDownIcon}</span></Link></li>
                    <li><Link className={Styles.Link}>Shop <span>{AngleDownIcon}</span></Link></li>
                    <li><Link className={Styles.Link}>Pages <span>{AngleDownIcon}</span></Link></li>
                    <li><Link className={Styles.Link}>ytahhhh <span>{AngleDownIcon}</span></Link></li>
                </ul>
            </nav>  */}