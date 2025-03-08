import React from 'react'
import Styles from './HomeDropDown.module.css'


const HomeDropDown = () => {
const HomeContent = [
            {id: 1, Text: 'Food Delivery'},
            {id: 1, Text: 'Water Delivery'},
            {id: 1, Text: 'Pizza Time'},
            {id: 1, Text: 'Medical Supplies'}
          ]
  

  return (
    <div className={Styles.HomeContainer}>
      {HomeContent.map((Content) => (
        <div id={Content.id} className="Bo">
          {Content.Text}
          jjj   
        </div>
      ))}
    </div>
  )
}

export default HomeDropDown