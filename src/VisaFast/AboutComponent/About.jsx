import React from 'react'
import Styles from './About.module.css'
import about2 from '../../assets/about2.png'
import { Float } from '../../List'
const About = () => {
  return (
    <div className={Styles.AboutContainer}>

    <div className={Styles.IMage}>
            <div className={Styles.Img}> 
                <span ><svg className={Styles.svg} width="505" height="599" viewBox="0 0 505 599" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M503 250C503 113.059 389.493 2 252.5 2C115.507 2 2 113.059 2 250V597H503V250Z" stroke="#13AAA1" strokeWidth="4"/>
                        </svg>
                    </span>
                    <img src={about2}/>
                    <span>{Float}</span>
            </div>
    </div>
    <div className={Styles.AboutText}>
            <p>About VisaFast</p>
            <h1>Welcome your visitors and set the tone for company mission & values.</h1>
            <p>Share the overarching goal of your visa consulting services. Explain how you're dedicated to simplifying the visa process and enabling seamless international travel. Highlight the unique selling points that set your visa consulting services apart from the competition. Emphasize what makes your company the best choice for potential clients.</p>
            <p>Detail your team's experience and knowledge in the visa and immigration field. Explain how your expertise benefits your clients throughout their visa application journey. Discuss how you prioritize the needs and goals of your clients. Emphasize personalized service and a commitment to finding tailored solutions.</p>
            <button className={Styles.butt}>Join Our Visa Journey</button>

    </div>
    </div>
  )
}

export default About