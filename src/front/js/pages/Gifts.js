import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

function GiftsInfoCard({ gift }) {
	console.log(gift);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>{gift.name}</Card.Title>
					<Card.Text>{gift.description}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

GiftsInfoCard.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	gift: PropTypes.object
};

export default GiftsInfoCard;
