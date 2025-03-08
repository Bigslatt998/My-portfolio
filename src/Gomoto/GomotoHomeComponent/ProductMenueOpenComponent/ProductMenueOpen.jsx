import React from 'react'
import Styles from './ProductMenueOpen.module.css'
import { Link, useNavigate } from 'react-router-dom';
import ProductCategories from '../ProductCategoriesComponent/ProductCategories';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSliders, faXmark} from '@fortawesome/free-solid-svg-icons';
const ProductMenueOpen = ({HandleProductMenue}) => {
const XIcon = <FontAwesomeIcon icon={faXmark}/>

    const navigate = useNavigate()
            const HandleReturntoShop = () => {
                navigate('/GomotoHome')
            }
    
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
    <div className={Styles.ProductMenueOpen}>
        <div onClick={HandleProductMenue} className={Styles.Cancle}>{XIcon}</div>
            <ProductCategories HandleProductMenue={HandleProductMenue}/>
    </div>
  )
}

export default ProductMenueOpen