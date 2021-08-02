import { Dropdown, DropdownButton } from "react-bootstrap";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

const AddToCart = () => {
	const { store, actions } = useContext(Context);
	const [total, setTotal] = useState();
	return (
		<div>
			<Dropdown>
				<Dropdown.Toggle variant="warning" align="end" id="dropdown-menu-align-right">
					<i className="fas fa-shopping-basket" /> {store.cart.length}
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>
						{store.cart.length > 0 ? (
							store.cart.map((item, index) => {
								return (
									<div key={index} className="row" style={{ width: "320px" }}>
										<p>{item.name}</p>
										<i
											id="delete"
											className="far fa-trash-alt pointer trash mt-1 ml-2"
											onClick={() => {
												actions.deleteFromCart(index);
												actions.getOrderTotal();
												setTotal(store.orderTotal);
											}}
										/>
									</div>
								);
							})
						) : (
							<span>Vacío.</span>
						)}
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default AddToCart;
