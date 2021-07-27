import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";

function LogOut() {
	const { actions } = useContext(Context);
	const isLogedIn = localStorage.getItem("jwt-token");
	const history = useHistory();
	const exit = () => {
		actions.logout("jwt-token");
		history.push("/login");
		window.location.replace("/login");
		alert("Has cerrado tu sesión esperamos verte pronto");
	};

	if (isLogedIn) {
		return (
			<Button className="ml-2" variant="warning" onClick={exit}>
				<i className="fas fa-sign-out-alt" />
				Cerrar Sesion
			</Button>
		);
	}
	// else if (isLogedIn == false){

	// }
	else {
		return <> </>;
	}
}

export default LogOut;
