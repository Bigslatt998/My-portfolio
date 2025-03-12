// import React from 'react'
import React, { useEffect } from 'react';
import { useState } from 'react';
import Styles from './About.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {faAngleDown  } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp, faCalendarDay, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCss, faHtml5, faInstagram, faJs, faReact, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const About = ({HandleLightMood, setIsLight, isLight, handleDetailsOpen, isDetailsOpened, setIsDetailsOpened}) => {

    const HTMLIcon = <FontAwesomeIcon icon={faHtml5}/>
    const CSSIcon = <FontAwesomeIcon icon={faCss}/>
    const JSIcon = <FontAwesomeIcon icon={faJs}/>
    const ReactIcon = <FontAwesomeIcon icon={faReact}/>
    const [HTMLprogress, setHTMLProgress] = useState(0);
    const [CSSprogress, setCSSProgress] = useState(0);
    const [JSprogress, setJSProgress] = useState(0);
    const [Reactprogress, setReactProgress] = useState(0);

    const Skillsdetails = [
        {id: 1, Text: 'HTML', Discription: 'I use HTML to craft semantic, well-strictured layout, ensureing accessibility and compatibility across diffrent browser.', Icon: HTMLIcon, Progress: HTMLprogress},
        {id: 2, Text: 'CSS', Discription: 'I leverage CSS to create responsive designs, animations and modern layouts, ensureing website look great on all devices. I focus on delivering dynamic and engaging user experience', Icon: CSSIcon, Progress: CSSprogress},
        {id: 3, Text: 'JAVASCRIPT', Discription: 'From implementing sliders and modal windows to real-time update and API integrations I utilize JavaScript to make web applications responsive and user-friendly.',Icon: JSIcon, Progress: JSprogress},
        {id: 4, Text: 'REACT', Discription: 'I specialize in crafting responsive single-page application (SPAs) with dynamic routing, state management and seamless user experiences using REACT', Icon: ReactIcon, Progress: Reactprogress}
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            setHTMLProgress((prev) => {
                if(prev >= 90){
                    clearInterval(interval)
                    return 90
                }
                return prev + 1
            })
        }, 50)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCSSProgress((prev) => {
                if(prev >= 70){
                    clearInterval(interval)
                    return 70
                }
                return prev + 1
            })
        }, 50)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setJSProgress((prev) => {
                if(prev >= 50){
                    clearInterval(interval)
                    return 50
                }
                return prev + 1
            })
        }, 50)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setReactProgress((prev) => {
                if(prev >= 60){
                    clearInterval(interval)
                    return 60
                }
                return prev + 1
            })
        }, 50)
        return () => clearInterval(interval)
    }, [])
  return (
    <div className={Styles.AboutContainter}>
            <div className={Styles.Container}>
                <div className={Styles.Text}>
            <h1>About Me</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci totam dolorem vero animi magni doloremque minus rem possimus. Omnis culpa libero itaque aliquid aspernatur asperiores nulla, deserunt est nisi quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos error, quibusdam assumenda, nulla minima, nesciunt velit molestiae quis sequi quasi possimus libero? Mollitia pariatur sit illum alias saepe nostrum itaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur id modi obcaecati quisquam laudantium odit tenetur sunt consequatur consequuntur, aliquid omnis incidunt harum eligendi officiis repellat repudiandae quibusdam in?</p>
            </div>
            <h2>My Skills</h2>
            <div className={Styles.Myskills}>
                {Skillsdetails.map((Content) => (
                    <div key={Content.id} className={`${Styles.Box} ${isLight ? Styles.LightMood : ''}`} >
                        <p style={{fontSize: '1.5rem'}}>{Content.Icon} <span style={{marginLeft: '10px'}}>{Content.Text}</span></p>
                        <p className={Styles.Discription}>{Content.Discription}</p>
                        <div className={`${Styles.ProgressContainer} ${isLight ? Styles.LightMood : ''}`}>
                        <div className={`${Styles.ProgressBar} ${isLight ? Styles.LightMood : ''}`} style={{width: `${Content.Progress}%`}}>
                        {Content.Progress}%
                        </div>
                        </div>
                    </div>
                ))}
            </div>


            
            </div>
        </div>
  )
}

export default About