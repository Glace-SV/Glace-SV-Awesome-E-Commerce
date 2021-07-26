import { Card, Button, FormControl } from "react-bootstrap";
import "../../styles/home.scss";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PaypalCheckoutButton from "./paypalCheckoutButton";

const FilledCart = () => {
	const { store, actions } = useContext(Context);
	const cart = store.cart;
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
								<Card.Text>{item.price}</Card.Text>
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
							</Card.Body>
						</Card>
					</div>
				))}
				;<div>Hello</div>
				<div className="CutomerOrder">
					<PaypalCheckoutButton order={order} />
				</div>
			</div>
		);
	}
};

export default FilledCart;
