import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { FilledCart } from "../component/filledCart";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const cart = store.cart;
	console.log(cart);
	const isEmpty = cart.length === 0;
	const emptyCart = (
		<p className="mx-auto text-center">
			Aún no tienes nada en tu carrito. ¡Ve a la sección productos para comprar!
		</p>
	);
	return (
		<div className="mx-auto" id="categories">
			<div className="row mb-4">
				<h1 className="mt-3 mx-auto viewstitle">Tu carrito de compra</h1>
			</div>
			<div>{isEmpty ? emptyCart : <FilledCart />}</div>
		</div>
	);
};
export default ShoppingCart;
