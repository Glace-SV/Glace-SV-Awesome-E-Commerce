import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import LogOut from "./logout";
import AddToCart from "../component/addtocart";
export const NavBarTwo = () => {
	let history = useHistory();
	function scrollToDiv1() {
		history.push("/");
		setTimeout(function() {
			const elmnt = document.getElementById("categories");
			elmnt.scrollIntoView({ block: "start" });
		}, 10);
	}
	function scrollToDiv2() {
		history.push("/");
		setTimeout(function() {
			const elmnt = document.getElementById("events");
			elmnt.scrollIntoView({ block: "start" });
		}, 10);
	}

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
				<Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: "300	px" }}>
					<Nav.Link as={Link} to="/login" className="text-warning">
						ACCEDE
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/#categories"
						className="text-warning"
						onClick={() => {
							scrollToDiv1();
						}}>
						PRODUCTOS
					</Nav.Link>
					<Nav.Link
						as={Link}
						to="/#events"
						className="text-warning"
						onClick={() => {
							scrollToDiv2();
						}}>
						EVENTOS
					</Nav.Link>
					<Nav.Link as={Link} to="/carrito" className="text-warning">
						VER CARRITO
					</Nav.Link>
					<Nav.Link>
						<AddToCart />
					</Nav.Link>
				</Nav>
				<div>
					<LogOut />
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};
