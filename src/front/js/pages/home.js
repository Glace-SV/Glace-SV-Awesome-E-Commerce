import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Item, Caption } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100" src="https://c.stocksy.com/a/wbi900/z9/2316440.jpg" alt="First slide" />
				<Carousel.Caption>
					<h3 className="hometitle">The Art of Bakery</h3>
					<p className="homepara">✨Made from scratch </p>
					<p className="homepara">🍰Glazed desserts & MORE </p>
					<p className="homepara">❤Passion for creating delicious desserts</p>
					<p className="homepara">🛵Delivery service only </p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://c.stocksy.com/a/wbi900/z9/2316440.jpg" alt="Second slide" />

				<Carousel.Caption>
					<h3>The Art of Bakery</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://c.stocksy.com/a/wbi900/z9/2316440.jpg" alt="Third slide" />

				<Carousel.Caption>
					<h3>The Art of Bakery</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
