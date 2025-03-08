import React from 'react'
import Styles from './OurTeam.module.css'
import { OurTeamImages } from '../../List'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
const OurTeam = () => {
  const FaceBookIcon = <FontAwesomeIcon icon={faFacebook}/>
  const InstagramIcon = <FontAwesomeIcon icon={faInstagram}/>
  const TwitterIcon = <FontAwesomeIcon icon={faXTwitter}/>
  return (
    <div className={Styles.OurTeamContainer}>
            <div className={Styles.Containerrr}>
          <div className={Styles.Text}>
            <p>Our Team</p>
            <p>Meet Our professional Team Member</p>
          </div>
          

          <div className={Styles.Team}>
          {OurTeamImages.map((Content) => (
                    <div key={Content.id} className={Styles.Box}>
                          <img src={Content.IMG}/>

                        <div className={Styles.TEXT}>
                          <p>{Content.Text}</p>
                          <p>{Content.TextII}</p>
                          <div className={Styles.Icon}>
                            <i className={Styles.Ic}>{InstagramIcon}</i>
                            <i className={Styles.Ic}>{TwitterIcon}</i>
                            <i className={Styles.Ic}>{FaceBookIcon}</i>
                          </div>
                        </div>
                    </div>
                  ))}
          </div>

                <button className={Styles.butt}>Meet Our Team Member</button>
                </div>
    </div>
  )
}

export default OurTeam