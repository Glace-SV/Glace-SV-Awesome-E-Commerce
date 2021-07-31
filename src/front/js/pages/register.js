import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/register.scss";
import { Context } from "../store/appContext";
import { Button, Form, Tab } from "react-bootstrap";

const Register = () => {
	const { actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setaddress] = useState("");
	const [city, setCity] = useState("");
	const [phone, setPhone] = useState("");
	const handle_acceder = () => {
		actions.register(email, password, username, name, lastName, address, city, phone);
		window.location.replace("/login");
		alert("Ya estás registrado, por favor haz click en el botón 'Accede' para logearte");
	};

	return (
		<div className="container-fluid">
			<div className="row rowdesign2">
				<Tab.Content className="col-lg-12 col-12 mx-auto">
					<div className="formcolor">
						<Form.Group className="mb-3" controlId="formBasicEmailRegister">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="Email"
								required
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPasswordRegister">
							<Form.Label>Contraseña</Form.Label>
							<Form.Control
								type="password"
								placeholder="Contraseña"
								required
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicUsername">
							<Form.Label>Usuario</Form.Label>
							<Form.Control
								type="username"
								placeholder="Nombre de Usuario"
								required
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicName">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="name"
								placeholder="Nombre"
								required
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicLastname">
							<Form.Label>Apellidos</Form.Label>
							<Form.Control
								type="last_name"
								placeholder="Apellido"
								required
								value={lastName}
								onChange={e => setLastName(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicaddress">
							<Form.Label>Dirección</Form.Label>
							<Form.Control
								type="address"
								placeholder="Dirección"
								required
								value={address}
								onChange={e => setaddress(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCity">
							<Form.Label>Ciudad</Form.Label>
							<Form.Control
								type="city"
								placeholder="Ciudad"
								required
								value={city}
								onChange={e => setCity(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicPhone">
							<Form.Label>Teléfono</Form.Label>
							<Form.Control
								type="phone"
								placeholder="Teléfono"
								required
								value={phone}
								onChange={e => setPhone(e.target.value)}
							/>
						</Form.Group>

						<Button variant="warning" onClick={handle_acceder}>
							Registrarme
						</Button>
					</div>
				</Tab.Content>
			</div>
			<p className="mt-3 col-12">
				Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web,
				gestionar el acceso a tu cuenta y otros propósitos.
			</p>
		</div>
	);
};
export default Register;
