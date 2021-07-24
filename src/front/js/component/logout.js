import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Logout() {
	const isLoggedIn = localStorage.getItem("jwt-token");

	if (isLoggedIn)
		return (
			<button as={Link} to="/logout">
				{" "}
				Cerrar Sesion{" "}
			</button>
		);
	else return <> </>;
}

export default Logout;
