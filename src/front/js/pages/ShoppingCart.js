import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Link } from "react-router-dom";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.loadCart();
	}, []);
	const cart = store.cart;

	return (
		<>
			<div className="row mx-auto" id="categories">
				<h1 className="mt-3 mx-auto viewstitle">Tu carrito de compra</h1>
			</div>
			{cart.map(item => (
				<div key={item} className="row d-inline-block mx-auto">
					<Card style={{ width: "17rem" }} className="col-12 m-3">
						<Card.Img
							variant="top"
							className="imgsizingcategory categoryline"
							src="https://unsplash.com/photos/5K5Nc3AGF1w/download?force=true&w=2400"
						/>
						<Card.Body>
							<Card.Title>{item.name}</Card.Title>
							<Card.Text>{item.description}</Card.Text>
							<Card.Text>{item.size}</Card.Text>
							<Card.Text>{item.price}</Card.Text>
							<Button variant="warning">Comprar</Button>
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
};

export default ShoppingCart;
