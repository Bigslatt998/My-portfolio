import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './Portifolio/LayoutComponent/Layout'
import Full from './assets/Full.png'
import About from './Portifolio/AboutComponent/About'
import Resume from './Portifolio/ResumeComponent/Resume'
import RecentWork from './Portifolio/RecentWorkComponent/RecentWork'
import MyContact from './Portifolio/MyContactComponent/MyContact'
import Browse from './Netflix/BrowseMovie/Browse.jsx'
import Login from './Netflix/LoginPage/LoginPage.jsx'
import FirstPage from './Netflix/FirstPage/FirstPage.jsx'
import WhosWatching from './Netflix/WhosWatching/WhosWatching.jsx'
  
// import WhosWatching from './Netflix/WhosWarchingComponent/WhosWatching'
import GomotoHome from './Gomoto/GomotoHomeComponent/GomotoHome'
import FastFood from './Gomoto/GomotoHomeComponent/FastFoodComponent/FastFood'
import PopularFood from './Gomoto/GomotoHomeComponent/PopularFoodLayout/PopularFood'
import HotPizza from './Gomoto/GomotoHomeComponent/HotPizzaComponent/HotPizza'
import AsiaFood from './Gomoto/GomotoHomeComponent/AsiaFoodComponent/AsiaFood'
import RawMeat from './Gomoto/GomotoHomeComponent/RawMeatComponent/RawMeat'
import BlackBurger from './assets/BlackBurger.jpg'
import NightBurger from './assets/NightBurger.jpg'
import Cart from './Gomoto/CartComponent/Cart'
import AsiaFoodOrder from './Gomoto/GomotoHomeComponent/AsiaFoodOrderComponent/AsiaFoodOrder'
import FastFoodOrder from './Gomoto/GomotoHomeComponent/FastFoodOrderComponent/FastFoodOrder'
import HotPizzaOrder from './Gomoto/GomotoHomeComponent/HotPizzaOrderComponent/HotPizzaOrder'
import RawMeatOrder from './Gomoto/GomotoHomeComponent/RawMeatOrderComponent/RawMeatOrder'
import { FastFoodList, AsianFoodList, PizzaFoodList, RawFoodList } from './List'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faSliders} from '@fortawesome/free-solid-svg-icons';
import DebitCard from './Gomoto/GomotoHomeComponent/DebitCardComponent/DebitCard'
import Paypal from './Gomoto/GomotoHomeComponent/PaypalComponent/Paypal'
// import NightBurger from './assets/NightBurger.jpg'
import Aburger from './assets/Aburger.jpg'
import PaymentMethod from './Gomoto/GomotoHomeComponent/PaymentMethodComponent/PaymentMethod'

import PortifolioTWO from './PortifolioTWO/PortifolioTWO.jsx'

import WeatherApp from './WeatherApp/WeatherApp.jsx'

import SnakeGame from './SnakeGame/SnakeGame.jsx'
import TikTacToe from './TikTacToe/TikTacToe.jsx'

import NavComponent from './VisaFast/NavComponent/NavComponent.jsx'
import VisaFastHome from './VisaFast/VisaFastHome/VisaFastHome.jsx'

import Library from './Library/Library.jsx'

import NoteBook from './NoteBook/NoteBook.jsx'
import MusicPlay from './MusicPlay/MusicPlay.jsx'
import Tetris from './Tetris/Tetris.jsx'
function App() {

const SliderIcon = <FontAwesomeIcon icon={faSliders}/>

  const [isLight, setIsLight] = useState(false)
  const HandleLightMood = () =>{
    setIsLight(!isLight)
  }

  const [isDetailsOpened, setIsDetailsOpened] = useState(false)
    const handleDetailsOpen = () => {
        setIsDetailsOpened(!isDetailsOpened)
    }

    // Menue
    const [isMenu, setIsMenu] = useState(false)
        const HandleMenue = () => {
            setIsMenu(!isMenu)
            // alert('hi')
        }

    // ProductMenue
    const [ProductMenue, setProductMenue] = useState(false)
        const HandleProductMenue = () => {
          setProductMenue(!ProductMenue)
          // alert('hi')
        }

    // Cart
  const [cart, setCart] = useState([])
  const [Warning, setWarning] = useState(false)
  const handleClick = (item) => {
    let isAdded = false
    cart.forEach((prob) => {
      if(item.FoodName === prob.FoodName)
        isAdded = true
    })
    if(isAdded){
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 1000)
      return;
    }
    setCart([...cart , item])
}

