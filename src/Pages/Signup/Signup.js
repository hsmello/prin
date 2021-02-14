import React, { useState } from 'react';
import TextField from '../../Components/TextField';
import ButtonStandard from '../../Components/ButtonStandard';
import Axios from 'axios';
import UserStatus from '../User/UserStatus';
import FacebookLogin from '../../Components/FacebookLogin';
import GoogleLogin from '../../Components/GoogleLogin';
import { FaFacebook } from 'react-icons/fa'
import './Signup.css'

export default function Signup() {

    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const register = () => {
        Axios.post("http://localhost:4000/signup", {
            email: newEmail,
            password: newPassword
        }).then((res) => {
            console.log(res);
        })
    }

    return(
        <div className="signup">
            Signup
            <FaFacebook/>
            
            <TextField 
                label = 'E-mail'
                onChange={(value) => setNewEmail(value)}
            />
            <TextField 
                label = 'Password'
                type='password'
                onChange={(value) => setNewPassword(value)}
                OnClickEnter={() => register()}
            />
            <TextField 
                label = 'Confirm password'
                type='password'
                onChange={(value) => setNewPassword(value)}
                OnClickEnter={() => register()}
            />
            <ButtonStandard 
                label='Cadastrar'
                variant="contained"
                bgcolor='rgba(81, 122, 184, 1)'
                onClick={() => register()}
            />
            {/* os plugins abaixo funcionarão em https */}
            <FacebookLogin />
            <GoogleLogin />
        </div>
    )
}