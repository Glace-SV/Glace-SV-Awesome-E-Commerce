import { Card, Button, FormControl } from "react-bootstrap";
import "../../styles/home.scss";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PaypalCheckoutButton from "./paypalCheckoutButton";

const FilledCart = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getUser();
	}, []);
	const cart = store.cart;
	const user = store.currentUser;
	console.log(user);
	console.log(cart);
	function CustomerOrder() {
		const order = {
			customer: "123456",
			total: "550.00",
			items: [
				{
					sku: "112",
					name: "Camisa ReactJS",
					price: "300.00",
					quantity: 1,
					currency: "EUR"
				},
				{
					sku: "99",
					name: "Camisa JS",
					price: "125.00",
					quantity: 2,
					currency: "EUR"
				}
			]
		};

	return (
		<div>
			{cart.map((item, index) => (
				<div key={index} className="row d-inline-block mx-4">
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
							<Card.Text>${parseInt(item.price)}</Card.Text>
							<div className="row mx-auto">
								<Button
									className="mt-4"
									variant="warning"
									onClick={() => {
										actions.deleteFromCart(index);
									}}>
									Eliminar
								</Button>
								<div className="col-5 text-center mt-1">{item.quantity}</div>
								<Button
									className="subs col-2"
									variant="warning"
									onClick={() => {
										actions.sumCartItem(index, item.quantity, item.price);
									}}>
									+
								</Button>
							</div>
							<Button
								className="mt-4"
								variant="warning"
								onClick={() => {
									actions.deleteFromCart(index);
								}}>
								Eliminar
							</Button>
							<div>
								<Button
									className="mt-4"
									variant="warning"
									onClick={() => {
										actions.updateItemPrice(index, item.quantity, item.price);
									}}>
									Actualizar total
								</Button>
							</div>
						</Card.Body>
					</Card>
				</div>
			))}
			;
			<div className="mx-auto" id="categories">
				<div className="row mb-4">
					<h1 className="mt-3 mx-auto viewstitle">Verifica el total de tu orden</h1>
				</div>
				<h3 className="text-center">Gran total: $</h3>
			</div>
			<div className="mx-auto" id="categories">
				<div className="row mb-4">
					<h1 className="mt-3 mx-auto viewstitle">Verifica los datos de tu orden</h1>
				</div>
				<h3 className="text-center">Gran total: $</h3>
			</div>
		</div>
	);
};

export default FilledCart;
