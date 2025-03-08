// import React from 'react'
import React, { useEffect, useState } from 'react'

import Styles from './RecentArticle.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBacon, faBowlFood, faBurger, faCalendar, faCircle, faComment, faEye, faPizzaSlice, faStepBackward } from '@fortawesome/free-solid-svg-icons';
import CartBox from '../../../assets/CartBox.jpg'
import HandXCup from '../../../assets/HandXCup.jpg'
import Meat from '../../../assets/Meat.jpg'
 import DeliveryMen from '../../../assets/DeliveryMen.jpg'
const RecentArticle = () => {
  const CalenderIcon = <FontAwesomeIcon icon={faCalendar}/>
  const CommentIcon = <FontAwesomeIcon icon={faComment}/>
  const EyeIcon = <FontAwesomeIcon icon={faEye}/>

  const RecentArticle =[
    {id: 1, Head: 'All City Cafes and Restaurants Switched to Delivery Mode', 
            Img: Meat,
            Page: 'Morbi volutpat nisi a ligula vestibulum placerat. Suspendisse venenatis pulvinar nibh sed convallis. Cras elementum nunc a purus sodales tincidunt. Duis fringilla quam at tellus …', 
            Mini: 'Food Delivery', 
            Date: 'December 9, 2025', 
            icon: '1'},
    {id: 2, Head: 'Creative Packaging as a Successful Marketing Move', 
            Img: CartBox,
            Mini: 'Food Delivery', 
            Date: 'December 9, 2025', 
            icon: '1'},
    {id: 3, Head: 'Modern Food Delivery Services Overview', 
            Img: DeliveryMen,
            Mini: 'Food Delivery', 
            Date: 'December 9, 2025', 
            icon: '1'},
    {id: 4, Head: 'Bottled Water Home Delivery Companies', 
            Img: HandXCup,
            Mini: 'Gomoto', 
            Date: 'December 9, 2025', 
            icon: '1'},
  ]



  return (
    <div className={Styles.Article}>
    <article>
      <div className={Styles.ArticleText}>
          <p>Our Blog</p>
          <h1>Recent Articles</h1>
      </div>
      <div className={Styles.ArticleContainer}>
        {RecentArticle.map((Content) => (
            <div key={Content.id} className={`${Styles.Box} ${Content.id === 1? Styles.Box1: ''}
                                          ${Content.id === 2? Styles.Box2: ''}
                                          ${Content.id === 3? Styles.Box3: ''}
                                          ${Content.id === 4? Styles.Box4: ''}`}>
                                    
              <div className={Styles.Img}>
                <img src={Content.Img}/>
              </div>
              <div className={Styles.Text}>
                  <p className={Styles.Mini}>{Content.Mini}</p>
                  <h1>{Content.Head}</h1>
                  <p>{Content.Page}</p>
                <div className={Styles.Ln}/>
                <div className={Styles.DateXComment}>
                  <p> <i>{CalenderIcon}</i>{Content.Date}</p>
                  <p><i>{CommentIcon}</i>{Content.icon}</p>
                  <p><i>{EyeIcon}</i>{Content.icon}</p>
                </div>
              </div>
            </div>
        ))}
        
        
      </div>
      <button className={Styles.btn}>Read More</button>

    </article>
  </div>
  )
}

export default RecentArticle