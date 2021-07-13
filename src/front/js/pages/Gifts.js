import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const GiftsInfoCard = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadGifts();
	}, []);
	const gifts = store.gifts;
	console.log(gifts);

	return (
		<>
			<div>
				{gifts.map(gift => (
					<div key={gift}> {gift.name} </div>
				))}
			</div>
		</>
	);

	// return (
	// 	<>
	// 		<div>
	// 			<h1>hello </h1>
	// 		</div>
	// 	</>
	// );
};

// GiftsInfoCard.propTypes = {
// 	// You can declare that a prop is a specific JS type. By default, these
// 	// are all optional.
// 	gift: PropTypes.object
// };

// GiftsInfoCard.propTypes = {
// 	gifts: PropTypes.object
// };

export default GiftsInfoCard;
