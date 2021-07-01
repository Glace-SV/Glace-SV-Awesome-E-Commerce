import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export const NavBarTwo = () => {
	return (
		<Navbar expand="sm" bg="dark" variant="dark" fixed="top">
			<Navbar.Brand href="#">
				<img
					className="navimage"
					src="https://svglace.s3.eu-west-3.amazonaws.com/GLACE+SV+E-COMMERCE/Logo+y+brief+de+Glac%C3%A9/image-bb448ea9-45fe-4700-9234-db0c00178c79.jpg"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarScroll" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
					<Nav.Link href="#action1" className="text-warning">
						ACCEDE
					</Nav.Link>
					<Nav.Link href="#action2" className="text-warning">
						PRODUCTOS
					</Nav.Link>
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
