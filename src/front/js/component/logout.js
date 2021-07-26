import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

function LogOut() {
	const { actions } = useContext(Context);
	const isLoggedIn = localStorage.getItem("jwt-token");

	if (isLoggedIn)
		return (
			<div>
				<button as={Link} to="/logout" className="text-warning">
					{actions.logout("jwt-token")}
					Cerrar Sesion
				</button>
			</div>
		);
	else return <> </>;
}

export default LogOut;