const handleChange = (item, d) => {
  let ind = -1
  cart.forEach((data, index)=>{
    if(data.FoodName === item.FoodName)
      ind = index
  })
  const temp = cart
  temp[ind].Amount += d;
  if(temp[ind].Amount === 0)
    temp[ind].Amount = 1
  setCart([...temp])
}
const [price , setPrice] = useState(0)
const handleTotalPrice =()=> {
  let ans  = 0;
  cart.map((Content) => {
      ans += Content.Amount * Content.Price
  })
  setPrice(ans)
}
useEffect (() => {
  handleTotalPrice()
})

 const handleRemove = (id)=> {
        const arr = cart.filter((Content) => Content.id !== id)
        setCart(arr)
    }

    const formatPrice = (amount) => {
      return amount.toLocaleString('en-US')
  }


    const Boxes = [
      {id:1, User: 'BigSlatt' },
      {id:2, User: 'Czar'},
      {id:3, User: 'Hoola'},
      {id:4, User: 'Ok'},
      {id:5, User: 'BigSlatt'}

  ]

  // Users

      const [selectedUser, setSelectedUser] = useState({User: 'Guest'})
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element= {<Layout Full={Full} 
                  HandleLightMood={HandleLightMood}
                  isLight={isLight} setIsLight={setIsLight}
                  handleDetailsOpen={handleDetailsOpen}
                  isDetailsOpened={isDetailsOpened}
                  setIsDetailsOpened={setIsDetailsOpened}  />}>

                    <Route index element={<About HandleLightMood={HandleLightMood}
                                          isLight={isLight} setIsLight={setIsLight}/>}/>

                    <Route path='/Resume' element={<Resume HandleLightMood={HandleLightMood} 
                                                    isLight={isLight} setIsLight={setIsLight}/>}/>
                    <Route path='/RecentWork' element={<RecentWork  HandleLightMood={HandleLightMood} 
                                                    isLight={isLight} setIsLight={setIsLight}/>}/>
                    <Route path='/MyContact' element={<MyContact  HandleLightMood={HandleLightMood} 
                                                    isLight={isLight} setIsLight={setIsLight}/>}/>
                  </Route>

                  {/* NetFlix */}
                  <Route path='/NetflixHome' element={<FirstPage/>}/>
                  <Route path='/NeflixLogin' element={<Login/>}/>
                  <Route path='/WhosWatching' element={<WhosWatching Boxes={Boxes} setSelectedUser={setSelectedUser} SelectedUser={selectedUser}/>}/>
                  <Route path='/Browse' element={<Browse Boxes={Boxes} setSelectedUser={setSelectedUser} SelectedUser={selectedUser}/>}/>
                  {/* NetFlix */}

                  {/* Gomoto Delivery */}
                  <Route path='/GomotoHome' element={<GomotoHome setIsMenu={setIsMenu} 
                                                isMenu={isMenu} 
                                                HandleMenue={HandleMenue} 
                                                size={cart.length}
                                                Warning={Warning}
                                                handleClick={handleClick}/>}>
                  
                  <Route path='PopularFood' element={<PopularFood/>}/>
                  <Route index element={<FastFood FastFoodList={FastFoodList} 
                                                                handleClick={handleClick}/>}/>
                  <Route path='HotPizza' element={<HotPizza PizzaFoodList={PizzaFoodList}
                                                              handleClick={handleClick}
                                                              Warning={Warning}/>} />
                  <Route path='AsiaFood' element={<AsiaFood AsianFoodList={AsianFoodList}
                                                            handleClick={handleClick}/> } />
                  <Route path='RawMeat' element={<RawMeat RawFoodList={RawFoodList}
                                                          handleClick={handleClick}/>}/>
                  </Route>
                  <Route path='/GomotoHome/Cart' element={<Cart setIsMenu={setIsMenu} 
                                                isMenu={isMenu} 
                                                HandleMenue={HandleMenue} 
                                                FastFoodList={FastFoodList}
                                                cart={cart} setCart={setCart}
                                                handleChange={handleChange}
                                                handleTotalPrice={handleTotalPrice}
                                                Price={price}
                                                size={cart.length}
                                                handleRemove={handleRemove}
                                                />}>
                    <Route path='PaymentMethod' element={<PaymentMethod/>}/>
                    <Route index element={<DebitCard/>}/>
                    <Route path='Paypal' element={<Paypal/>}/>
                  </Route>
                  <Route path='/FastFoodOrder' element={<FastFoodOrder setIsMenu={setIsMenu} 
                                                isMenu={isMenu} 
                                                HandleMenue={HandleMenue} 
                                                FastFoodList={FastFoodList}
                                                cart={cart} setCart={setCart}
                                                handleChange={handleChange}
                                                handleTotalPrice={handleTotalPrice}
                                                Price={price}
                                                size={cart.length}
                                                HandleProductMenue={HandleProductMenue}
                                                ProductMenue={ProductMenue}
                                                handleClick={handleClick}
                                                SliderIcon={SliderIcon}
                                                Warning={Warning}/>}/>
                  <Route path='/AsiaFoodOrder' element={<AsiaFoodOrder setIsMenu={setIsMenu} 
                                                isMenu={isMenu} 
                                                HandleMenue={HandleMenue} 
                                                FastFoodList={FastFoodList}
                                                cart={cart} setCart={setCart}
                                                handleChange={handleChange}
                                                handleTotalPrice={handleTotalPrice}
                                                Price={price}
                                                size={cart.length}
                                                HandleProductMenue={HandleProductMenue}
                                                ProductMenue={ProductMenue}
                                                handleClick={handleClick}
                                                SliderIcon={SliderIcon}
                                                Warning={Warning}/>}/>
                  <Route path='/HotPizzaOrder' element={<HotPizzaOrder setIsMenu={setIsMenu} 
                                                isMenu={isMenu} 
                                                HandleMenue={HandleMenue} 
                                                FastFoodList={FastFoodList}
                                                cart={cart} setCart={setCart}
                                                handleChange={handleChange}
                                                handleTotalPrice={handleTotalPrice}
                                                Price={price}
                                                size={cart.length}
                                                HandleProductMenue={HandleProductMenue}
                                                ProductMenue={ProductMenue}
                                                handleClick={handleClick}
                                                SliderIcon={SliderIcon}
                                                Warning={Warning}/>}/>
                  <Route path='/RawMeatOrder' element={<RawMeatOrder setIsMenu={setIsMenu} 
                                                isMenu={isMenu} 
                                                HandleMenue={HandleMenue} 
                                                FastFoodList={FastFoodList}
                                                cart={cart} setCart={setCart}
                                                handleChange={handleChange}
                                                handleTotalPrice={handleTotalPrice}
                                                Price={price}
                                                size={cart.length}
                                                HandleProductMenue={HandleProductMenue}
                                                ProductMenue={ProductMenue}
                                                handleClick={handleClick}
                                                SliderIcon={SliderIcon}
                                                Warning={Warning}/>}/>
                  {/* Gomoto Delivery */}

            
                {/* Visa Fast */}
            <Route path='/VisaFastHome' element={<VisaFastHome/>}/> 
            <Route path='/NavComponent' element={<NavComponent/>}/> 
                {/* Visa Fast */}

                {/* Second Portifolio */}
            <Route path='/PortifolioTWO' element={<PortifolioTWO/>}/> 
                {/* Second Portifolio */}

                {/* Ganes X Other */}
            <Route path='/Library' element={<Library/>}/>
            <Route path='/NoteBook' element={<NoteBook/>}/>
            <Route path='/MusicPlay' element={<MusicPlay/>}/>
            <Route path='/WeatherApp' element={<WeatherApp/>}/>
            <Route path='/SnakeGame' element={<SnakeGame/>}/>
            <Route path='/Tetris' element = {<Tetris/>}/>
            <Route path='/TikTacToe' element={<TikTacToe/>}/>
                {/* Ganes X Other */}


          </Routes>
        </Router>
    </div>
  )
   
}

export default App
