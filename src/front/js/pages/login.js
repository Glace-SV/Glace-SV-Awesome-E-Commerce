import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useHistory, useParams } from "react-router-dom";
import Register from "./register";
import "../../styles/login.scss";
import { Context } from "../store/appContext";
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
	Check,
	Tab,
	Row,
	Col,
	Nav
} from "react-bootstrap";

export const Login = () => {
	const history = useHistory();
	const { actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function login() {
		fetch("https://3001-peach-puffin-0ko6bavx.ws-eu10.gitpod.io/api/login"),
			{
				method: "POST",
				Headers: {
					"content-type": "aplication/json"
				},
				body: JSON.stringify({
					email: email,
					password: password
				})
			}
				.then(response => response.json())
				.then(responseJson => {
					console.log(responseJson);
					actions.setToken(responseJson.token);
					history.push("/register");
				});
	}

	return (
		<div className="loginbckgrndimg">
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<div className="row rowdesign1">
					<Nav variant="pills" className="mt-3 mb-3 mx-auto">
						<Nav.Item className="col-lg-6 col-6 mx-auto text-center">
							<Nav.Link eventKey="first" variant="warning">
								Accede
							</Nav.Link>
						</Nav.Item>
						<Nav.Item className="col-lg-6 col-6 mx-auto text-center">
							<Nav.Link eventKey="second">Registrate</Nav.Link>
						</Nav.Item>
					</Nav>
				</div>
				<div className="row rowdesign2">
					<Tab.Content className="col-lg-6 col-12 mx-auto">
						<Tab.Pane eventKey="first">
							<Form className="formcolor">
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" placeholder="Email" required />
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Contraseña</Form.Label>
									<Form.Control type="password" placeholder="Contraseña" required />
								</Form.Group>
								<Button variant="warning" type="submit">
									Acceder
								</Button>
							</Form>
						</Tab.Pane>
						<Tab.Pane eventKey="second">
							<Form className="formcolor">
								<Register />
							</Form>
						</Tab.Pane>
					</Tab.Content>
				</div>
			</Tab.Container>
		</div>
	);
};
