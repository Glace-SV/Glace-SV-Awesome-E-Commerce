import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const GiftsInfoCard = () => {
	const { store, actions } = useContext(Context);
	const [total, setTotal] = useState();
	useEffect(() => {
		actions.loadGifts();
	}, []);
	const gifts = store.gifts;

	return (
		<>
			<div className="row mx-auto" id="categories">
				<h1 className="mt-3 mx-auto viewstitle " style={{ fontSize: "33px" }}>
					<Link to="/cakes">
						<i className="changesection mr-4 fas fa-arrow-left" />
					</Link>
					Spread the Love
					<Link to="/glazed">
						<i className=" changesection ml-4 fas fa-arrow-right" />
					</Link>
				</h1>
			</div>
			<div className="row mx-auto ">
				<p className="mx-5 mt-3 viewspara">
					Donut jujubes brownie bear claw marshmallow. Macaroon I love marshmallow tootsie roll ice cream.
					Tootsie roll lemon drops marzipan sweet roll liquorice. Muffin apple pie shortbread I love chocolate
					cake cake I love cupcake jelly.
				</p>
				<h3 className="lead mx-auto buynow my-3">COMPRA AHORA!</h3>
			</div>
			{gifts.map(gift => (
				<div key={gift} className="row d-inline-block mx-auto">
					<Card style={{ width: "17rem" }} className="col-12 m-3">
						<Card.Img
							variant="top"
							className="imgsizingcategory categoryline"
							src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/food-photographer-jennifer-pallian-dcPNZeSY3yk-unsplash.jpg"
						/>
						<Card.Body>
							<Card.Title>{gift.name}</Card.Title>
							<Card.Text>{gift.description}</Card.Text>
							<Card.Text>{gift.size}</Card.Text>
							<Card.Text>${gift.price}</Card.Text>
							<Button
								variant="warning"
								onClick={() => {
									actions.addToCart(gift);
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
export default GiftsInfoCard;
