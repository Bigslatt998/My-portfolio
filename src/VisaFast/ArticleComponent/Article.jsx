import React from 'react'
import Styles from './Article.module.css'
import { GuidanceImages } from '../../List'

const Article = () => {
  return (
    <div className={Styles.Article}>
    <div className={Styles.ArticleContainer}>
      <div className="together">
        <div className={Styles.Text}>
        <p>Blog & Article</p>
        <h2>Navigating the Visa Maze: A Comprehensive Guide to Visa Consulting</h2>
        </div>

        <div className={Styles.Image}>
          {GuidanceImages.map((Content) => (
            <div key={Content.id} className={Styles.Box}>
              <div className={Styles.IIMG}>
              <img src={Content.IMG}/>
              </div>
              <div className={Styles.IMGText}>
                <p>{Content.Head}</p>
                <p>{Content.Text}</p>
              <button className={Styles.buttt}>Read More</button>

              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
    <div className={Styles.Application}>
        <div className={Styles.Text}>
              <div className={Styles.Box11}>
                <h4>We're Committed to Making your Visa Application Process</h4>
                {/* <p>Visa Consulting doesn't just handle the paperwork; they genuinely care about their clients' success. My consultant not only helped with the application visa consulting.</p> */}
              </div>  
              
              <div className={Styles.Box22}>

                <div className={Styles.Input}>
                <input type='text' placeholder='Enter Your Email'/>
                <button className={Styles.butt}>Subscrib Now</button>
                </div>
                </div>  
        </div>
      </div>
    </div>
  )
}

export default Article