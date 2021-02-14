import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './FacebookLogin.css'

export default class Google extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseGoogle = (response) => {
        console.log(response)
        console.log(response.profileObj)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            // picture: response.picture.data.url
        })
    }


    render() {
        let googleContent;

        if (this.state.isLoggedIn) {
            googleContent = null
        } else {
            googleContent = (
                <GoogleLogin
                    clientID="41331238018-5ni54vqia3rqce8qv451c5d3jljqft6u.apps.googleusercontent.com"
                    buttonText='Login'
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className='googleLoginButton'
                />
            )
        }
        return (
            <div>
                {googleContent}
            </div>
        )
    }
}