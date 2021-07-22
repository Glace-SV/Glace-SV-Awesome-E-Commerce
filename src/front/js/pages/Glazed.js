import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const GlazedInfoCard = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadGlazed();
	}, []);
	const glazed = store.glazed;
	console.log(glazed);

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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<h3 className="lead mx-auto buynow my-3">COMPRA AHORA!</h3>
			</div>

			{glazed.map(glaze => (
				<div key={glaze} className="row d-inline-block mx-auto">
					<Card style={{ width: "17rem" }} className="col-12 m-3">
						<Card.Img
							variant="top"
							className="imgsizingcategory categoryline"
							src="https://unsplash.com/photos/5K5Nc3AGF1w/download?force=true&w=2400"
						/>
						<Card.Body>
							<Card.Title>{glaze.name}</Card.Title>
							<Card.Text>{glaze.description}</Card.Text>
							<Card.Text>{glaze.size}</Card.Text>
							<Card.Text>{glaze.price}</Card.Text>
							<Button
								variant="warning"
								onClick={() => {
									actions.addToCart(glaze.name);
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
