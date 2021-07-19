import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/register.scss";
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

const Register = () => {
	return (
		<div className="container-fluid">
			<div className="row rowdesign2">
				<Tab.Content className="col-lg-6 col-12 mx-auto">
					<Form className="formcolor">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Email" required />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control type="password" placeholder="Contraseña" required />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Username</Form.Label>
							<Form.Control type="username" placeholder="Username" required />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Nombre</Form.Label>
							<Form.Control type="name" placeholder="Nombre" required />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Apellidos</Form.Label>
							<Form.Control type="last_name" placeholder="Apellido" required />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Dirección</Form.Label>
							<Form.Control type="adress" placeholder="Dirección" required />
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Ciudad</Form.Label>
							<Form.Control type="city" placeholder="Ciudad" required />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Teléfono</Form.Label>
							<Form.Control type="phone" placeholder="Teléfono" required />
						</Form.Group>
						<Button variant="warning" type="submit">
							Acceder
						</Button>
					</Form>
				</Tab.Content>
				<p>
					Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web,
					gestionar el acceso a tu cuenta y otros propósitos.
				</p>
			</div>
		</div>
	);
};
export default Register;
