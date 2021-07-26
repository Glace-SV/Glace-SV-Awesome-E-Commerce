import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
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
	Nav,
	Modal
} from "react-bootstrap";

function ModalLogin() {
	const redirect = () => {
		history.push("/");
	};

	return (
		<Modal.Dialog>
			<Modal.Header closeButton>
				<Modal.Title> ¡¡¡¡Ya puedes comprar dulces!!!! </Modal.Title>
			</Modal.Header>
			<Modal.Footer>
				<Button variant="warning" onClick={redirect}>
					Close
				</Button>
			</Modal.Footer>
		</Modal.Dialog>
	);
}

export default ModalLogin;
