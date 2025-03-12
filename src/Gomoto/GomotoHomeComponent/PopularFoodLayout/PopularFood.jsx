import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Styles from './PopularFood.module.css'


const PopularFood = () => {
  const [CurrentPage, setCurrentPage] = useState('FastFood')
  return (
    <div className={Styles.PopularContainer}>
    <div className={Styles.PopularFood}>
    <p>Quick Pick</p>
          <h2>Popular Goods</h2>
          <nav>
            <ul>
              <li><Link className={`${Styles.Lik} ${CurrentPage === 'FastFood' ? Styles.Active : ''}`}  to='' 
                        onClick={() => setCurrentPage("FastFood")}>Fast food</Link></li>
              <li><Link className={`${Styles.Lik} ${CurrentPage === 'HotPizza' ? Styles.Active : ''}`} to='HotPizza'
                        onClick={() => setCurrentPage("HotPizza")}>Hot Pizza</Link></li>
              <li><Link  className={`${Styles.Lik} ${CurrentPage === 'AsiaFood' ? Styles.Active : ''}`} to='AsiaFood'
                        onClick={() => setCurrentPage("AsiaFood")}>Asia Food</Link></li>
              <li><Link className={`${Styles.Lik} ${CurrentPage === 'RawMeat' ? Styles.Active : ''}`} to='RawMeat'
                        onClick={() => setCurrentPage("RawMeat")}>Raw Meat</Link></li>

            </ul>
{/* <Outlet/> */}
          </nav>
          </div>
          </div>
  )
}

export default PopularFood