import React, { useState, useEffect } from 'react'
import './PortifolioTWO.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faCss, faHtml5, faInstagram, faReact, faSquareJs, faSquareXTwitter, faTiktok, faTwitter, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import { faBars, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Half from '../assets/Half.png'
import Full from '../assets/Full.png'

const PortifolioTWO = () => {
        const Moon =<FontAwesomeIcon icon={faMoon}/>
        const LocationDot =<FontAwesomeIcon icon={faLocationDot}/>
        const Bars =<FontAwesomeIcon icon={faBars}/>
        const InstagramIcon = <FontAwesomeIcon icon={faInstagram}/>
        const TwitterIcon = <FontAwesomeIcon icon={faSquareXTwitter}/>
        const TikTokIcon = <FontAwesomeIcon icon={faTiktok}/>
        const WhatsAppIcon = <FontAwesomeIcon icon={faWhatsapp}/>
        const HTMLIcon = <FontAwesomeIcon icon={faHtml5}/>
        const CSSIcon = <FontAwesomeIcon icon={faCss}/>
        const ReachIcon = <FontAwesomeIcon icon={faReact}/>
        const JSIcon = <FontAwesomeIcon icon={faSquareJs}/>
        const MailIcon = <FontAwesomeIcon icon={faEnvelope}/>
        const PhoneIcon = <FontAwesomeIcon icon={faPhone}/>

        const [isMenu, setIsMenu] = useState(false)
        const HandleMenue =()=>{
            setIsMenu(!isMenu)
        }
        
        const [currentTime, setCurrentTime] = useState(new Date())
        useEffect(() => {
            const interID = setInterval(() => {
                setCurrentTime(new Date())
            }, 1000)
            return () => clearInterval(interID)
        }, [])
        const formatTime = (date) => {
            const TimeNow = {
                timeZone: "Africa/Lagos",
                weekday: 'short',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            return date.toLocaleString("eng-NG", TimeNow)
        }
        
  return (
    <div className="PContainer">
    <div className="PortifolioContainer">
        <div id='Home' className="HeaderContainer">
            <header>
                <nav>
                <div className="Logo">
                    <h1>Portfolio</h1>
                </div>
                <ul className={`${'NavLink'} ${isMenu ? 'Open' : ''}`}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">My Skills</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li className="DateANDtime">
                    <span >{formatTime(currentTime)}</span>
                    <span >{Moon}</span>
                </li>
            </ul>
            <div onClick={HandleMenue} className='Toggle'>
                <i>{Bars}</i>
            </div>

            <div className="Style">
            <div className="Circle"></div>
        </div>
        <div className="Style2">
            <div className="Triangle"></div>
        </div>
                </nav>
            </header>
        </div>
        <main>

        <div className="MainContainer">
            <div className="MainText">
                <p>Hello, It's Me</p>
                <h1 className="textani">
                    <span>G</span>
                    <span>a</span>
                    <span>n</span>
                    <span>i</span>
                    <span>y</span>
                    <span>u</span>
                     &nbsp;
                    <span>T</span>
                    <span>a</span>
                    <span>o</span>
                    <span>f</span>
                    <span>e</span>
                    <span>e</span>
                    <span>q</span>
                </h1>
                <p>I am a Front-end developer</p>
                <div className='Social'>
                    <li><a href='https://www.instagram.com/icode_xx8?igsh=MW50eWQ1bnp3cDUxOQ%3D%3D&utm_source=qr'> {InstagramIcon}</a></li>
                    <li><a href='https://x.com/icode_xx8?s=21'> {TwitterIcon}</a></li>
                    <li><a href='https://www.tiktok.com/@icode_xx8?_t=ZM-8ubR6qWI4gB&_r=1'> {TikTokIcon}</a></li>
                    <li><a href='https://wa.link/1zpzxb'> {WhatsAppIcon}</a></li>
                    <li><a href='mailto:ganiyutaofeeqolarewaju@gmail.com'>{MailIcon}</a> </li>
                </div>
                <div className="Buttonn">
                        <button>More About Me</button>
                </div>
                </div>
                <div className='IMG'>
                    <img src={Half}/>
                </div>
                </div>
        </main>
        <div id='About' className="AboutMe">
        <div className="AboutMeContainer">
        <div className="AboutMeImg">
            <img src={Full}/>
        </div>
        <div className="AboutMeText">
        <h1>About <span className="me">Me</span></h1>
        <p>Ganiyu Taofeeq</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur assumenda sapiente eum! Dolorum vero blanditiis, laboriosam voluptatem laudantium ullam hic recusandae aliquid nostrum facilis, accusantium rerum ad alias assumenda.</p>
        <div className="Bton">
            <button id="HireMe" type="button">Hire Me</button>
    </div>
    </div>
    </div>
    </div>

    <div id="Skills" className="MyServices">
        <h1>MY SKILLS</h1>
        <div className="MyServicesContainer">
            
                <article className="ServiceArticle" >
                    <div className="img">
                    <i>{HTMLIcon}</i>
                    </div>
                    <div className="Box1Text">
                        <span className="Description">HyperText Markup Language</span>
                        <h2 className="Title">HTML</h2>
                        <a href="#" className="Box1Button">Learn More</a>
                    </div>
                </article>
                <article className="ServiceArticle" >
                    <div className="img">
                    <i>{CSSIcon}</i>
                    </div>
                    <div className="Box1Text"> 
                        <span className="Description">Cascading Style Sheets</span>
                        <h2 className="Title">CSS</h2>
                        <a href="#" className="Box1Button">Learn More</a>
                    </div>
                </article>
            
                <article className="ServiceArticle" > 
                    <div className="img">
                    <i>{JSIcon}</i>
                    </div>
                    <div className="Box1Text">
                        <span className="Description">JavaScript</span>
                        <h2 className="Title">JS</h2>
                        <a href="#" className="Box1Button">Learn More</a>
                    </div>
                </article>

                <article className="ServiceArticle" > 
                    <div className="img">
                    <i>{ReachIcon}</i>
                    </div>
                    <div className="Box1Text">
                        <span className="Description">ReactJS</span>
                        <h2 className="Title">React</h2>
                        <a href="#" className="Box1Button">Learn More</a>
                    </div>
                </article>
        </div>
    </div>
    <div id='Contact' className="ContactContainer">
        <div className="container">
            <div className="ContactText">
                <h1>Contact <span id="me">Me</span></h1>
                Lets work together
                <p>I'm glad you've visited my personal Portfolio website! If you have any questions, suggestions, or would like to collaborate, please feeel free to contact me through this form. I will endeavor to reply to your message as soon as possible</p>
         
                        <li><i>{MailIcon}</i><a href='mailto:ganiyutaofeeqolarewaju@gmail.com'>ganiyutaofeeqolarewaju@gmail.com</a></li>
                        <li> <i>{PhoneIcon}</i> < a href="tel:09026636087">+234 9026636087</a></li>
            </div>

            <div className="ContactInput">
                <input type="text" placeholder="Enter Your Name"/>
                <input type="text" placeholder="Enter Your Email"/>
                <input type="text" placeholder="Enter Your Subject"/>
                <textarea placeholder="Enter Your Name"/>
                    <button id="Submit" type="submit">Submit</button>
            </div>
        </div>
    </div>
    
    </div>
    <div className='SocialII'>
    <li><a href='#'> {InstagramIcon}</a></li>
    <li><a href='https://www.instagram.com/icode_xx8?igsh=MW50eWQ1bnp3cDUxOQ%3D%3D&utm_source=qr'> {InstagramIcon}</a></li>
                    <li><a href='https://x.com/icode_xx8?s=21'> {TwitterIcon}</a></li>
                    <li><a href='https://www.tiktok.com/@icode_xx8?_t=ZM-8ubR6qWI4gB&_r=1'> {TikTokIcon}</a></li>
                    <li><a href='https://wa.link/1zpzxb'> {WhatsAppIcon}</a></li>
                    <li><a href='mailto:ganiyutaofeeqolarewaju@gmail.com'>{MailIcon}</a> </li>
    </div>
    </div>
  )
}

export default PortifolioTWO