import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link, Outlet } from "react-router-dom";
import Styles from './RecentWork.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {faAngleDown  } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp, faCalendarDay, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import {  } from "@fortawesome/free-regular-svg-icons";
import NetFlixLogo from '../../assets/Netflix.png'

import Logo from '../../assets/logo.png'
import { VisaFast } from '../../List';

import { Navigate, useNavigate } from 'react-router-dom'


function RecentWork({isLight}){

const RecentDetails = [
    {id: 1, Img: NetFlixLogo},
    {id: 2,  Img:  Logo},
    {id: 3, Imgg: 'Another Portifolio'},
    {id: 4, Imgg: VisaFast}
]


const GamesDetails = [
    {id: 1, Text: 'Weather App'},
    {id: 2, Text: 'Snake Game'},
    {id: 3, Text: 'Library'},
    {id: 4, Text: 'Note Book'},
    {id: 5, Text: 'Music Playlist'},
    {id: 6, Text: 'Flip Game'},
    {id: 7, Text: 'Tetris Game'},
    {id: 8, Text: 'Nothing Here'}
]

const [currentSlide, setCurrentSlide] = useState(0)
const [isScreenSmall, setisScreenSmall] = useState(window.innerWidth <= 1000)

const handleResize = () => {
    setisScreenSmall(window.innerWidth <= 1000)
}

useEffect (() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
}, [])

const Up = () => {
    if(currentSlide < RecentDetails.length - 1){
        setCurrentSlide(currentSlide + 1)
    }
}

const Down = () => {
    if(currentSlide > 0){
        setCurrentSlide(currentSlide - 1)
    }
}

// const {setSelectedUser} = useContext(UserContext)
        const navigate = useNavigate()
              
    return(
        <div className={Styles.RecentWorkContainter}>
                <div className={Styles.Container}>
                <div className="Works">
                <h1>Recent Works</h1>
                <div className={Styles.SliderWrap} >  

            <div className={`${Styles.Myskills}`}>
                    {RecentDetails.map((Content) => (
                        <div key={Content.id} onClick={() => {
                            if(Content.id === 1){
                                alert('You are about to leave this site')
                                navigate("/NetflixHome")
                            }
                            else if(Content.id === 2){
                                alert('You are about to leave this site')
                                navigate("/GomotoHome")
                            } else if(Content.id === 3){
                                alert('You are about to leave this site')
                                navigate('/PortifolioTWO')
                            } else if(Content.id === 4){
                                alert('You are about to leave this site')
                                navigate('/VisaFastHome')
                            }
                        }}  className={`${Styles.Box} ${isLight? Styles.LightMood : ''} ${Content.id === 1? Styles.Netflix : null}`}>{Content.Text}
                                                    <img src={Content.Img}/>
                                                    <div>{Content.Imgg}</div>
                                                                                </div>
                    ))}
            </div>
            </div>
                </div>



                <div className="Games">
                <h1>Games and others</h1>
<div className={Styles.GameSliderWrap} >  

            <div className={`${Styles.Myskillss}`}>
                    {GamesDetails.map((Content) => (
                        <div onClick={() => {
                            if(Content.id === 1){
                                alert('You are about to leave this site')
                                navigate('/WeatherApp')
                            }
                            else if(Content.id === 2){
                                alert('You are about to leave this site')
                                navigate('/SnakeGame')
                            } else if(Content.id === 3){
                                alert('You are about to leave this site')
                                navigate('/Library')
                            } else if(Content.id === 4){
                                alert('You are about to leave this site')
                                navigate('/NoteBook')
                            } else if(Content.id === 5){
                                alert('You are about to leave this site')
                                navigate('/MusicPlay')
                            } else if(Content.id === 6){
                                alert('You are about to leave this site')
                                navigate('/TikTacToe')
                            } else if(Content.id === 7){
                                alert('You are about to leave this site')
                                navigate('/Tetris')
                            }
                        }} key={Content.id} className={`${Styles.Box} ${isLight? Styles.LightMood : ''}`}>
                            <p>{Content.Text}</p>
                        </div>
                    ))}
            </div>
            </div>

                </div>
                </div>
        </div>
    )
}
export default RecentWork


