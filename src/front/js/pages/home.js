//import rendergifts???

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link, useParams, useHistory } from "react-router-dom";
import { Carousel, Card, Button, Form } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [formName, setFormName] = useState();
	const [formEmail, setFormEmail] = useState();
	const [formPhone, setFormPhone] = useState();
	const [formEvent, setFormEvent] = useState();
	const [formPax, setFormPax] = useState();
	const [formDate, setFormDate] = useState();
	const handle_form = () => {
		actions.addForm(formName, formEmail, formPhone, formEvent, formPax, formDate);
		alert("formulario enviado. Garcias por su confianza");
	};
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block imgsizing"
						src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/jasmine-bartel-8LtrMQfeDkQ-unsplash.jpg"
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
						src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/zahra-tavakoli-fard--uRrBqB53So-unsplash.jpg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<div className="scrim">
							<h2 className="slideonecolor hometitle">The art of Bakery</h2>
							<p className="homepara slideonecolor">Passion for creating</p>
							<p className="homepara slideonecolor">delicious desserts</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className="row mx-auto" id="categories">
				<h2 className="mt-5 mx-auto text-center categorytitle">Nuestras Especialidades</h2>
			</div>
			<div className="row mt-4 mx-auto">
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/taylor-kiser-s7Vh1kg-clM-unsplash.jpg"
					/>
					<Card.Body>
						<Card.Title>GLAZE ME UP!</Card.Title>
						<Card.Text>Nuestra selección de pasteles glazeados te encantará!</Card.Text>

						<Link to="/glazed">
							<Button variant="warning">Compra ahora</Button>
						</Link>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/jr-r-90HdOlGbjck-unsplash.jpg"
					/>
					<Card.Body>
						<Card.Title>TREAT YO SELF!</Card.Title>
						<Card.Text>Brownies, cupcakes, pretzels y macarons para endulzarte la vida.</Card.Text>
						<Link to="/treats">
							<Button variant="warning">Comprar ahora</Button>
						</Link>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/american-heritage-chocolate-5K5Nc3AGF1w-unsplash.jpg"
					/>
					<Card.Body>
						<Card.Title>CAKES & MORE!</Card.Title>
						<Card.Text>Pasteles para celebrar toda ocasión: cumpleaños, graduaciones, bodas...</Card.Text>
						<Link to="/cakes">
							<Button variant="warning">Compra ahora</Button>
						</Link>
					</Card.Body>
				</Card>
				<Card style={{ width: "10rem" }} className="col-lg-3 col-12">
					<Card.Img
						variant="top"
						className="imgsizingcategory"
						src="https://svglace.s3.eu-west-3.amazonaws.com/ULTIMA/food-photographer-jennifer-pallian-dcPNZeSY3yk-unsplash.jpg"
					/>
					<Card.Body>
						<Card.Title>SPREAD THE LOVE!</Card.Title>
						<Card.Text>Regalos diseñados para esparcir amor y felicidad.</Card.Text>

						<Link to="/gifts">
							<Button variant="warning">Compra ahora</Button>
						</Link>
					</Card.Body>
				</Card>
			</div>
			<div className="mt-5 bckgrndimg eventcontainer" id="events">
				<div className="row">
					<h2 className="mt-5 mx-auto text-center eventtitle">El Evento Perfecto</h2>
				</div>
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
						<Form.Control
							type="text"
							placeholder="Nombre"
							required
							value={formName}
							onChange={e => setFormName(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="email"
							placeholder="Email"
							required
							value={formEmail}
							onChange={e => setFormEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="text"
							placeholder="Teléfono"
							required
							value={formPhone}
							onChange={e => setFormPhone(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="text"
							placeholder="Tipo de evento"
							required
							value={formEvent}
							onChange={e => setFormEvent(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="text"
							placeholder="N° personas"
							required
							value={formPax}
							onChange={e => setFormPax(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="text"
							placeholder="Fecha de tu evento"
							required
							value={formDate}
							onChange={e => setFormDate(e.target.value)}
						/>
					</Form.Group>

					<Button variant="warning" type="Enviar" className="text-center mx-auto" onClick={handle_form}>
						Enviar
					</Button>
				</Form>
				<div className="air" />
			</div>
		</div>
	);
};
