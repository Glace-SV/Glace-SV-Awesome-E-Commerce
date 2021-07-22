import { Card, Button } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const cart = store.cart;
	console.log(cart);
	const isEmpty = cart.length === 0;

	const emptyCart = <h2>Aún no tienes nada en tu carrito. Ve a la sección productos para comprar ahora!</h2>;

	const FilledCart = () => {
		return cart.map(item => (
			<div key={item} className="row d-inline-block mx-auto">
				<Card style={{ width: "17rem" }} className="col-12 m-3">
					<Card.Img
						variant="top"
						className="imgsizingcategory categoryline"
						src="https://unsplash.com/photos/5K5Nc3AGF1w/download?force=true&w=2400"
					/>
					<Card.Body>
						<Card.Title>{item.name}</Card.Title>
						<Card.Text>{item.price}</Card.Text>
						<Card.Text>{item.size}</Card.Text>
						<Button variant="warning">Eliminar</Button>
					</Card.Body>
				</Card>
			</div>
		));
	};

	return (
		<>
			<div className="mx-auto" id="categories">
				<div className="row mb-4">
					<h1 className="mt-3 mx-auto viewstitle">Tu carrito de compra</h1>
				</div>
				<div className="row">{isEmpty ? emptyCart : <FilledCart />}</div>
			</div>
		</>
	);
};

export default ShoppingCart;
