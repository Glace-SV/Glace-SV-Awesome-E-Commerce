import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TreatsInfoCard = () => {
	const { store, actions } = useContext(Context);
	const [total, setTotal] = useState();
	useEffect(() => {
		actions.loadTreats();
	}, []);
	const treats = store.treats;

	return (
		<>
			<div className="row mx-auto" id="categories">
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
				<h1 className="mt-3 mx-auto viewstitle">
					<Link to="/glazed">
						<i className="changesection mr-4 fas fa-arrow-left" />
					</Link>
					Treat yo self!
					<Link to="/cakes">
						<i className=" changesection ml-4 fas fa-arrow-right" />
					</Link>
				</h1>
			</div>
			<div className="row mx-auto ">
				<p className="mx-5 mt-3 viewspara">
					Chocolate bar topping I love chupa chups jelly-o. Cheesecake sweet roll gummies icing tootsie roll
					cheesecake. Topping cake tart fruitcake jujubes biscuit bear claw cake toffee. Tiramisu marshmallow
					fruitcake pudding jelly beans carrot cake jelly-o.
				</p>
				<h3 className="lead mx-auto buynow my-3">COMPRA AHORA!</h3>
			</div>
			{treats.map(treat => (
				<div key={treat} className="row d-inline-block mx-auto">
					<Card style={{ width: "17rem" }} className="col-12 m-3">
						<Card.Img
							variant="top"
							className="imgsizingcategory categoryline"
							src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/jr-r-90HdOlGbjck-unsplash.jpg"
						/>
						<Card.Body>
							<Card.Title>{treat.name}</Card.Title>
							<Card.Text>{treat.description}</Card.Text>
							<Card.Text>{treat.size}</Card.Text>
							<Card.Text>${treat.price}</Card.Text>
							<Button
								variant="warning"
								onClick={() => {
									actions.addToCart(treat);
									actions.getOrderTotal();
									setTotal(store.orderTotal);
									toast.warn("Producto agregado al carrito!", {
										position: "top-right",
										autoClose: 4000,
										hideProgressBar: false,
										closeOnClick: true,
										pauseOnHover: true,
										draggable: true,
										progress: undefined
									});
								}}>
								Comprar
							</Button>
						</Card.Body>
					</Card>
				</div>
			))}
		</>
	);
};
export default TreatsInfoCard;
