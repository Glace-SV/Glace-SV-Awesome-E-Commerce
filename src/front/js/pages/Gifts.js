import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const GiftsInfoCard = props => {
	console.log(props.name);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h1>Hello World</h1>
		</div>
	);
};

// GiftsInfoCard.propTypes = {
// 	// You can declare that a prop is a specific JS type. By default, these
// 	// are all optional.
// 	gift: PropTypes.object
// };

GiftsInfoCard.propTypes = {
	name: PropTypes.object
};

export default GiftsInfoCard;
