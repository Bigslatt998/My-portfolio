import React from 'react'
import Styles from './Nav.module.css'
import { Link } from 'react-router-dom'



const Nav = ({HandleLightMood, 
    setIsLight, isLight}) => {


        const NavList = [
            {id: 1, Text: 'About' , path: '/'},
            {id: 2, Text: 'Resume', path: '/Resume'},
            {id: 3, Text: 'Recent Work', path: '/RecentWork'},
            {id: 4, Text: 'Contact', path: '/MyContact'}
        ]
  return (
    <div className={Styles.nav}>
                                {/* <Link to='/'>About</Link> */}
                                    <ul  className={` ${Styles.Navul} ${isLight ? Styles.LightMood : ''}`}>
                                        {NavList.map((Content) => (
                                            <li key={Content.id}>
                                                <Link className={` ${Styles.LINK} ${isLight ? Styles.LightMood : ''}`} to={Content.path}>{Content.Text}</Link>
                                            </li>
                                        ))}
                                            </ul>
    </div>


  )
}

export default Nav