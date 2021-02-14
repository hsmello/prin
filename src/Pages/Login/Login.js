import React, { Component } from 'react';
import './Login.css'
import Axios from 'axios';
import UserStatus from '../User/UserStatus'
import TextField from '../../Components/TextField';
import ButtonStandard from '../../Components/ButtonStandard';
import FacebookLogin from '../../Components/FacebookLogin';
import GoogleLogin from '../../Components/GoogleLogin';

const acessToken = 'asiodjaosid'
const authAxios = Axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        Authorization: `Bearer ${acessToken}`
    }
})

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginEmail: '',
            loginPassword: '',
            buttonDisabled: false,
            isLoggedIn: false
        }
    }

    resetForm() { //if smmth is not correct it will resert the loginpage
        this.setState({
            ...this.state,
            loginEmail: '',
            loginPassword: '',
            buttonDisabled: false,
            isLoggedIn: false
        })
    }

    doLogin() {
        if (!this.state.loginEmail) {
            return;
        }
        if (!this.state.loginPassword) {
            return;
        }
        this.setState({ ...this.state, buttonDisabled: true })
        Axios.post("http://localhost:4000/login", {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        }).then((res) => {
            // res.json().then((result) => {
            //     console.warn('result', result)
            //     localStorage.setItem('token', result.token)
            //     console.log(localStorage)
            // })


            console.log(res.data.acessToken)

            if (res.data.message !== 'Check email and password') {
                localStorage.setItem('email', this.state.loginEmail)
                UserStatus.username = this.state.loginEmail
                UserStatus.isLoggedIn = true
                this.setState({ ...this.state, isLoggedIn: true })
                localStorage.setItem('token', '1234')
                console.log(localStorage)
            } else {
                this.resetForm()
            }
            
        })

    }

    render() {
        if (UserStatus.isLoggedIn) {
            window.location.href = '/dashboard'
            console.log('oi')
            return;
        }
        return (
            <div className="loginPage">
                <div className="loginTitle">
                    Login
                {UserStatus.username}
                </div>
                <div className="loginCredentials">
                    <div className="loginCredentialsBlocks LoginEmailBlock">
                        <TextField
                            label='E-mail'
                            onChange={(value) => this.setState({ loginEmail: value })}
                        />
                        <TextField
                            label='Password'
                            type='password'
                            onChange={(value) => this.setState({ loginPassword: value })}
                            OnClickEnter={() => this.doLogin()}
                        />
                        <ButtonStandard
                            label='Entrar'
                            variant="contained"
                            bgcolor='rgba(81, 122, 184, 1)'
                            disabled={this.state.buttonDisabled}
                            onClick={() => this.doLogin()}
                        />
                    </div>
                    <div className="loginCredentialsBlocks LoginSocialMediaBlock">
                        Ou entre através das redes sociais
                        {/* os plugins abaixo funcionarão em https */}
                        <div className="loginSocialMedia LoginFacebook">
                            <FacebookLogin />
                        </div>
                        <div className="loginSocialMedia LoginGoogle">
                            <GoogleLogin />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;