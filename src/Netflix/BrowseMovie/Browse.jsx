import Styles from './Browse.module.css'
import NetflixLogo from '../../assets/Netflix.png'
import { useEffect, useState, useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlay,  faReply, faPause, faPlus, faXmark, faAngleRight, faAngleLeft, faMagnifyingGlass, faBell, faAngleDown, faCircleInfo, faAngleUp  } from "@fortawesome/free-solid-svg-icons";
import SevenDoor from '../../assets/SevenDoors.mp4'
import React, {useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


import TvDramaImg0 from '../../assets/image0.jpeg'
import TvDramaImg1 from '../../assets/Lincon.jpeg'
import TvDramaImg2 from '../../assets/Lupin.jpeg'
import TvDramaImg3 from '../../assets/image1.jpeg'
import TvDramaImg4 from '../../assets/image5.jpeg'
import TvDramaImg5 from '../../assets/image6.jpeg'
import TvDramaImg6 from '../../assets/image3.jpeg'
import TvDramaImg7 from '../../assets/image7.jpeg'
import TvDramaImg8 from '../../assets/Hunting.jpeg'
import TvDramaImg9 from '../../assets/Lift.jpeg'
import TvDramaImg10 from '../../assets/MovingHouse.jpeg'

// Continue Watching
import ContinueWatching0 from '../../assets/Money.jpeg'
import ContinueWatching1 from '../../assets/Mona.jpeg'
import ContinueWatching2 from '../../assets/Lift.jpeg'
import ContinueWatching3 from '../../assets/Muda.jpeg'
import ContinueWatching4 from '../../assets/PabloEscoba.jpeg'
import ContinueWatching5 from '../../assets/Nutcracher.jpeg'
import ContinueWatching6 from '../../assets/PeterPan.jpeg'
import ContinueWatching7 from '../../assets/Mieu.jpeg'
import ContinueWatching8 from '../../assets/Hunting.jpeg'
import ContinueWatching9 from '../../assets/Lift.jpeg'
import ContinueWatching10 from '../../assets/MovingHouse.jpeg'

// New on Netflix
import NewonNetflix0 from '../../assets/You.jpeg'
import NewonNetflix1 from '../../assets/Wish.jpeg'
import NewonNetflix2 from '../../assets/Traveler.jpeg'
import NewonNetflix3 from '../../assets/Terku.jpeg'
import NewonNetflix4 from '../../assets/Srairs.jpeg'
import NewonNetflix5 from '../../assets/Suside.jpeg'
import NewonNetflix6 from '../../assets/SpiritalHunt.jpeg'
import NewonNetflix7 from '../../assets/Sit.jpeg'
import NewonNetflix8 from '../../assets/Rental.jpeg'
import NewonNetflix9 from '../../assets/Lift.jpeg'
import NewonNetflix10 from '../../assets/MovingHouse.jpeg'


import N from '../../assets/N.png'




function Browse({Boxes, SelectedUser}){
    
   const Search = <FontAwesomeIcon icon={faMagnifyingGlass}/>
   const Bell = <FontAwesomeIcon icon={faBell}/>
   const AngleDown = <FontAwesomeIcon icon={faAngleDown}/>
   const AngleUp = <FontAwesomeIcon icon={faAngleUp}/>
   const Play = <FontAwesomeIcon icon={faPlay}/>
   const Pause = <FontAwesomeIcon icon={faPause}/>
   const Reply = <FontAwesomeIcon icon={faReply}/>
   const Info = <FontAwesomeIcon icon={faCircleInfo}/>
   const AngleRightIcon = <FontAwesomeIcon icon={faAngleRight} />
      const AngleLeftIcon = <FontAwesomeIcon icon={faAngleLeft}/>

    const Movies = [{
        Tittle: `Today's Top Picks for You`,
        Images: [
            TvDramaImg0,
            TvDramaImg1,
            TvDramaImg2,
            TvDramaImg3,
            TvDramaImg4,
            TvDramaImg5,
            TvDramaImg6,
            TvDramaImg7,
            TvDramaImg8,
            TvDramaImg9,
            TvDramaImg10,
        ]
    }, 
    {
        Tittle: 'Recently Added',
        Images: [
            ContinueWatching0,
            ContinueWatching1,
            ContinueWatching2,
            ContinueWatching3,
            ContinueWatching4,
            ContinueWatching5,
            ContinueWatching6,
            ContinueWatching7,
            ContinueWatching8,
            ContinueWatching9,
            ContinueWatching10,

        ]
    },
    {
        Tittle: 'Continue Watching for BigSlat',
        Images: [
            NewonNetflix0,
            NewonNetflix1,
            NewonNetflix2,
            NewonNetflix3,
            NewonNetflix4,
            NewonNetflix5,
            NewonNetflix6,
            NewonNetflix7,
            NewonNetflix8,
            NewonNetflix9,
            NewonNetflix10,


        ]
    }
]
    const TvDrama = [
        {id: 1, Movie: TvDramaImg0 },
        {id: 2, Movie: TvDramaImg1 },
        {id: 3, Movie: TvDramaImg2 },
        {id: 4, Movie: TvDramaImg3 },
        {id: 5, Movie: TvDramaImg4 },
        {id: 6, Movie: TvDramaImg5 },
        {id: 7, Movie: TvDramaImg6 },
        {id: 8, Movie: TvDramaImg7 },
        {id: 9, Movie: TvDramaImg8 },
        {id: 10, Movie: TvDramaImg9 },
        {id: 11, Movie: TvDramaImg10 }
    ]

    const ContinueWatching = [
        {id: 1, Movie: ContinueWatching0 },
        {id: 2, Movie: ContinueWatching1 },
        {id: 3, Movie: ContinueWatching2 },
        {id: 4, Movie: ContinueWatching3 },
        {id: 5, Movie: ContinueWatching4 },
        {id: 6, Movie: ContinueWatching5 },
        {id: 7, Movie: ContinueWatching6 },
        {id: 8, Movie: ContinueWatching7 },
        {id: 9, Movie: ContinueWatching8 },
        {id: 10, Movie: ContinueWatching9 },
        {id: 11, Movie: ContinueWatching10 }
    ]

    const NewonNetflix = [
        {id: 1, Movie: NewonNetflix0 },
        {id: 2, Movie: NewonNetflix1 },
        {id: 3, Movie: NewonNetflix2 },
        {id: 4, Movie: NewonNetflix3 },
        {id: 5, Movie: NewonNetflix4 },
        {id: 6, Movie: NewonNetflix5 },
        {id: 7, Movie: NewonNetflix6 },
        {id: 8, Movie: NewonNetflix7 },
        {id: 9, Movie: NewonNetflix8 },
        {id: 10, Movie: NewonNetflix9 },
        {id: 11, Movie: NewonNetflix10 }
    ]





    const header = [
        {id: 1, Text: 'Home'},
        {id: 2, Text: 'TV Shows'},
        {id: 3, Text: 'Movies'},
        {id: 4, Text: 'New & Popular'},
        {id: 5, Text: 'My List'},
        {id: 6, Text: 'Browse by Languages'},
        // {id: 7, Text: },
    ]

    const Icon = [
        {id: 1, Text: Search},
        {id: 2, Text: 'Kids'},
        {id: 3, Text: Bell},
        {id: 4, Text: 'jjjjj'},
        {id: 5, Text: AngleDown }
        
    ]

    const IconText = [
        {id: 1, Text: 'Kids'},
        {id: 2, Text: 'BigSlat'},
        {id: 3, Text: 'BigSlat'},
        {id: 4, Text: 'BigSlat'},
        {id: 5, Text: 'Manage Profiles'},
        {id: 6, Text: 'Transfer Profile'},
        {id: 7, Text: 'Account'},
        {id: 7, Text: 'Help Center'},
    ]
    const headerSlice = header.slice(1, header.length - 1)
    const browse = header[header.length - 1]

    const [isSticky, setisSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setisSticky(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentSlideII, setCurrentSlideII] = useState(0)
    // const [currentSlideIII, setCurrentSlideIII] = useState(0)

    
        const TvHandleNext = () => {
            if(currentSlide < TvDrama.length - 3){
                setCurrentSlide(currentSlide + 1)
        }
    }
    
        const TvHandlePrev =() => {
            if(currentSlide > 0){
                setCurrentSlide(currentSlide - 1)
            }
        }

        const CWHandleNext = () => {
            if(currentSlideII < ContinueWatching.length - 3){
                setCurrentSlideII(currentSlideII + 1)
        }
    }
    
        const CWHandlePrev =() => {
            if(currentSlideII > 0){
                setCurrentSlideII(currentSlideII - 1)
            }
        }

            //NAv Bar

        const [OpenBrowse, setOpenBrowse] = useState(false)
        const [OpenUser, setOpenUser] = useState(null)


        const HandleBrowseBTN = () =>{
            setOpenBrowse(!OpenBrowse)

        }
        
        const HandleUserBTN = () =>{
            setOpenUser(!OpenUser)
        }
        const navigate = useNavigate()
        const HandleSignOut = () => {
            navigate("/NetflixHome")
        }

        // const [isPlaying, setIsPlaying] = useState(false)
        // const videoRef = useRef(null)

        // const HandlePlaying = () => {
        //     if(videoRef.current.paused) {
        //         videoRef.current.play()
        //         setIsPlaying(true)
        //     }
        //     else{
        //         videoRef.current.pause()
        //         setIsPlaying(false)
        //     }
        // }

        const SliderRef = useRef([])

        const scrollLeft = (index) => {
            if(SliderRef.current[index]){
                SliderRef.current[index].scrollBy(
                    { left: -300, behavior: 'smooth'}
                )
            }
        }
        const scrollRight = (index) => {
            if(SliderRef.current[index]){
                SliderRef.current[index].scrollBy(
                    { left: 300, behavior: 'smooth'}
                )
            }
        }
        
    return(
        <div className={Styles.BrowseContainer}>
            
        <div className={Styles.Container}>
            <div className={Styles.Video}>
            <video autoPlay  >
                <source src={SevenDoor}/>
            </video>
            </div>
        <div className={Styles.HeaderContainer}>
            <header  className={isSticky ? Styles.sticky : ''}>               
                <div className={Styles.Box1}>
                    <div className={Styles.IMG}>
                        <img src={NetflixLogo}/>
                    </div>
                    <nav>
                        <ul >
                            {header.map((Content) => (
                                <li key={Content.id} className={Styles.Nav}>
                                    {Content.Text}
                                </li>
                            ))}

                            <div className={Styles.Browse}>Browse {AngleDown}
                            <div className={Styles.BrowseDropDown}>
                            <span>{AngleUp}</span>
                            {header.map((Content) => (
                                <li key={Content.id}>
                                    <a href='#'>{Content.Text}</a>
                                </li>
                            ))}
                            </div>
                            </div>
                        </ul>
                    </nav>
                </div>
                
                <div className={Styles.Box2}>
                <nav>
                        <ul>
                            <li>{Search}</li>
                            <li>Kids</li>
                            <li>{Bell}</li>
                            <li>{SelectedUser ? SelectedUser.User : 'Guest'} <span>{AngleDown}</span>
                                <div className={Styles.DropDown}>
                                    <span>{AngleUp}</span>
                                    <div><a href='#'>Kid</a></div>
                                    <div><a href='#'>Kid</a></div>
                                    <div><a href='#'>Kid</a></div>
                                    <div><a href='#'>Kid</a></div>

                                    <div><a href='#'>Manage Profile</a></div>
                                    <div><a href='#'>Transfer Profile</a></div>
                                    <div><a href='#'>Account</a></div>
                                    <div><a href='#'>Help Center</a></div>
                                    <hr/>
                                    <button onClick={HandleSignOut}>Sign out of Netflix</button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            </div>
            <div className={Styles.MovieInfo}>
                <h1>SEVEN <br/><span>DOORS</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quasi esse ipsum ratione ab molestias veniam ut ipsam dolorum iste debitis commodi repellat similique, non pariatur at labore cumque asperiores?</p>
                <div className={Styles.buttons}>
                    <button ><span>{Play} </span>Play</button>
                    <button><span>{Info}</span>More Info</button>
                </div>
            </div>
            <div className={Styles.Plus}>
                <span>{Reply}</span>
                <p>18+</p>
            </div>
        </div>
        <div className={Styles.MovieContainer}>
            <section>
                {Movies.map((slider, index) => (
                    <div key={index} className={Styles.SliderSection}>
                        <h2>{slider.Tittle}</h2>
                        <button className={Styles.Left} onClick={() => scrollLeft(index)}> {AngleLeftIcon}</button>

                        <div className={Styles.Slider} ref={(el) => (SliderRef.current[index] = el)}>
                            {slider.Images.map((image, idx) => (
                                <div key={idx} className={Styles.Slide}>
                                    <img src={image}/>
                                </div>  
                            ))}
                        </div>
                        <button className={Styles.Right} onClick={() => scrollRight(index)}> {AngleRightIcon}</button>
                    </div>
                ))}
            </section>
        </div>
        
       </div>
    )
}
export default Browse


{/* <div className={Styles.HeaderContainer}>
            <header  className={isSticky ? Styles.sticky : ''}>               
                <div className={Styles.Box1}>
                    <div className={Styles.IMG}>
                        <img src={NetflixLogo}/>
                    </div>
                    <nav>
                        <ul>
                            {header.map((Content) => (
                                <li>{Content.Text}</li>
                            ))}
                            <span>Browse {AngleDown}</span>
                        </ul>
                    </nav>
                </div>
                
                <div className={Styles.Box2}>
                <nav>
                        <ul>
                            <li>{Search}</li>
                            <li>Kids</li>
                            <li>{Bell}</li>
                            <li>{SelectedUser ? SelectedUser.User : 'Guest'} <span>{AngleDown}</span>
                                <div className={Styles.DropDown}>
                                    <span>{AngleUp}</span>
                                    <li><a href='#'>Kid</a></li>
                                    <li><a href='#'>Kid</a></li>
                                    <li><a href='#'>Kid</a></li>
                                    <li><a href='#'>Kid</a></li>

                                    <li><a href='#'>Manage Profile</a></li>
                                    <li><a href='#'>Transfer Profile</a></li>
                                    <li><a href='#'>Account</a></li>
                                    <li><a href='#'>Help Center</a></li>
                                    <hr/>
                                    <button>Sign out of Netflix</button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            </div>
 */}
