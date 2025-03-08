import React, { useState, useEffect } from 'react'
import Styles from './LoginPage.module.css'
import Logo from '../../assets/Netflix.png'
import NetflixLogo from '../../assets/Netflix.png'
import TrendingImg0 from '../../assets/image0.jpeg'
import Aile from '../../assets/Aile.jpeg'
import { Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlay, faPause, faEye, faPlus, faXmark, faAngleRight, faAngleLeft, faEyeSlash  } from "@fortawesome/free-solid-svg-icons";





function LoginPage(){
    const Eye =<FontAwesomeIcon icon={faEye}/>
    const EyeSlash =<FontAwesomeIcon icon={faEyeSlash}/>

   


          const [username, setUsername] = useState('')
          const [Password, setPassword] = useState('')
          const [ShowPassword, setShowPassword] = useState(false)
          const [error, setError] = useState('')
          const [errorII, setErrorII] = useState('')
          const [Successful, setSuccessful] = useState('')

          const handlepasswordVisibility = () => {
            if(Password.trim() === ''){
                alert('Please enter a password')
                return EyeSlash
            }
            setShowPassword(!ShowPassword)
          }
    
    const handleLogin = (e) => {
        e.preventDefault();
        if(username === '090' && Password === 'Olarewaju'){
            setSuccessful('Login Successful redirecting...')
            setTimeout(() => {
                navigate("/WhosWatching")
            },3000)
            
        } else if(!username || !Password){
            setErrorII('Please fill all the info')
            setTimeout(() => {
                setErrorII('')
            },3000)
            
            alert('Username: 090 --- Password: Olarewaju')

        } else{
            setError('Invalid username or password')
            setTimeout(() => {
                setError('')
            },3000)
            alert('Username: 090 --- Password: Olarewaju')
            
        }
    }

    const navigate = useNavigate()
       
    return(
        <div className={Styles.Container}>
                <div className={Styles.Login}>
                    <div className={Styles.LoginCover}>
                        <img src={NetflixLogo}/>
                        <div className={Styles.LoginContainer}>
                        <h1>Sign In</h1>
                            <form className={Styles.LoginContent} >
                                <div className={Styles.Username}>
                                    <input type='text' placeholder='Email or mobile number' 
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                        <p>{error}</p>

                                        
                                    <div className={Styles.Password}>
                                    <input type={ShowPassword ? 'text' : 'password'} placeholder='Password' 
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                                    <i onClick={handlepasswordVisibility}>{ShowPassword? Eye : EyeSlash}</i>
                                    </div>
                                        <p>{errorII}</p>
                                    
                                    <button onClick={handleLogin} >Sign In</button>
                                    <p>{Successful}</p>
                                    <p>OR</p>
                                    <button>Use a Sign In Code</button>
                                    <a href='#'>Forgot password?</a>
                            </form>
                            <div className="remember">
                                <input type='checkbox'/> <span style={{marginLeft: '2px'}}>Remember me.</span>
                            </div>
                            <p>New to Netflix? <span><a href='#'>Sign up now.</a></span></p>
                            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#'>Learn more.</a></p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default LoginPage