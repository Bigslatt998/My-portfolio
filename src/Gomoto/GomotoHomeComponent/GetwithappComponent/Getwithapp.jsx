import React, { useEffect, useState } from 'react'
import Styles from './Getwithapp.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import HandXphone from '../../../assets/HandXphone.png'
import { faApple, faApplePay, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const Getwithapp = () => {
  const ApplepayIcon = <FontAwesomeIcon icon={faApple}/>
  const GooglePlayIcon = <FontAwesomeIcon icon={faGooglePlay}/>
  const EnvelopeIcon = <FontAwesomeIcon icon={faEnvelope}/>


  
 return(
  <div className={Styles.GetMoreCOntainer}>
          <div className={Styles.GetMoreWithApp}>
              <div className={Styles.Textt}>
              <h1>Get More With <span> Our Application </span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi ad molestiae repellendus consectetur nam cum temporibus quis magni, commodi, nemo modi. Nemo ipsum, officia eum eligendi ipsa voluptatem enim?</p>
              <div className={Styles.IMporance}>
                <div className={Styles.Importance}>

                  <div className={Styles.Follow}>
                    <div className={Styles.Numb}></div>
                    <div className={Styles.IMporance}>Follow Delivery Status</div>
                  </div>
                  <div className={Styles.Order}>
                    <div className={Styles.Numb}></div>
                    <div className={Styles.IMporance}>Order From Any Location</div>
                  </div>
                  <div className={Styles.Notice}>
                    <div className={Styles.Numb}></div>
                    <div className={Styles.IMporance}>Get Important Notices</div>
                  </div>

                </div>
                <div className={Styles.Apps}>
                  <div className={Styles.Apple}>
                    <i>{ApplepayIcon}</i>
                    <div className={Styles.Download}>
                      <p> 
                          <span>Download on the </span>
                          <span>App Store</span>
                      </p>
                    </div>
                  </div>
                  <div className={Styles.GooglePlay}>
                  <i>{GooglePlayIcon}</i>
                    <div className={Styles.Download}>
                      <p> 
                          <span>ANDRIOD APP ON</span>
                          <br/>
                          <span>Google Play</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div className={Styles.Img}>
                <img src={HandXphone}/>
              </div>
          </div>


          <div className={Styles.Subscribe}>
            <div className={Styles.Newslater}>
              <i>{EnvelopeIcon}</i>
              <div className={Styles.Offers}>
                <p>Get the latest news and offers</p>
                <h1>Subscribe to our newsletter</h1>
              </div>
            </div>
              <div className={Styles.Input}>
                <div className={Styles.InputBox}>
                <input type='text' placeholder='Your email ...'/>
                <button className={Styles.Searrr}>Subscribe</button>
                </div>
              </div>
          </div>


         
          </div>
 )
}

export default Getwithapp