import { Card, Button, FormControl } from "react-bootstrap";
import "../../styles/home.scss";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PaypalCheckoutButton from "./paypalCheckoutButton";

export const FilledCart = () => {
	const { store, actions } = useContext(Context);
	const email = store.email;

	const cart = store.cart;
	console.log("user", user);
	console.log(cart);
	const order = {
		customer: "",
		total: "",
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
							src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/american-heritage-chocolate-5K5Nc3AGF1w-unsplash.jpg"
						/>
						<Card.Body>
							<Card.Title>{item.name}</Card.Title>
							<Card.Text>{item.description}</Card.Text>
							<Card.Text>{item.size}</Card.Text>
							<Card.Text>${parseInt(item.price)}</Card.Text>
							<div className="row mx-auto">
								<Button
									className="add col-2"
									variant="warning"
									onClick={() => {
										actions.subsCartItem(index, item.quantity);
									}}>
									-
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
				<h3 className="text-center">Nombre: {}</h3>
			</div>
			<>
				<header className="App-header">
					<PaypalCheckoutButton order={order} />
				</header>
			</>
		</div>
	);
};
