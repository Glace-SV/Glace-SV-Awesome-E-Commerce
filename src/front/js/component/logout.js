import React, { useContext } from "react";
import { Link } from "react-router-dom";

function Logout() {
	const { actions } = useContext(Context);
	const isLoggedIn = actions.login;

	if (isLoggedIn === True) return <button as="/logout"> Cerrar Sesion </button>;
	else return "/";
}

export default Logout;
