//import rendergifts???

import React, { useContext } from "react";
import GiftsInfoCard from "../pages/Gifts";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link, useParams, useHistory } from "react-router-dom";
import {
	Carousel,
	Item,
	Caption,
	Card,
	Img,
	Title,
	Text,
	ImgOverlay,
	Button,
	Form,
	Group,
	Label,
	Control,
	Check
} from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();
	console.log(store.gifts);
	const renderGifts = () => {
		history.push("/gifts");
	};
	const renderCakes = () => {
		history.push("/cakes");
	};

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
							<p className="homepara slideonecolor">Made from scratch </p>
							<p className="homepara slideonecolor">Glazed desserts & MORE </p>
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
							<p className="homepara slideonecolor">Passion for creating delicious desserts</p>
							<p className="homepara slideonecolor">Delivery service only </p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="row mx-auto" id="categories">
				<h2 className="mt-5 mx-auto categorytitle">
					<span className="emoji">🍰</span>
					Nuestras especialidades
					<span className="emoji">🍰</span>
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
						<Card.Title>GLAZE ME UP!</Card.Title>
						<Card.Text>Nuestra selección de pasteles glazeados te encantará!</Card.Text>
						<Button variant="warning">Comprar ahora</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://unsplash.com/photos/90HdOlGbjck/download?force=true&w=2400"
					/>
					<Card.Body>
						<Card.Title>TREAT YO SELF!</Card.Title>
						<Card.Text>Brownies, cupcakes, pretzels y macarons para endulzarte la vida.</Card.Text>
						<Button variant="warning">Comprar ahora</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://unsplash.com/photos/5K5Nc3AGF1w/download?force=true&w=2400"
					/>
					<Card.Body>
						<Card.Title>CAKES & MORE!</Card.Title>
						<Card.Text>Pasteles para celebrar toda ocasión: cumpleaños, graduaciones, bodas...</Card.Text>
						<Button variant="warning" onClick={renderCakes}>
							Comprar ahora
						</Button>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://unsplash.com/photos/dcPNZeSY3yk/download?force=true"
					/>
					<Card.Body>
						<Card.Title>SPREAD THE LOVE!</Card.Title>
						<Card.Text>Regalos diseñados para esparcir amor y felicidad.</Card.Text>
						<Link to="/category">
							<Button variant="warning" onClick={renderGifts}>
								Comprar ahora
							</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div className="mt-5 bckgrndimg eventcontainer" id="events">
				<h2 className="pt-4 mt-3 eventtitle scrim text-center">
					<span className="emoji">🍰</span>
					El evento perfecto
					<span className="emoji">🍰</span>
				</h2>
				<h3 className="eventtitle3 mt-4 scrim slideonecolor">We design delicious events.</h3>
				<p className="eventpara scrim slideonecolor">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<Button variant="warning" className="text-center mx-auto">
					<a
						href="https://svglace.s3.eu-west-3.amazonaws.com/GLACE+SV+E-COMMERCE/CATEGORIA/Eventos/0-191221193_20210422_073700_0000.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="text-decoration-none text-dark">
						Click para conseguir nuestros packs!
					</a>
				</Button>
				<h3 className="eventtitle3 mt-5 scrim slideonecolor">Presupuesto personalizado.</h3>
				<p className="eventpara scrim slideonecolor">
					Déjanos tus datos y nos pondremos en contacto contigo lo más pronto posible.
				</p>
				<Form className="col-lg-6 col-10 mx-auto">
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control type="text" placeholder="Nombre" required />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control type="email" placeholder="Email" required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control type="text" placeholder="Teléfono" required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control type="text" placeholder="Tipo de evento" required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control type="text" placeholder="N° personas" required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control type="text" placeholder="Fecha de tu evento" required />
					</Form.Group>

					<Button variant="warning" type="Enviar" className="text-center mx-auto">
						Enviar
					</Button>
				</Form>
				<div className="air" />
			</div>
		</div>
	);
};
