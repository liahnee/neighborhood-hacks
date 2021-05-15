import React, { useState } from 'react';

const Login = () => {
    const { type, setType } = useState("coords");

    return (
        <div className="container">
            <div>
                <div className="map-container">
                    {/* <Map /> */}
                    {/* <Overlay type={type} /> */}
                </div>
                <RatingBox type={type} />
            </div>
        </div>
    )
};

const sToP = (state) => ({
	loggedIn: state.user.loggedIn,
});

const dToP = (dispatch) => ({
	login: (userData) =>
		dispatch({
			type: 'USER/LOGIN',
			payload: userData
		})
});

export default connect(sToP, dToP)(Login);
