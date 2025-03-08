    import React from 'react'
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
    import Styles from './ProductCategories.module.css'
    import { Link, useNavigate } from 'react-router-dom';


    const ProductCategories = ({HandleProductMenue}) => {
        const SearchIcon = <FontAwesomeIcon icon={faSearch}/>
        const AngleRightIcon = <FontAwesomeIcon icon={faAngleRight}/>
        const navigate = useNavigate()

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
        const HandleFastFood = () => {
            navigate('/FastFoodOrder')
            HandleProductMenue()
        }
        const HandleAsiaFood = () => {
            navigate('/AsiaFoodOrder')
            HandleProductMenue()
        }

        const HandlePizzaFood = () => {
            navigate('/HotPizzaOrder')
            HandleProductMenue()
        }

        const HandleRawMeatFood = () => {
            navigate('/RawMeatOrder')
            HandleProductMenue()
        }

    return (
    <div className={Styles.COntainer}>
                    <div className={Styles.Search}>
                        <div className={Styles.Inpu}>
                        <input type='Text' placeholder='Search products'/>
                        <span>{SearchIcon}</span>
                        </div>
                    </div>

                    <div className={Styles.ProductCategot}>
                        <div className={Styles.Categot}>
                        <p>Product Categories</p>
                        <div className={Styles.DashedLine}/>

                            <div className={Styles.CategotList}>
                            <li onClick={HandleAsiaFood}> <span>{AngleRightIcon}</span> <Link  className={Styles.Link} >Asian Food</Link></li>
                            <li onClick={HandleFastFood}> <span>{AngleRightIcon}</span><Link  className={Styles.Link}>Fastfood</Link></li>
                            <li onClick={HandleRawMeatFood}><span>{AngleRightIcon}</span><Link className={Styles.Link}>Raw Meat</Link></li>
                            <li onClick={HandlePizzaFood}><span>{AngleRightIcon}</span><Link  className={Styles.Link}>Hot Pizza</Link>
                            <ul>
                                <div className={Styles.DropDown}>
                                    
                                    {HotPizza.map((Content) => (
                                        <li key={Content.id} className={`${Styles.Box}`} >
                                            <span>{AngleRightIcon}</span>
                                            <Link className={Styles.Link}>
                                            {Content.Text}
                                            </Link></li>
                                    ))}
                                </div>
                            </ul>
                            </li>
                            <li > <span>{AngleRightIcon}</span><Link className={Styles.Link}>Medical Supplies</Link>
                            <ul>
                                <div className={Styles.DropDown}>
                                    {MedicalSupplies.map((Content) => (
                                        <li  key={Content.id} className={`${Styles.Box}`}>
                                            <span>{AngleRightIcon}</span> 
                                            <Link className={Styles.Link}>
                                            {Content.Text}
                                            </Link></li>
                                    ))}
                                </div>
                            </ul>
                            </li>
                            <li><span>{AngleRightIcon}</span><Link className={Styles.Link}>Raw Meat</Link></li>
                            <li><span>{AngleRightIcon}</span><Link className={Styles.Link}>Water Delivery</Link></li>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.ProductTags}>
                        <div className={Styles.Tagggi}>
                        <p>Product Tags</p>
                        <div className={Styles.DashedLine}/>
                        
                        <div className={Styles.Tags}>
                        {Tags.map((Content) => (
                            <div key={Content.id} className={Styles.TagBox}>{Content.Text}</div>
                        ))}
                        </div>
                        </div>
                    </div>
                </div>
    
    )
    }

    export default ProductCategories