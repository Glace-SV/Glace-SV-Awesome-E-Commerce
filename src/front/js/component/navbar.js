import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export const NavBarTwo = () => {
	return (
		<Navbar expand="sm" bg="dark" variant="dark">
			<Navbar.Brand href="#">GLACE SV LOGO</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<i className="fas fa-grin fa-fw me-3" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
					<Nav.Link href="#action1">ACCEDE</Nav.Link>
					<Nav.Link href="#action2">PRODUCTOS</Nav.Link>
				</Nav>
				<Form className="d-flex">
					<Button variant="flat">
						<i className="fas fa-shopping-basket" />
					</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};
