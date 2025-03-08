import React from 'react'
import Styles from './Main.module.css'
import { HHH, Curve } from '../../List' 
import hero from '../../assets/hero2.png'
import about2 from '../../assets/about2.png'
const Main = () => {
  return (
    <div className={Styles.MainContainer}>
        <div className={Styles.Welcome}>
            <p>Welcome to Visafast Consulting Services</p>
            <h1>Elevate Your Travel Experience with Our Visa Expertise</h1>
            <p>A brief supporting statement that elaborates on the headline and highlights the benefits of choosing your services.</p>
        <div className={Styles.button}>
                <button>Claim Your Visa Journey</button>
                <button>Request Visa Guidance</button>
            </div>
        </div>
        <div className={Styles.IMage}>
            <div className={Styles.Img}> 
                <svg className={Styles.svg} width="505" height="599" viewBox="0 0 505 599" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M503 250C503 113.059 389.493 2 252.5 2C115.507 2 2 113.059 2 250V597H503V250Z" stroke="#13AAA1" strokeWidth="4"/>
                        </svg>
               
                <img src={hero}/>
            </div>
            
            <span className={Styles.Curve}>{Curve}</span>
        </div>
        <div className={Styles.Circle}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
        
    </div>
  )
}

export default Main