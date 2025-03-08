import React from 'react'
import Styles from './User.module.css'
import Eye from '../../../assets/Eye.png'
import Smile from '../../../assets/Smile.png'
import { Navigate, useNavigate } from 'react-router-dom'

const User = ({Boxes, setSelectedUser}) => {
          const navigate = useNavigate()
  
  const Browse = (content) => {
    setSelectedUser(content)
    navigate("/Browse")
 }
  return (
    <div className={Styles.Containter}>
                {Boxes.map((content) => (
                    <div key={content.id} className={Styles.users}>
                        <div className={Styles.Box} onClick={() => Browse(content)}>
                            <div className={Styles.Eye}>
                                <img src={Eye}/>
                                <img src={Eye}/>
                            </div>
                            <div className={Styles.Mouth}>
                                <img src={Smile}/>
                            </div>
                        </div>
                        <span>{content.User}</span>
                    </div>
                ))}
        </div>
  )
}

export default User