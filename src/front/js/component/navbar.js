import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import AddToCart from "../component/addtocart";
import Logout from "./logout";

export const NavBarTwo = () => {
	return (
		<Navbar expand="sm" bg="dark" variant="dark">
			<Navbar.Brand as={Link} to="/">
				<img
					className="navimage"
					src="https://svglace.s3.eu-west-3.amazonaws.com/GLACE+SV+E-COMMERCE/glace+nuevo.jpg"
				/>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}>
					<Nav.Link as={Link} to="/login" className="text-warning">
						ACCEDE
					</Nav.Link>

					<Nav.Link as={Link} to="/#categories" className="text-warning">
						PRODUCTOS
					</Nav.Link>
					<Nav.Link as={Link} to="/#events" className="text-warning">
						EVENTOS
					</Nav.Link>

					<Nav.Link as={Link} to="/carrito" className="text-warning">
						VER CARRITO

					</Nav.Link>
				</Nav>
				<div>
					<AddToCart />
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};
