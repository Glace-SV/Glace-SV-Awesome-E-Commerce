import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import {
	Carousel,
	Item,
	Caption,
	Card,
	Img,
	Title,
	Text,
	ImgOverlay,
	Button,
	Form,
	Group,
	Label,
	Control,
	Check
} from "react-bootstrap";

export const CakesInfoCard = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadCakes();
	}, []);
	const cakes = store.cakes;
	console.log(cakes);

	return (
		<>
			<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
				<Card.Img
					variant="top"
					className="imgsizingcategory"
					src="https://unsplash.com/photos/5K5Nc3AGF1w/download?force=true&w=2400"
				/>
				<Card.Body>
					<Card.Title>CAKES & MORE!</Card.Title>
					<Card.Text>Pasteles para celebrar toda ocasión: cumpleaños, graduaciones, bodas...</Card.Text>
					<Button variant="warning" onClick={renderCakes}>
						Comprar ahora
					</Button>
				</Card.Body>
			</Card>
			<div>
				{cakes.map(cake => (
					<div key={cake}> {cake.name} </div>
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

export default CakesInfoCard;
