import React, { useState } from 'react';
import { connect } from 'react-redux';
import TimeInput from 'react-input-time';

const AddCoords = ({ type }, ...props) => {
	const [ bounds, setBounrds ] = useState([]);
	const [ rating, setRating ] = useState("3");
	const [ startTime, setStatTime ] = useState([ '00:00', '23:59' ]);
	const [ endTime, setEndTime ] = useState([ '00:00', '23:59' ]);
	// const rectangle = new google.maps.Rectangle({
	// 	strokeColor: '#FF0000',
	// 	strokeOpacity: 0.0,
	// 	strokeWeight: 2,
	// 	fillColor: '#FF0000',
	// 	fillOpacity: 0.35,
	// 	map,
	// 	bounds: {
	// 		north: 33.685,
	// 		south: 33.671,
	// 		east: -116.234,
	// 		west: -116.251
	// 	}
	// });

	const onRatingChange = (props) => {
        const { target } = props;
		const { value } = target;
        setRating(value);
        console.log(rating)
	};

    const onStartTimeChange = (props) => {
        const { target } = props;
		const { value } = target;
        setStatTime(value);
    }
    const onEndTimeChange = (props) => {
        const { target } = props;
		const { value } = target;
        setEndTime(value);
    }

    const onSubmit = (props) => {

    };

	const rate = (props) => {
		return (
			<div className="ratings">
				<label>
					<input
						type="radio"
						value="1"
						name="rating"
						checked={rating === '1'}
						onChange={onRatingChange}
					/>{' '}
					1
				</label>
				<label>
					<input
						type="radio"
						value="2"
						name="rating"
						checked={rating === '2'}
						onChange={onRatingChange}
					/>{' '}
					2
				</label>
				<label>
					<input
						type="radio"
						value="3"
						name="rating"
						checked={rating === '3'}
						onChange={onRatingChange}
					/>{' '}
					3
				</label>
				<label>
					<input
						type="radio"
						value="4"
						name="rating"
						checked={rating === '4'}
						onChange={onRatingChange}
					/>{' '}
					4
				</label>
				<label>
					<input
						type="radio"
						value="5"
						name="rating"
						checked={rating === '5'}
						onChange={onRatingChange}
					/>{' '}
					5
				</label>
			</div>
		);
	};

    const inputTime = (props) => {

        return(
            <div className="time">
                <label>
                    From
                    <TimeInput className="input-time" initialTime="00:00" onChange={onStartTimeChange} />
                </label>
                <label>
                    To
                    <TimeInput className="input-time" initialTime="00:00" onChange={onEndTimeChange} />
                </label>
            </div>
        )
    };

	return (
		<div className="container">
			<form onSubmit={onSubmit}>
				{/* add time input component */}
				{/* add rating input component */}
                {rate()}
                {inputTime()}
			</form>
		</div>
	);
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

export default connect(sToP, dToP)(AddCoords);
