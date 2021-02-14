import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import './FacebookLogin.css'

export default class Facebook extends Component {

    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    responseFacebook = response => {
        console.log(response)
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            // picture: response.picture.data.url
        })
    }

    componentClicked = () => console.log('clicked')

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (
                <div>You are loggedin</div>
            )
        } else {
            fbContent = (
                <FacebookLogin
                    appId="1020848905090742"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    size='small'
                    textButton='Login'
                    icon="fa-facebook"
                    // cssClass="facebookLoginButton"
                />
            )
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
}