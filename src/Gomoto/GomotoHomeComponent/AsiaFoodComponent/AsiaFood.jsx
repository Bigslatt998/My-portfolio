import React, { useEffect, useState } from 'react'
import Styles from './AsiaFood.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AsiaFoodCard from './AsiaFoodCardComponent/AsiaFoodCard';


// import { AsianFoodList } from '../../../List';
const AsiaFood = ({AsianFoodList, handleClick}) => {
  const CircleIcon = <FontAwesomeIcon icon={faCircle}/>
  const ArrowRightIcon = <FontAwesomeIcon icon={faArrowRight}/>
    const ArrowLeftIcon = <FontAwesomeIcon icon={faArrowLeft}/>
  const [currentIndex, setCurrentIndex] = useState(0)
//  const AsianFoodList = [
//     {id: 1, Img: ShrimpRoll, FoodName: 'Shirmp Roll', Discription: 'Sed ut perspiciants unde omnis iste natus error sit voluptatem ...', Price: 3000, Amount: 1 },
//     {id: 2, Img: RollTuna, FoodName: 'Roll with Tuna', Discription: 'Sed ut perspiciants unde omnis iste natus error sit voluptatem ...', Price: 3000, Amount: 1 },
//     {id: 3, Img: SalmRoll, FoodName: 'Salmon Roll', Discription: 'Sed ut perspiciants unde omnis iste natus error sit voluptatem ...', Price: 3000, Amount: 1 },
//     {id: 4, Img: EelRoll, FoodName: 'Pickled Eel Roll', Discription: 'Sed ut perspiciants unde omnis iste natus error sit voluptatem ...', Price: 3000, Amount: 1 },
//     {id: 5, Img: FishRoll, FoodName: 'Fish Roll', Discription: 'Sed ut perspiciants unde omnis iste natus error sit voluptatem ...', Price: 3000, Amount: 1 },
//     {id: 6,  Img: CrabRoll, FoodName: 'Roll with Crab', Discription: 'Sed ut perspiciants unde omnis iste natus error sit voluptatem ...', Price: 3000, Amount: 1 },

// ]
 
 

  const [screen, setScreen] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setScreen(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return() => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const NextImg = () => {
    if(currentIndex < 5 - 0){
      setCurrentIndex(currentIndex + 1)
    }

  if(screen <= 900){
    if(currentIndex < 8 - 0){
      setCurrentIndex(currentIndex + 1)
  }
  }


  if(screen <= 600){
    if(currentIndex <  9){
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
    <div className={Styles.FastFood}>
      <div className={Styles.FastFoodWapper}>
        <div className={Styles.FastFoodSlider} style={{transform: `translateX(-${currentIndex * 10}%)`,
                                                            transition: `0.5s ease-in-out`}}>
          {AsianFoodList.map((content) => (
            <AsiaFoodCard key={content.id} content={content} handleClick={handleClick} />
          ))}
            
        </div>
      </div>
          <div className={Styles.LeftXright}>
                    <i onClick={NextImg} className={Styles.Next}>{ArrowRightIcon}</i>
          
                    <i onClick={prev} className={Styles.Prev}>{ArrowLeftIcon}</i>
                    </div>
    </div>
  )
}

export default AsiaFood