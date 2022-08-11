import React from 'react'
import { Button } from '@mui/material'
import './Login.css'
import { signInWithRedirect } from 'firebase/auth'
import { auth, provider } from './firebase'

const Login = () => {
    const googleSignInHandler = () => {
        signInWithRedirect(auth, provider)
            .then(res => console.log(res))
            .catch(err => console.log('this is err', err.message))
    }

    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack logo" />
                <h3>sign in to slack clone</h3>
                <Button onClick={googleSignInHandler}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login