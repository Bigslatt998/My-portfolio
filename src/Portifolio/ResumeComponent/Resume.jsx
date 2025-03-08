import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import Styles from './Resume.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot, faEnvelope, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {faAngleDown  } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleUp, faBookOpenReader, faCalendarDay, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import {  } from "@fortawesome/free-regular-svg-icons";


function Resume(){
    const BookIcon = <FontAwesomeIcon icon={faBookOpenReader}/>
    const CircleDotIcon = <FontAwesomeIcon icon={faCircleDot}/>

    const EducationDetails = [
        {id: 1, School: 'Federal Staff Primary School, Ilorin.', Year: '2004 – 2010', Course: '', Icon: CircleDotIcon },
        {id: 2, School: 'Federal Staff Secondary School, Ilorin.', Year: '2010 – 2016', Course: '', Icon: CircleDotIcon },
        {id: 3, School: 'Kwara Sate University, Malete.', Year: '2021-2024', Course: 'BSc. Library and Information Science', Icon: CircleDotIcon },
        {id:4, Icon: CircleDotIcon}

    ]

    const ExprenceDetails = [
        {id: 1, EX: 'Served as a Technical Librarian', Text: `I served as a librarian for Six (6) months at Al-  Hikmah University Ilorin, Kwara state.`, Year: '2023-2024', Icon: BookIcon },
        {id: 2, EX: 'Front-End Developer', Text: 'HTML, CSS, JAVASCRIPT and REACT', Year: '2023-Date', Icon: BookIcon},
        {id:3, Icon: CircleDotIcon}
    ]
    
    return(
        
        <div className={Styles.ResumeContainer}>
            <div className={Styles.Container}>
                <h1 className={Styles.H1}>Resume</h1>
                <div className={Styles.Details}>
                    <div className={Styles.Education}>
                        <div className={Styles.IIIIII}>
                        <i>{BookIcon}</i><span style={{marginLeft: '10px'}}>Education...</span>
                        </div>
                        {EducationDetails.map((Content) => (
                    <div className={Styles.hhhhj} key={Content.id}>
                        
                    <div className={Styles.Icon}>
                        <i></i><span style={{marginLeft: '40px'}}>
                        {Content.School} 
                        </span>
                    </div>
                            <span style={{marginLeft: '35px', color: 'gold'}}>{Content.Year}</span>
                    <div className={Styles.Text}>
                        {Content.Course}
                    </div>
                    </div>
                        ))}
        </div>

<div className={Styles.Experence}>
                <div className={Styles.IIIIII}>
                        <i>{BookIcon}</i><span style={{marginLeft: '10px'}}>Experence...</span>
                        </div>
                        {ExprenceDetails.map((Content) => (
                            <div className={Styles.hghhhh} key={Content.id}>
                    <div className={Styles.Icon} key={Content.id}>
                        <i></i><span className={Styles.iccc}  style={{marginLeft: '40px'}}>
                        {Content.EX} 
                        </span>
                    </div>
                    <div className={Styles.Text}>
                        <p>{Content.Text}</p>
                        
                    </div>
                    </div>
                        ))} 
                        </div>
                    
                </div>



                
            </div>
        </div>
    )
}
export default Resume