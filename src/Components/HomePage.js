import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, setSignedIn, setUserData } from '../Freatures/userSlice'
import '../CSS/home.css'

const HomePage = () => {
    const login = (response)=>{
        console.log(response)

       dispatch(setSignedIn(true))
       dispatch(setUserData(response.profileObj));

    }
    const dispatch = useDispatch()
    const isSignedIn = useSelector(selectSignedIn)
    return (
        <div className='home_page' style={{display: isSignedIn ? 'none' : ''}}>
        {!isSignedIn ? 
        <div className='login_messages'>
        <h2>_</h2>
        <h1>Tu sitio Favorito</h1>
        <p>Contenido de valor</p>

    
    <GoogleLogin clientId='126421552969-qu2ciraer34ai3o5jpqovcrpj3r4d5ro.apps.googleusercontent.com'
    render={(renderProps)=>(
        <button onClick={renderProps.onClick} className='login_button'>
            Logeate Con Google
        </button>
    )}
    onSuccess={login}
    onFailure={login}
    isSignedIn={true}
    cookiePolicy={'single_host_origin'}/>
    </div> :'' }
        
        </div>
        
    )
}

export default HomePage
