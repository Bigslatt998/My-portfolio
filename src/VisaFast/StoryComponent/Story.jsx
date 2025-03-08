import React from 'react'
import Styles from './Story.module.css'
import Discussion from '../../assets/Discussion.png'
import Passport from '../../assets/Passport.png'

const Story = () => {
  return (
    <div className={Styles.StoryContainer}>
      <div className={Styles.Containeeer}>
      <div className={Styles.TText}>
      <p>Story</p>
      <p>The story behind our visafast consulting firm</p>
      </div>
      <div className={Styles.Contain}>

        <div className={Styles.Discussion}>
            <div className={Styles.Img}>
              <img src={Discussion}/>
            </div>
            <div className={Styles.Text}>
              <p>1978</p>
              <p>Visa consulting team worked closely.</p>
              <p>
              They provided a tailored roadmap that included market research, product positioning, and regulatory compliance. Alex's team of experts analyzed data, identifying user behavior patterns and market trends, which they used to refine the app's features and user experience.</p>
            </div>
        </div>
        <div className={Styles.Line}/>

        <div className={Styles.Passport}>
          
        <div className={Styles.Text}> 
          <p>1975</p>
          <p>The team at visafast was passionate</p>
          <p>but inexperienced in the intricacies of the payment industry. They knew they needed expert guidance to bring their vision to life. One day, while attending a fintech conference, they stumbled upon a booth that read "Visa Consulting: Your Path to Payment Success."</p>
        </div>
        <div className={Styles.Img}>
        <img src={Passport}/>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Story