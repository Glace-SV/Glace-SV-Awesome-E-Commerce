import { Card, Button } from "react-bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

import { Link } from "react-router-dom";

export const CakesInfoCard = () => {
	const { store, actions } = useContext(Context);
	const [total, setTotal] = useState();
	useEffect(() => {
		actions.loadCakes();
	}, []);
	const cakes = store.cakes;

	return (
		<>
			<div className="row mx-auto" id="categories">
				<h1 className="mt-3 mx-auto viewstitle">
					<Link to="/treats">
						<i className="changesection mr-4 fas fa-arrow-left" />
					</Link>
					Cakes & More
					<Link to="/gifts">
						<i className=" changesection ml-4 fas fa-arrow-right" />
					</Link>
				</h1>
			</div>
			<div className="row mx-auto ">
				<p className="mx-5 mt-3 viewspara">
					Cupcake ipsum dolor sit amet. Halvah donut candy I love ice cream lemon drops jelly-o jelly I love.
					Biscuit tart tiramisu jelly oat cake I love pudding tootsie roll. Bonbon shortbread cake candy canes
					carrot cake cupcake powder. Liquorice marshmallow soufflé jelly-o wafer carrot cake sweet danish
					chocolate. Apple pie gummi bears chocolate cake chocolate cake muffin.
				</p>
				<h3 className="lead mx-auto buynow my-3">COMPRA AHORA!</h3>
			</div>
			{cakes.map(cake => (
				<div key={cake} className="row d-inline-block mx-auto">
					<Card style={{ width: "17rem" }} className="col-12 m-3">
						<Card.Img
							variant="top"
							className="imgsizingcategory categoryline"
							src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/american-heritage-chocolate-5K5Nc3AGF1w-unsplash.jpg"
						/>
						<Card.Body>
							<Card.Title>{cake.name}</Card.Title>
							<Card.Text>{cake.description}</Card.Text>
							<Card.Text>{cake.size}</Card.Text>
							<Card.Text>${cake.price}</Card.Text>
							<Button
								variant="warning"
								onClick={() => {
									actions.addToCart(cake);
									actions.getOrderTotal();
									setTotal(store.orderTotal);
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
export default CakesInfoCard;
