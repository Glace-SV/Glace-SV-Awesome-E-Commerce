import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const AddToCart = () => {
	const { store, actions } = useContext(Context);
	return (
		<div classNameName="btn-group">
			<button
				type="button"
				className="btn btn-primary dropdown-toggle"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Mi cesta: {store.cart.length}
			</button>
			<div className="dropdown-menu">
				<ul>
					{store.cart.length > 0 ? (
						store.cart.map((cart, index) => {
							return (
								<li key={index}>
									<a href="#">{cart}</a>
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
						<span>Empty</span>
					)}
				</ul>
			</div>
		</div>
	);
};

export default AddToCart;
