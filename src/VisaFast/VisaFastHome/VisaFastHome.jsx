import React from 'react'
import NavComponent from '../NavComponent/NavComponent'
import Styles from './VisaFastHome.module.css'
import { Link, Outlet } from "react-router-dom";
import Main from '../MainComponent/Main';
import About from '../AboutComponent/About';
import Story from '../StoryComponent/Story';
import Article from '../ArticleComponent/Article';
import Footer from '../FooterComponent/Footer';
import Testimonials from '../TestimonialsComponent/Testimonials';
import OurTeam from '../OurTeamComponent/OurTeam';
import Countries from '../CountriesComponent/Countries';
import Whychooseus from '../WhyChooseUSCOmponent/Whychooseus';
import Services from '../ServicesComponent/Services';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Logo } from '../../List';
const VisaFastHome = () => {
    const AngleDownIcon = <FontAwesomeIcon icon={faAngleDown}/>
    
  return (
    <div className={Styles.Boody}>
        <div className={Styles.Container}>
            <div className={Styles.COntain}>
            <NavComponent/>
            </div>
            <div className="Main">
                <Main/>
            </div>
        </div>

        <div className="About">
          <About/>
        </div>
        
        <div className="Services">
          <Services/>
        </div>

        <div className="Story">
          <Story/>
        </div> 

        <div className="Whychooseus">
          <Whychooseus/>
        </div> 

        <div className="Countries">
          <Countries/>
        </div> 

        <div className="OurTeam">
          <OurTeam/>
        </div> 

        <div className="Testimonials">
          <Testimonials/>
        </div> 

        <div className="Article">
          <Article/>
        </div> 

        <div className="Footer">
          <Footer/>
        </div> 
    </div>
  )
}

export default VisaFastHome