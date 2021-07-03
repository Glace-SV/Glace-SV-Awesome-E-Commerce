import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Item, Caption, Card, Img, Title, Text, ImgOverlay } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block imgsizing"
					src="https://unsplash.com/photos/8LtrMQfeDkQ/download?force=true&w=2400"
					alt="First slide"
				/>
				<Carousel.Caption>
					<div className="scrim">
						<h3 className="slideonecolor">The art of Bakery</h3>
						<p className="homepara slideonecolor">✨Made from scratch </p>
						<p className="homepara slideonecolor">🍰Glazed desserts & MORE </p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block imgsizing"
					src="https://unsplash.com/photos/-uRrBqB53So/download?force=true&w=2400"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<div className="scrim">
						<h2 className="slideonecolor">The art of Bakery</h2>
						<p className="homepara slideonecolor">❤Passion for creating delicious desserts</p>
						<p className="homepara slideonecolor">🛵Delivery service only </p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
