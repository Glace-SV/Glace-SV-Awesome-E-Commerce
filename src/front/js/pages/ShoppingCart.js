import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { FilledCart } from "../component/filledCart";
import CakesInfoCard from "./Cakes";

export const ShoppingCart = () => {
	const { store, actions } = useContext(Context);
	const cart = store.cart;
	const isEmpty = cart.length === 0;

	return (
		<div className="mx-auto" id="categories">
			<div>{isEmpty ? <CakesInfoCard /> : <FilledCart />}</div>
		</div>
	);
};
export default ShoppingCart;
