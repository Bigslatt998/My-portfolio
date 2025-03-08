
   import React from 'react'
   import Styles from './FirstPage.module.css'
   import NetflixLogo from '../../assets/Netflix.png'
   import N from '../../assets/N.png'
   import Img1 from '../../assets/Img1.jpeg'
   import Img2 from '../../assets/Img2.jpeg'
   import Img3 from '../../assets/Img3.jpeg'
   import Img4 from '../../assets/Img4.jpeg'
   import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
   import { faHome, faPlay, faPause, faPlus, faXmark, faAngleRight, faAngleLeft  } from "@fortawesome/free-solid-svg-icons";
   
   const PlayIcon = <FontAwesomeIcon icon={faPlay}/>
   const PauseIcon = <FontAwesomeIcon icon={faPause} />
   const PlusIcon =  <FontAwesomeIcon icon={faPlus} />
   const XmarkIcon = <FontAwesomeIcon icon={faXmark} />
   const AngleRightIcon = <FontAwesomeIcon icon={faAngleRight} />
   const AngleLeftIcon = <FontAwesomeIcon icon={faAngleLeft}/>

   // Icons
   // <FontAwesomeIcon icon={faPlay} />
   // <FontAwesomeIcon icon={faPause} />
   // <FontAwesomeIcon icon={faPlus} />
   // <FontAwesomeIcon icon="fa-solid fa-plus" />
   // <FontAwesomeIcon icon={faXmark} 
   // <FontAwesomeIcon icon={faAngleRight} 
   // <FontAwesomeIcon icon="fa-solid fa-angle-left" />/>/>

   import TrendingImg0 from '../../assets/image0.jpeg'
   import TrendingImg1 from '../../assets/image1.jpeg'
   import TrendingImg2 from '../../assets/image2.jpeg'
   import TrendingImg3 from '../../assets/image3.jpeg'
   import TrendingImg4 from '../../assets/image4.jpeg'
   import TrendingImg5 from '../../assets/image5.jpeg'
   import TrendingImg6 from '../../assets/image6.jpeg'
   import TrendingImg7 from '../../assets/image7.jpeg'

   import NetflixImg1 from '../../assets/Money.jpeg'
   import NetflixImg2 from '../../assets/Cocomeloon.jpeg'
   import NetflixImg3 from '../../assets/Avater.jpeg'

   // import TrendingImg8 from '../assets/image8.jpeg'
   // import TrendingImg9 from '../assets/image9.jpeg'



   import { useState, useEffect } from 'react'
   import { Navigate, useNavigate } from 'react-router-dom'
   import NetflixBackground from '../../assets/NetflexBackground.jpeg'


   function FirstPage(){
      
      const Img = [
         { id: 1, img: Img1, header: (<>Unlimited movies, <br/>  TV Shows, and more</>), price: 'Start at ₦2,200. Cancle at any time'},
         // {img: Img2, header: (<>Unlimited films, TV  <br/> programmes and more</>), price: 'Start at US$50.99. Cancle at any time'},
         // {img: Img3, header: (<>Unlimited films, TV  <br/> programmes and more</>), price: 'Start at US$50.99. Cancle at any time'}
      ]
      const YouLove = {header: 'The Netflix you love for just US$6.99.', Text: 'Enjoy savings and Netflix with a few advert breaks.', Learn: (<><button>Learn more</button></>)}
         const TrendingMovies = [
            {id: 1, Image: TrendingImg0},
            {id: 2, Image: TrendingImg1},
            {id: 3, Image: TrendingImg2},
            {id: 4, Image: TrendingImg3},
            {id: 5, Image: TrendingImg4},
            {id: 6, Image: TrendingImg5},
            {id: 7, Image: TrendingImg6},
            {id: 8, Image: TrendingImg7},
            {id: 9, Image: TrendingImg1},
            {id: 10, Image: TrendingImg2},
            {id: 11, Image: TrendingImg3},
            {id: 12, Image: TrendingImg4},
            // {id: 5, Image: TrendingImg8}
         ]

         const NetflixMovies = [
            {id: 1, Image: NetflixImg1},
            {id: 2, Image: NetflixImg2},
            {id: 3, Image: NetflixImg3},
            {id: 4, Image: NetflixImg1},
            {id: 5, Image: NetflixImg2},
            {id: 6, Image: NetflixImg3},
            {id: 7, Image: NetflixImg2},
            {id: 8, Image: NetflixImg3},

         ]

         const ReasonsContent = [
            {id: 1, First: 'Enjoy on your TV',Second: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.', Icon: PlayIcon},
            {id: 2, First: 'Download your shows to watch offline',Second: 'Save your favorites easily and always have something to watch.', Icon: PlayIcon},
            {id: 3, First: 'Watch everywhere',Second: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.', Icon: PlayIcon},
            {id: 4, First: 'Create profiles for kids',Second: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.', Icon: PlayIcon},

         ]

         const FQAContent = [
            {id: 1, Question: 'What is Netflix?', 
               Answer: (<>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. 
            <br/>
            <br/> 
            You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price.
            There's always something new to discover and new TV shows and movies are added every week!</>) },
            {id: 2, Question: 'How much does Netflix cost?', 
               Answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from N2,200 to N7,000 a month. No extra costs, no contracts.`},
            {id: 3, Question: 'Where can I watch?', 
               Answer: (<>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br/> You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</>)},
            {id: 4, Question: 'How do I cancle?', 
               Answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.`},
            {id: 5, Question: 'What can I watch on Netflix?', 
               Answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.
            Watch as much as you want, anytime you want.`},
            {id: 6, Question: 'Is Netflix good for kids?', 
               Answer: (<>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
            <br/> 
            <br/>
            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.</>)}
         ]
      const [currentIndex , setCurrentIndex] = useState(0)
      useEffect(() =>{
         const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Img.length)
         }, 5000);
         return () => clearInterval(interval);
      }, [Img.length])
      const Prev ='<'
      const Next = '>'

      const [OpenAnswer, setOpenAnswer] = useState(null)
      const toggleAnswer = (id) => {
         setOpenAnswer(OpenAnswer === id ? null : id)
      }

      const membership = 'Ready to watch? Enter your email to create or restart your membership.'

      const FooterContent = [
         {id: 1, List: 'Question? Contact us.'},
         {id: 2, List: 'FAQ'},
         {id: 3, List: 'Help Center'},
         {id: 4, List: 'Account'},
         {id: 5, List: 'Media Center'},
         {id: 6, List: 'Investor Relations'},
         {id: 7, List: 'Jobs'},
         {id: 8, List: 'Ways to Watch'},
         {id: 9, List: 'Terms of Use'},
         {id: 10, List: 'Privacy'},
         {id: 11, List: 'Cookie Preferences'},
         {id: 12, List: 'Corporate Information'},
         {id: 13, List: 'Contact Us'},
         {id: 14, List: 'Speed Test'},
         {id: 15, List: 'Legal Ntices'},
         {id: 16, List: 'Only on Neftflix'}

      ]

      const FooterSlice = FooterContent.slice(1)

      const Country = [
         {id: 1, List: 'Nigeria'},
         // {id: 2, List: 'Global'}
      ]

      const [currentSlide, setCurrentSlide] = useState(0)

      const HandleNext = () => {
         if(currentSlide < TrendingMovies.length - 3){
            setCurrentSlide(currentSlide + 1)
         }
      }

      const HandlePrev =() => {
         if(currentSlide > 0){
            setCurrentSlide(currentSlide - 1)
         }
      }
      const navigate = useNavigate()
      const LoginPage = () => {
         navigate("/NeflixLogin")
      }
      return(
         <div className={Styles.FirstpageContainer}>
            <main>
               <div className={Styles.MainContainer}>
                  <nav>
                     <img src={NetflixLogo}/>
                     <button onClick={LoginPage}>Sign In</button>
                  </nav>
                  {Img.map((Content) => (
                     <div key={Content.id} className={Styles.MainContent}>
                     <div className={Styles.Content}>
                        <div className={Styles.Text}>
                           <h1>{Content.header}</h1>
                           <p>{Content.price}</p>
                        </div>
                        <div className={Styles.GetStarted}>
                           <p>Ready to watch? Enter your email to create or restart your membership.</p>
                           <input type='text' placeholder='Enter Address'/>
                           <button>Get Started<span>{AngleRightIcon}</span></button>
                        </div>
                       </div>
                     </div>
                  ))}
               </div>
            </main>
            <section>
               <div className={Styles.sectionContainer}>
                  <p>Trending Now</p>
                  <div className={Styles.Options}>
                  <select>
                     <option>Nigeria</option>
                     <option>Global</option>
                  </select>
                  <select>
                     <option>Movies</option>
                     <option>TV Shows</option>
                  </select>
                  </div>
                  <div className={Styles.MovieContainer}>
                  <button onClick={HandlePrev}>{AngleLeftIcon}</button>
                  <div className={Styles.MoovieSlider} style={{transform: `translateX(-${currentSlide * 180}px)`,
                                                               transition: `0.5s ease-in-out`}}>
                  {TrendingMovies.map((Content) => (
                        <div key={Content.id} className={Styles.MovieSection}>
                           <img src={Content.Image}/>
                           <p>{Content.id}</p>
                           <div className={Styles.added}>
                              Recently Added
                           </div>
                           
                        </div>   
                     ))}
                  </div>
                  <button onClick={HandleNext}>{AngleRightIcon}</button>

                  </div>
               
               <div className={Styles.ReasonsContainer}>
               <p> More Reasons to Join</p>
               <div className={Styles.Reason}>
                  <div className={Styles.ReasonsContent}>
                     {ReasonsContent.map((Content) => (
                        <div key={Content.id} className={Styles.ReasonsSection}>
                              <h1>{Content.First}</h1>
                              <p>{Content.Second}</p>
                        </div>
                     ))}
                  </div>
               </div>

               </div>
               </div>
               <div className={Styles.FAQContainer}>
                  {/* <div className={Styles.FAQ}> */}
                  <p>Frequently Asked Questions</p>

                     {FQAContent.map((Content) => (
                        <div key={Content.id} className={Styles.FAQContent}>
                           {/* Question Box */}
                           <div className={Styles.QuestionBox} onClick={() => toggleAnswer (Content.id)}>
                           <p>{Content.Question}</p>
                           <span>{OpenAnswer === Content.id ? XmarkIcon : PlusIcon}</span>
                           </div>
                           {/* Answer Box */}
                           {OpenAnswer === Content.id && (
                              <div className={Styles.AnswerBox}>
                                 <p>{Content.Answer}</p>
                              </div>
                           )}
                        </div>
                     ))}
                  {/* </div> */}
               </div>
            </section>
            <div className={Styles.MemberShip}>
               <p>{membership}</p>
                  <div className={Styles.InputBTN}>
                     <input type='text' placeholder='Email Address'/>
                     <button>Get Started <span>{AngleRightIcon}</span></button>
                  </div>
            </div>
            <footer>
               <a href='#'>{FooterContent[0].List}</a>
               <div className={Styles.FooterContainer}>
                  {FooterSlice.map((Content) => (
                     <div key={Content.id} className={Styles.Footer}>
                        <ul>
                           <li><a href='#'>{Content.List}</a></li>
                        </ul>
                     </div>
                  ))}
                  </div>
            </footer>
         </div>
      )
   }
   export default FirstPage