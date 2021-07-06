import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/categories.scss";
import { Context } from "../store/appContext";
import { Card, Button } from "react-bootstrap";

function PBC({gift}) {
	const { store, actions } = useContext(Context);
	console.log(gift)
	return (
		<div className="container">
			<div className="mx-auto mt-4">
				<h2 className="categorytitle text-center">
					<span className="emoji">🍰</span>
					SPREAD THE LOVE!
					<span className="emoji">🍰</span>
				</h2>
				<p className="categorypara mt-4">
					Regalos diseñados para esparcir amor y felicidad. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className="row">
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://unsplash.com/photos/dcPNZeSY3yk/download?force=true" //gift.image
					/>
					<Card.Body>
						<Card.Title>SPREAD THE LOVE!</Card.Title> 
						<Card.Text>Regalos diseñados para esparcir amor y felicidad.</Card.Text>
						<Link to="/category">
							<Button variant="warning">Comprar ahora</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};

PBC.propTypes = {
	match: PropTypes.object
};

export default PBC;
