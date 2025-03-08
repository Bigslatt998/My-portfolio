
import React, { useContext, useState } from 'react'
import User from './User/User'
import Styles from './WhosWatching.module.css'
import Eye from '../../assets/Eye.png'
import Smile from '../../assets/Smile.png'
import { Navigate, useNavigate } from 'react-router-dom'

function WhosWatching({Boxes, setSelectedUser}){
        const navigate = useNavigate()
    
    return(
        <div className={Styles.WhosWatching}>
            <p>Who's watching?</p>
            <User Boxes={Boxes} 
                setSelectedUser={setSelectedUser}/>
        <button>Manage Profiles</button>
        </div>

    )
}
export default WhosWatching