import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { FilledCart } from "../component/filledCart";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const cart = store.cart;
	console.log(cart);
	const isEmpty = cart.length === 0;


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

			<Button variant="warning">Check Out</Button>;
		}
	};

	const emptyCart = (
		<p className="mx-auto">Aún no tienes nada en tu carrito. Ve a la sección productos para comprar ahora!</p>
	);

	return (
		<div className="mx-auto" id="categories">
			<div className="row mb-4">
				<h1 className="mt-3 mx-auto viewstitle">Tu carrito de compra</h1>

				{isEmpty ? <EmptyCart /> : <FilledCart />}
			</div>
		</>

			</div>
			<div className="row">{isEmpty ? emptyCart : <FilledCart />}</div>
		</div>
	);
};

export default ShoppingCart;
