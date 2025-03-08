import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../NavComponent/Nav'
import Styles from './Main.module.css'


const Main = ({HandleLightMood, 
  setIsLight, isLight}) => {
  return (
    <div    className={` ${Styles.HHHYYH} ${setIsLight ? Styles.LightMood : ''}`}>
                <Nav setIsLight={setIsLight} isLight={isLight} HandleLightMood={HandleLightMood}/>
                
                <Outlet/>
            </div>
  )
}

export default Main