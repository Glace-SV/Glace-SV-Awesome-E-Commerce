//import rendergifts???

import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Carousel, Card, Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
	// const { store, actions } = useContext(Context);
	// const [formName, setFormName] = useState();
	// const [formEmail, setFormEmail] = useState();
	// const [formPhone, setFormPhone] = useState();
	// const [formEvent, setFormEvent] = useState();
	// const [formPax, setFormPax] = useState();
	// const [formDate, setFormDate] = useState();
	// const handle_form = () => {
	// 	actions.addForm(formName, formEmail, formPhone, formEvent, formPax, formDate);
	// 	alert("formulario enviado. Garcias por su confianza");
	// };
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_71kh9c1", "template_asj42kq", e.target, "user_1BqDn49vev8kqzjK7Nldu").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
		// alert("formulario enviado. Garcias por su confianza");
		toast.warn("Tu formulario se ha enviado correctamente. Te contactaremos dentro de las próximas 24 horas.", {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
		e.target.reset();
	}

	return (
		<div>
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
					Nuestras tartas personalizadas son originales y deliciosas a la misma vez. Utilizamos ingredientes
					100% naturales. En nuestro amplio catálogo de pasteles decorados puedes encontrar tartas para toda
					clase de ocasiones. Pasteles para bodas, cumpleaños infantiles, bautizos, primera comunión, y
					empresas. Tratamos endulzar los días para que puedas olvidar, por un momento, el estrés de la vida
					cotidiana. Un dulce, una sonrisa con los mejores pasteles personalizados en El Salvador.
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
				<Form className="col-lg-6 col-10 mx-auto" onSubmit={sendEmail}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Control
							type="text"
							placeholder="Nombre"
							name="name"
							required
							// value={formName}
							// onChange={e => setFormName(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="email"
							placeholder="Email"
							name="email"
							required

							// value={formEmail}
							// onChange={e => setFormEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="text"
							placeholder="Teléfono"
							name="phone"
							required

							// value={formPhone}
							// onChange={e => setFormPhone(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="text"
							placeholder="Tipo de evento"
							name="event"
							required

							// value={formEvent}
							// onChange={e => setFormEvent(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="text"
							placeholder="N° personas"
							name="pax"
							required

							// value={formPax}
							// onChange={e => setFormPax(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Control
							type="text"
							placeholder="Fecha de tu evento"
							name="date"
							required

							// value={formDate}
							// onChange={e => setFormDate(e.target.value)}
						/>
					</Form.Group>

					<Button variant="warning" type="Enviar" className="text-center mx-auto" onSubmit={sendEmail}>
						Enviar
					</Button>
				</Form>
				<div className="air" />
			</div>
		</div>
	);
};
