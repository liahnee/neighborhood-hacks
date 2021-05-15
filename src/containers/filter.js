import React, { useState } from 'react';
import { connect } from 'react-redux';

const Login = (props) => {
	
    const { type, setType, startTime, endTime, setTime } = props;

    const onClick = props => {
        console.log(props)
        console.log("type")
        setType(props); 
    }
	return (
    <div className="container">
        <button className={type === "walking"? "selected" : ""} onClick={() => onClick("walking")}>walking</button>
        <button className={type === "children"? "selected": ""} onClick={() => onClick("children")}>children</button>
    </div>
    );
};

const sToP = (state) => ({
	type: state.filter.type,
});

const dToP = (dispatch) => ({
	setType: (data) =>
		dispatch({
			type: 'CHANGE_TYPE',
			payload: data
		}),
	setime: (data) =>
		dispatch({
			type: 'CHANGE_TIME',
			payload: data
		}),
});

export default connect(sToP, dToP)(Login);
