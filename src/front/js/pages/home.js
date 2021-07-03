import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Item, Caption, Card, Img, Title, Text, ImgOverlay, Button } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block imgsizing"
						src="https://unsplash.com/photos/8LtrMQfeDkQ/download?force=true&w=2400"
						alt="First slide"
					/>
					<Carousel.Caption>
						<div className="scrim">
							<h3 className="slideonecolor hometitle">The art of Bakery</h3>
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
							<h2 className="slideonecolor hometitle">The art of Bakery</h2>
							<p className="homepara slideonecolor">❤Passion for creating delicious desserts</p>
							<p className="homepara slideonecolor">🛵Delivery service only </p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="row mx-auto">
				<h2 className="mt-5 mx-auto">
					<span className="emoji">✨</span>
					Nuestras especialidades
					<span className="emoji">✨</span>
				</h2>
			</div>
			<div className="row mt-4 mx-auto">
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://unsplash.com/photos/s7Vh1kg-clM/download?force=true&w=2400"
					/>
					<Card.Body>
						<Card.Title>GLAZE ME UP</Card.Title>
						<Card.Text>Nuestra selección de pasteles glazeados te encantará!</Card.Text>
						<Button variant="warning">Lo quiero!</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://unsplash.com/photos/90HdOlGbjck/download?force=true&w=2400"
					/>
					<Card.Body>
						<Card.Title>TREAT YO SELF</Card.Title>
						<Card.Text>Nuestra selección de pasteles glazeados te encantará!</Card.Text>
						<Button variant="warning">Lo quiero!</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://unsplash.com/photos/5K5Nc3AGF1w/download?force=true&w=2400"
					/>
					<Card.Body>
						<Card.Title>CAKES & MORE</Card.Title>
						<Card.Text>Nuestra selección de pasteles glazeados te encantará!</Card.Text>
						<Button variant="warning">Lo quiero!</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://unsplash.com/photos/dcPNZeSY3yk/download?force=true"
					/>
					<Card.Body>
						<Card.Title>Spread the love</Card.Title>
						<Card.Text>Nuestra selección de pasteles glazeados te encantará!</Card.Text>
						<Button variant="warning">Lo quiero!</Button>
					</Card.Body>
				</Card>
			</div>
		</div>
	);
};
