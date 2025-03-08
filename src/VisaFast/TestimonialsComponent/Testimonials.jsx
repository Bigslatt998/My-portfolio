import React, { useState, useEffect } from 'react'
import Styles from './Testimonials.module.css'
import { Testimonial } from '../../List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faArrowRight  } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
    const StarIcon = <FontAwesomeIcon icon={faStar}/>
      const [currentIndex, setCurrentIndex] = useState(0)
    const ArrowRightIcon = <FontAwesomeIcon icon={faArrowRight}/>
      const ArrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft}/>

      const [screen, setScreen] = useState(window.innerWidth)
        useEffect(() => {
          const handleResize = () => setScreen(window.innerWidth)
          window.addEventListener('resize', handleResize)
      
          return() => {
            window.removeEventListener('resize', handleResize)
          }
        }, [])
      
    const NextImg = () => {
      
      if(currentIndex < 3 - 0){
        setCurrentIndex(currentIndex + 1)
      }
      else{
        setCurrentIndex(currentIndex)
      }
  
    if(screen <= 900){
      if(currentIndex < 4 - 0){
        setCurrentIndex(currentIndex + 1)
    }
    }
  
  
    if(screen <= 600){
      if(currentIndex <  4 - 0){
        setCurrentIndex(currentIndex + 1)
    }
    }   
    }
  
    const prev = () => {
      if(currentIndex){
        setCurrentIndex(currentIndex - 1)
      }
    }
  
  return (
    <div className={Styles.TestimonialContainer}>
    <div className={Styles.TContainer}>
        <div className={Styles.Boxx1}>
          <p>Testimonials</p>
          <p>Transforming Visa Dreams into Reality with Visa Consulting</p>
          <p>Visa Consulting doesn't just handle the paperwork; they genuinely care about their clients' success. My consultant not only helped with the application but also gave me valuable tips for the interview.</p>
          <button className={Styles.butt}>Read Our All Reviews</button>
          
        </div>
        <div className={Styles.Boxx2}>
          <div className={Styles.SLider} style={{transform: `translateX(-${currentIndex * 300}px)`,
                                                            transition: ` transform 1s ease-in-out`}}>
            {Testimonial.map((Content) => (
            <div key={Content.id} className={Styles.Box}>
              <img src={Content.Img}/>
              <p>{Content.Text}</p>
              <div className={Styles.Stars}>
              <i>{StarIcon}</i>
              <i>{StarIcon}</i>
              <i>{StarIcon}</i>
              <i>{StarIcon}</i>
              <i>{StarIcon}</i>

              </div>
              <p>{Content.Name}</p>
              <p>{Content.Date}</p>
            </div>
            
            ))}
            {/* <div className={Styles.Box}>1</div> */}
           

          </div>
          <div className={Styles.Navigate}>
              <button onClick={NextImg} className={Styles.Next}>{ArrowRightIcon}</button>
              <button onClick={prev} className={Styles.Prev}>{ArrowLeftIcon}</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Testimonials