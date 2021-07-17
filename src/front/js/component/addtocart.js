import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const AddToCart = () => {
	const { store, actions } = useContext(Context);
	return (
		<div classNameName="btn-group">
			<button
				type="button"
				className="mt-2 btn btn-warning dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				<i className="fas fa-shopping-basket" /> {store.cart.length}
			</button>
			<div className="dropdown-menu">
				<ul>
					{store.cart.length > 0 ? (
						store.cart.map((item, index) => {
							return (
								<li key={index}>
									<a href="#">{item}</a>
									<i
										id="delete"
										className="far fa-trash-alt pointer trash px-3"
										onClick={() => {
											actions.deleteFavorite({ index });
										}}
									/>
								</li>
							);
						})
					) : (
						<span>Vacío.</span>
					)}
				</ul>
			</div>
		</div>
	);
};

export default AddToCart;
