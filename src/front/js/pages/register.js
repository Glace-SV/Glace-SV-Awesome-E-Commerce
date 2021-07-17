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
				<Row>
					<Col>
						<form>
							<label htmlFor="name"> Nombre:</label>
							<input type="text" id="name" name="name" />
						</form>
					</Col>
					<Col>
						<form>
							<label htmlFor="last_name">Apellido:</label>
							<input type="text" id="last_name" name="last_name" />
						</form>
					</Col>
				</Row>
				<Row>
					<Col>
						<form>
							<label htmlFor="adress">Dirección:</label>
							<input type="text" id="adress" name="adress" />
						</form>
					</Col>
					<Col>
						<form>
							<label htmlFor="city">Ciudad:</label>
							<input type="text" id="city" name="city" />
						</form>
					</Col>
				</Row>
				<Row>
					<Col>
						<Col>
							<form>
								<label htmlFor="Phone">Teléfono:</label>
								<input type="text" id="phone" name="phone" />
							</form>
						</Col>
						<form>
							<label htmlFor="username"> Usuario:</label>
							<input type="text" id="username" name="username" />
						</form>
					</Col>
				</Row>
				<row>
					<Col>
						<form>
							<label htmlFor="password">Contraseña:</label>
							<input type="text" id="password" name="password" />
						</form>
					</Col>
					<Col>
						<form>
							<label htmlFor="email">Email:</label>
							<input type="text" id="email" name="email" />
						</form>
					</Col>
				</row>
				<p>
					Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web,
					gestionar el acceso a tu cuenta y otros propósitos.
				</p>
				<Button variant="warning">Registrate</Button>{" "}
			</div>
		</div>
	);
};
export default Register;
