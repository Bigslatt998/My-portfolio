import React from 'react'
import Styles from './HotPizzaOrder.module.css'
import GomotoNav from '../GomotoNavComponent/GomotoNav'
import HotPizzaCard from '../HotPizzaComponent/HotPizzaFoodCardComponent/HotPizzaCard';
import { PizzaFoodList } from '../../../List';
import { Link, useNavigate } from 'react-router-dom';
import FastFoodCard from '../FastFoodCardComponent/FastFoodCard';
import ProductMenueOpen from '../ProductMenueOpenComponent/ProductMenueOpen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductCategories from '../ProductCategoriesComponent/ProductCategories';
const HotPizzaOrder = ({setIsMenu, Warning, SliderIcon, ProductMenue, HandleProductMenue, FastFoodList, isMenu, HandleMenue, handleClick, size}) => {
  const navigate = useNavigate()
  const HandleReturntoShop = () => {
    navigate('/GomotoHome')
  }

  const SearchIcon = <FontAwesomeIcon icon={faSearch}/>
          const AngleRightIcon = <FontAwesomeIcon icon={faAngleRight}/>
          
  
              const HotPizza = [
                  {id: 1, Text: 'Cheesy'},
                  {id: 2, Text: 'Fish & Seafood'},
                  {id: 3, Text: 'Italian'},
                  {id: 4, Text: 'Vegetarians'}
              ]
  
              const MedicalSupplies = [
                  {id: 1, Text: 'Antiseptic'},
                  {id: 2, Text: 'Equipment'},
                  {id: 3, Text: 'Fask Mask'},
                  {id: 4, Text: 'Laxtex Gloves'},
                  {id: 5, Text: 'Pills and Syrups'},
                  {id: 6, Text: 'Vitamins'}
  
              ]
  
              const Tags = [
                  {id: 1, Text: 'delivery'},
                  {id: 2, Text: 'fastfood'},
                  {id: 3, Text: 'pizza'},
                  {id: 4, Text: 'food'},
                  {id: 5, Text: 'restaurants'}
              ]
  return (
    <div className={Styles.FastFoodOrde}>
    <div className={Styles.FAstOrderContainr}>
    <GomotoNav setIsMenu={setIsMenu} 
                    isMenu={isMenu} 
                    HandleMenue={HandleMenue}
                    size={size}
                    Warning={Warning}
                    />
    <div className={Styles.Text}>
            <p className={Styles.CartPPP}>Hot Pizza</p>
            <div className={Styles.HomeXcart}>
            <p className={Styles.HomeX} onClick={HandleReturntoShop}>Home</p>
            <div className={Styles.Lin}/>
            <p className={Styles.HomeX}>Products</p>
            <div className={Styles.Lin}/>
            <p>Hot Pizza</p>
            </div>
            </div>
    <div className={Styles.Container}>
        <div className={Styles.Productcategories}>
        <ProductCategories HandleProductMenue={HandleProductMenue}/>
        </div>
        <div className={Styles.ProductDisplay}>
            <div className={Styles.Showing}>
                <div className={Styles.showingresult}>showing result</div>
                <select>
                    <option>Default sorting</option>
                </select>
            </div>
            <div className={Styles.FoodContainer}>
                    {PizzaFoodList.map((content) => (
                                    <HotPizzaCard key={content.id} content={content} handleClick={handleClick} />

                    ))}
                    </div>
        </div>
</div>
<div onClick={HandleProductMenue} className={Styles.ProductMenu}>
    <i>{SliderIcon}</i>
</div>
    {ProductMenue &&(
        <ProductMenueOpen HandleProductMenue={HandleProductMenue}/>
    )}
    

</div>


</div>
  )
}

export default HotPizzaOrder