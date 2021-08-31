import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const GlazedInfoCard = () => {
	const { store, actions } = useContext(Context);
	const [total, setTotal] = useState();
	useEffect(() => {
		actions.loadGlazed();
	}, []);
	const glazed = store.glazed;

	return (
		<>
			<div className="row mx-auto" id="categories">
				<h1 className="mt-3 mx-auto viewstitle">
					<Link to="/gifts">
						<i className="changesection mr-4 fas fa-arrow-left" />
					</Link>
					Glaze me up!
					<Link to="/treats">
						<i className=" changesection ml-4 fas fa-arrow-right" />
					</Link>
				</h1>
			</div>
			<div className="row mx-auto ">
				<p className="mx-5 mt-3 viewspara">
					Pastry dessert cotton candy cupcake sugar plum bear claw. Cake sesame snaps muffin powder bonbon
					tootsie roll chocolate. I love candy tart cookie halvah jelly-o I love croissant. Chocolate dragée
					powder sugar plum toffee.
				</p>
				<h3 className="lead mx-auto buynow my-3">COMPRA AHORA!</h3>
			</div>

			{glazed.map(glaze => (
				<div key={glaze} className="row d-inline-block mx-auto">
					<Card style={{ width: "17rem" }} className="col-12 m-3">
						<Card.Img
							variant="top"
							className="imgsizingcategory categoryline"
							src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/taylor-kiser-s7Vh1kg-clM-unsplash.jpg"
						/>
						<Card.Body>
							<Card.Title>{glaze.name}</Card.Title>
							<Card.Text>{glaze.description}</Card.Text>
							<Card.Text>{glaze.size}</Card.Text>
							<Card.Text>${glaze.price}</Card.Text>
							<Button
								variant="warning"
								onClick={() => {
									actions.addToCart(glaze);
									actions.getOrderTotal();
									setTotal(store.orderTotal);
								}}>
								Comprar
							</Button>
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
};

export default GlazedInfoCard;
