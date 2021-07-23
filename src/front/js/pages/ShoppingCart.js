import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Link } from "react-router-dom";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const cart = store.cart;

	const isEmpty = cart.lenght === 0;

	const EmptyCart = () => {
		<h1>Aún no tienes nada en tu carrito. Ve a la sección productos para comprar ahora!</h1>;
	};

	const FilledCart = () => {
		{
			cart.map(article => (
				<div key={item} className="row d-inline-block mx-auto">
					<Card style={{ width: "17rem" }} className="col-12 m-3">
						<Card.Img
							variant="top"
							className="imgsizingcategory categoryline"
							src="https://unsplash.com/photos/5K5Nc3AGF1w/download?force=true&w=2400"
						/>
						<Card.Body>
							<Card.Title>{article.name}</Card.Title>
							<Card.Text>{article.price}</Card.Text>
							<Card.Text>{article.size}</Card.Text>
							<Button variant="warning">Eliminar</Button>
						</Card.Body>
					</Card>
				</div>
			));
		}
		// <Button variant="warning">Check Out</Button>
	};

	return (
		<>
			<div className="row mx-auto" id="categories">
				<h1 className="mt-3 mx-auto viewstitle">Tu carrito de compra</h1>
				{isEmpty ? <EmptyCart /> : <FilledCart />}
			</div>
		</>
	);
};

export default ShoppingCart;
