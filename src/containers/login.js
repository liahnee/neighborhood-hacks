import React, { useState } from 'react';
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import config from '../config/config';

const Login = (props) => {
	const { loggedIn, login, logout } = props;
    const { identifyProvider } = config;
    const { GOOGLE_CLIENT_ID: clientId } = identifyProvider;

    const onSuccess = async (res) =>{
        console.log('login success', res.profileOb);
        login(res.profileOb)
    };
    const onFailure = (res) => {
        console.log('login failed', res)
    }

	const button = () => {
		let button;
		if (loggedIn) {
			button = (
				<GoogleLogout
					clientId={clientId}
					buttonText="Logout"
					onLogoutSuccess={logout}
				/>
			);
		} else {
			button = (
                <GoogleLogin
					clientId={clientId}
					buttonText="Login"
					onSuccess={onSuccess}
					onFailure={onFailure}
					cookiePolicy={'single_host_origin'}
					isSignedIn={true}
				/>
			);
		}
        return button;
	};

	return <div className="container">{button()}</div>;
};

const sToP = (state) => ({
	loggedIn: state.user.loggedIn
});

const dToP = (dispatch) => ({
	login: (userData) =>
		dispatch({
			type: 'LOGIN',
			payload: userData
		}),
    logout: () =>
    dispatch({
        type: 'LOGOUT',
    }),
});

export default connect(sToP, dToP)(Login);
