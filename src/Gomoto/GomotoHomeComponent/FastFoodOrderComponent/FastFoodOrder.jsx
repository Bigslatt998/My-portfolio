        import React from 'react'
        import Styles from './FastFoodOrder.module.css'
        import GomotoNav from '../GomotoNavComponent/GomotoNav'
        import { Link, useNavigate } from 'react-router-dom';
        import FastFoodCard from '../FastFoodCardComponent/FastFoodCard';
        import ProductMenueOpen from '../ProductMenueOpenComponent/ProductMenueOpen';
        import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
        import { faAngleRight, faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
        import ProductCategories from '../ProductCategoriesComponent/ProductCategories';
        const FastFoodOrder = ({setIsMenu, SliderIcon, Warning, ProductMenue, handleClick, HandleProductMenue, FastFoodList, isMenu, HandleMenue, size}) => {
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
                            Warning={Warning}/>
            <div className={Styles.Text}>
                    <p className={Styles.CartPPP}>Fastfood</p>
                    <div className={Styles.HomeXcart}>
                    <p className={Styles.HomeX} onClick={HandleReturntoShop}>Home</p>
                    <div className={Styles.Lin}/>
                    <p className={Styles.HomeX}>Products</p>
                    <div className={Styles.Lin}/>
                    <p>Fastfood</p>
                    </div>
                    </div>
            <div className={Styles.Container}>
                <div className={Styles.Productcategories}>
                <ProductCategories HandleProductMenue={HandleProductMenue}/>
                </div>
                <div className={Styles.ProductDisplay}>
                    <div className={Styles.Showing}>
                        <div className={Styles.showingresult}>Showing all 5 availabile fastfood</div>
                        <select>
                            <option>Default sorting</option>
                        </select>
                    </div>
                    <div className={Styles.FoodContainer}>
                    {FastFoodList.map((content) => (
                                    <FastFoodCard key={content.id} content={content} handleClick={handleClick} />

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

        export default FastFoodOrder



    {/* <div className={Styles.Productcategories}>
                    <div className={Styles.Search}>
                        <div className={Styles.Inpu}>
                        <input type='Text'/>
                        <span>5</span>
                        </div>
                        
                    </div>
                    <div className={Styles.ProductCategot}>
                        <p>Product Categories</p>

                        <ul>
                            <li><Link>Asian Food</Link></li>
                            <li><Link>Fastfood</Link></li>
                            <li><Link>Food Delivery</Link></li>
                            <li><Link>Hot Pizza</Link>
                            <ul>
                                <div className={Styles.HomeDropDown}>
                                    {HotPizza.map((Content) => (
                                        <li key={Content.id} className={`${Styles.Box}`}>
                                            {Content.Text}
                                        </li>
                                    ))}
                                </div>
                            </ul>
                            </li>
                            <li><Link>Medical Supplies</Link>
                            <ul>
                                <div className={Styles.HomeDropDown}>
                                    {MedicalSupplies.map((Content) => (
                                        <li key={Content.id} className={`${Styles.Box}`}>
                                            {Content.Text}
                                        </li>
                                    ))}
                                </div>
                            </ul>
                            </li>
                            <li><Link>Raw Meat</Link></li>
                            <li><Link>Water Delivery</Link></li>
                        </ul>
                    </div>
                    <div className={Styles.ProductTags}>
                        <p>Product Tags</p>

                        <div className={Styles.Tags}>
                        {Tags.map((Content) => (
                            <div className={Styles.TagBox}>{Content.Text}</div>
                        ))}
                        </div>
                    </div>
                </div>  */}




            //     <div className={Styles.Productcategories}>
            //     <div className={Styles.Search}>
            //         <div className={Styles.Inpu}>
            //         <input type='Text' placeholder='Search products'/>
            //         <span>{SearchIcon}</span>
            //         </div>
            //     </div>

            //     <div className={Styles.ProductCategot}>
            //         <div className={Styles.Categot}>
            //         <p>Product Categories</p>
            //         <div className={Styles.DashedLine}/>

            //             <div className={Styles.CategotList}>
            //             <li> <span>{AngleRightIcon}</span> <Link className={Styles.Link}>Asian Food</Link></li>
            //             <li> <span>{AngleRightIcon}</span><Link className={Styles.Link}>Fastfood</Link></li>
            //             <li><span>{AngleRightIcon}</span><Link className={Styles.Link}>Food Delivery</Link></li>
            //             <li><span>{AngleRightIcon}</span><Link className={Styles.Link}>Hot Pizza</Link>
            //             <ul>
            //                 <div className={Styles.DropDown}>
                                
            //                     {HotPizza.map((Content) => (
            //                         <li key={Content.id} className={`${Styles.Box}`} >
            //                             <span>{AngleRightIcon}</span>
            //                             <Link className={Styles.Link}>
            //                             {Content.Text}
            //                             </Link></li>
            //                     ))}
            //                 </div>
            //             </ul>
            //             </li>
            //             <li > <span>{AngleRightIcon}</span><Link className={Styles.Link}>Medical Supplies</Link>
            //             <ul>
            //                 <div className={Styles.DropDown}>
            //                     {MedicalSupplies.map((Content) => (
            //                         <li  key={Content.id} className={`${Styles.Box}`}>
            //                             <span>{AngleRightIcon}</span> 
            //                             <Link className={Styles.Link}>
            //                             {Content.Text}
            //                             </Link></li>
            //                     ))}
            //                 </div>
            //             </ul>
            //             </li>
            //             <li><span>{AngleRightIcon}</span><Link className={Styles.Link}>Raw Meat</Link></li>
            //             <li><span>{AngleRightIcon}</span><Link className={Styles.Link}>Water Delivery</Link></li>
            //             </div>
            //         </div>
            //     </div>
            //     <div className={Styles.ProductTags}>
            //         <div className={Styles.Tagggi}>
            //         <p>Product Tags</p>
            //         <div className={Styles.DashedLine}/>
                    
            //         <div className={Styles.Tags}>
            //         {Tags.map((Content) => (
            //             <div className={Styles.TagBox}>{Content.Text}</div>
            //         ))}
            //         </div>
            //         </div>
            //     </div>
            // </div>