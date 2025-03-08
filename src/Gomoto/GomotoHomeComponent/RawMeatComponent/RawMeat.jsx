import React, { useEffect, useState } from 'react'
import Styles from './RawMeat.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import RawMeatCard from './RawMeatCardComponent/RawMeatCard';
const RawMeat = ({RawFoodList, handleClick}) => {
  const CircleIcon = <FontAwesomeIcon icon={faCircle}/>
    
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
  
    // const NextImg = () => {
    //   if(currentIndex < 5 - 0){
    //     setCurrentIndex(currentIndex + 1)
    //   }
  
    // if(screen <= 900){
    //   if(currentIndex < 8 - 0){
    //     setCurrentIndex(currentIndex + 1)
    // }
    // }
  
  
    // if(screen <= 600){
    //   if(currentIndex <  9){
    //     setCurrentIndex(currentIndex + 1)
    // }
    // }   
    // }
  
    // const prev = () => {
    //   if(currentIndex){
    //     setCurrentIndex(currentIndex - 1)
    //   }
    // }
    return (
      <div className={Styles.FastFood}>
        <div className={Styles.FastFoodWapper}>
          <div className={Styles.FastFoodSlider} style={{transform: `translateX(-${currentIndex * 180}px)`,
                                                              transition: `0.5s ease-in-out`}}>
            {RawFoodList.map((content) => (
              <RawMeatCard key={content.id} content={content} handleClick={handleClick} />
            ))}
              
          </div>
        </div>
           <div className={Styles.LeftXright}>
                              <i  className={Styles.Next}>{ArrowRightIcon}</i>
                    
                              <i className={Styles.Prev}>{ArrowLeftIcon}</i>
                              </div>
            
      </div>
    )
}

export default RawMeat