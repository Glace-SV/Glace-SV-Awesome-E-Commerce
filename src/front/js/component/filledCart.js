import { Card, Button, FormControl, Badge } from "react-bootstrap";
import "../../styles/home.scss";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PaypalCheckoutButton from "./paypalCheckoutButton";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FilledCart = () => {
	const { store, actions } = useContext(Context);
	const [total, setTotal] = useState(store.orderTotal);
	useEffect(() => {
		actions.getUser();
	}, []);
	const email = store.email;
	const cart = store.cart;
	let user = store.currentUser;

	const order = {
		total: total,
		items: cart.map((item, index) => {
			return {
				name: item.name,
				quantity: item.quantity,
				price: item.price,
				currency: "USD"
			};
		})
	};
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_71kh9c1", "template_pev5dw8", e.target, "user_1BqDn49vev8kqzjK7Nldu").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);

		e.target.reset();
	}

	return (
		<div>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<div className="row mb-4">
				<h1 className="mt-3 mx-auto viewstitle">Tu carrito de compra</h1>
			</div>
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
										actions.getOrderTotal();
										setTotal(store.orderTotal);
									}}>
									-
								</Button>
								<div className="col-5 text-center mt-1">{item.quantity}</div>
								<Button
									className="subs col-2"
									variant="warning"
									onClick={() => {
										actions.sumCartItem(index, item.quantity, item.price);
										actions.getOrderTotal();
										setTotal(store.orderTotal);
									}}>
									+
								</Button>
							</div>
							<Button
								className="mt-4"
								variant="warning"
								onClick={() => {
									actions.deleteFromCart(index);
									actions.getOrderTotal();
									setTotal(store.orderTotal);
									toast.warn("Producto eliminado con éxito", {
										position: "top-right",
										autoClose: 4000,
										hideProgressBar: false,
										closeOnClick: true,
										pauseOnHover: true,
										draggable: true,
										progress: undefined
									});
								}}>
								Eliminar
							</Button>
							<div />
						</Card.Body>
					</Card>
				</div>
			))}

			<div className="row mx-4 mt-2 mb-4">
				<h1 className=" mx-auto text-center viewstitle">Verifica el total de tu orden</h1>
			</div>

			<div>
				<div className="row mx-auto mb-5">
					<h1 className="mx-auto mt-1 text-center">
						<Badge bg="warning" variant="warning" text="dark">
							Total: ${total}
						</Badge>
					</h1>
				</div>
			</div>

			<div className="row m-4">
				<h1 className=" mx-auto text-center viewstitle">Verifica los datos de tu orden</h1>
			</div>
			<div className="col-lg-6 mx-auto col-12">
				<h4 className="text-left">
					<Badge bg="warning" variant="warning" text="dark" className="mr-2">
						Nombre:
					</Badge>
					{user.name} {user.lastname}
				</h4>
				<h4 className="text-left">
					<Badge bg="warning" variant="warning" text="dark" className="mr-2">
						Email:
					</Badge>

					{user.email}
				</h4>
				<h4 className="text-left">
					<Badge bg="warning" variant="warning" text="dark" className="mr-2">
						Teléfono de contacto:
					</Badge>

					{user.phone}
				</h4>
				<h4 className="text-left">
					<Badge bg="warning" variant="warning" text="dark" className="mr-2">
						Dirección de envío:
					</Badge>
					{user.address} {user.city}
				</h4>
			</div>

			<div className="mx-auto" id="categories">
				<div className="row mt-5">
					<h1 className="mt-3 mx-auto viewstitle">Procede al check out</h1>
				</div>
			</div>
			<>
				<header className="Paypal-header text-center mt-5 mb-5 mx-auto" style={{ width: "300px" }}>
					<PaypalCheckoutButton order={order} onSubmit={sendEmail} />
				</header>
			</>
			<div className="air" />
		</div>
	);
};
