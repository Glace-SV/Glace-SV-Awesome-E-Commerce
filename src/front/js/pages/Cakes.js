import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

function CakesInfoCard({ cake }) {
	console.log(cake);
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src="holder.js/100px180" />
				<Card.Body>
					<Card.Title>{cake.name}</Card.Title>
					<Card.Text>{cake.description}</Card.Text>
					<Button variant="primary">Go somewhere</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

CakesInfoCard.propTypes = {
	// You can declare that a prop is a specific JS type. By default, these
	// are all optional.
	cake: PropTypes.object
};

export default GiftsInfoCard;
