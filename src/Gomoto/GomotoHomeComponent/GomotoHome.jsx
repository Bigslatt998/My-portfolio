import React from 'react'
import Styles from './GomotoHome.module.css'
import GomotoNav from './GomotoNavComponent/GomotoNav'
import EarthBackGround from '../../assets/EarthBackGround.png'
import Delivery from '../../assets/Delivery.png'
import { Link, Outlet } from 'react-router-dom'
import PopularFood from './PopularFoodLayout/PopularFood'
import FoodType from './FoodTypeComponent/FoodType'
import SitAThome from './SitAThomeComponent/SitAThome'
import CafeXResturant from './CafeXResturantComponent/CafeXResturant'
import Getwithapp from './GetwithappComponent/Getwithapp'
import PizzaAds from './PizzaAdsComponent/PizzaAds'
import RecentArticle from './RecentArticleComponent/RecentArticle'
import Footer from './FooterComponent/Footer'
const GomotoHome = ({setIsMenu,handleClick, Warning, isMenu, HandleMenue, size}) => {
    
 
  
  return (
    <div className={Styles.GomotoHomeContainer}>
      <div className={Styles.GomotoHome}>
        <nav>
          <GomotoNav setIsMenu={setIsMenu} 
                      isMenu={isMenu} 
                      HandleMenue={HandleMenue} 
                      size={size}
                      Warning={Warning}
                      handleClick={handleClick}/>

                      
        </nav>
        
        <main>
        <div className={Styles.hhhhh}>
              <div className={Styles.Text}>
                <div className={Styles.Header}>
                  <h1>Express</h1>
                  <h1>Home Delivery</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam tenetur architecto earum illo consequuntur qui corporis, nemo, sit, cupiditate placeat iusto libero alias minus voluptatibus suscipit quisquam quaerat dolores!</p>
                <button className={Styles.btn}>Read More</button>
              </div>
            <div className={Styles.Delivery}>
              
              <img src={Delivery}/>
            </div>
        </div>
        </main>
        </div>
          <FoodType/>
          <PopularFood/>
          <Outlet/>
          <SitAThome/>
          <CafeXResturant/>
          <PizzaAds/>
          <div className={Styles.Testimonials}>
            <p>Testimonials</p>
            <h1>Why Our Clients Choose Us</h1>
            <div className={Styles.Roll}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt porro dolore pariatur, voluptatum quas nostrum facilis ab quisquam impedit praesentium, eligendi temporibus quasi, earum blanditiis quidem iste esse commodi iure! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis at sapiente tempora perspiciatis consectetur quibusdam dolorum sint sequi incidunt voluptates exercitationem totam, quod, beatae architecto dolore neque, cupiditate iure mollitia.</p>
            <div className={Styles.Line}/>
          </div>
          <Getwithapp/>
          <RecentArticle/>
          <Footer/>
        </div>
  )
}

export default GomotoHome




{/*  */}