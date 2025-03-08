import React from 'react'
import Styles from './Navigate.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark , faPhone, faSearch, faBars , faShoppingBasket, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import HomeDropDown from '../HomeDropDownComponent/HomeDropDown';
import { Link, useNavigate } from 'react-router-dom';


const Navigate = ({HandleHome}) => {
    const navigate = useNavigate()

        const AngleRightIcon = <FontAwesomeIcon icon={faAngleRight}/>
        const HomeContent = [
            {id: 1, Text: 'Food Delivery'},
            {id: 2, Text: 'Water Delivery'},
            {id: 3, Text: 'Pizza Time'},
            {id: 4, Text: 'Medical Supplies'}
          ]


          const CatrgoriesContent = [
            {id: 1, Text: 'Shop'},
            {id: 2, Text: 'Cart'},
            {id: 3, Text: 'Checkout'},
            {id: 4, Text: 'My Account'}
          ]

          const BlogContent = [
            {id: 1, Text: 'Blog with SideBar'},
            {id: 2, Text: 'Blog without SideBar'},
            
          ]
          
  return (
    <div className={Styles.Navigatttt}>
    <ul>
                        <li onClick={HandleHome} className={Styles.Home}><Link className={Styles.Link} >Home <span>{AngleRightIcon}</span></Link>
                            <div className={Styles.HomeDropDown}>
                            {HomeContent.map((Content) => (
                                        <div key={Content.id} className={`${Styles.Box}`} onClick={Content.id === 1 ? HandleHome : null}>
                                        {Content.Text}
                                           
                                        </div>
                                ))}
                            </div>
                        </li>
                        <li className={Styles.About}><Link className={Styles.Link}>About us  <span>{AngleRightIcon}</span></Link>
                            <div className={Styles.AboutDropDown}>
                            {HomeContent.map((Content) => (
                                        <div key={Content.id} className={Styles.Box}>
                                        {Content.Text}
                                           
                                        </div>
                                ))}
                            </div>
                        </li>
                        <li className={Styles.Catalog}><Link className={Styles.Link}>Catalog  <span>{AngleRightIcon}</span></Link>
                            <div className={Styles.CatalogDropDown}>
                            {CatrgoriesContent.map((Content) => (
                                        <div key={Content.id} className={Styles.Box}>
                                        {Content.Text}
                                           
                                        </div>
                                ))}
                            </div>
                        </li>
                        <li className={Styles.Blog}><Link className={Styles.Link}>Blog  <span>{AngleRightIcon}</span></Link>
                            <div className={Styles.BlogDropDown}>
                            {BlogContent.map((Content) => (
                                        <div key={Content.id} className={Styles.Box}>
                                        {Content.Text}
                                           
                                        </div>
                                ))}
                            </div>
                        </li>
                        <li><Link className={Styles.Link}>Contact</Link></li>
                    </ul>
                    </div>
  )
}

export default Navigate