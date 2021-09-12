import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogOut() {
	const { actions } = useContext(Context);
	const isLogedIn = localStorage.getItem("jwt-token");
	const history = useHistory();
	const exit = () => {
		actions.logout("jwt-token");
		setTimeout(function() {
			window.location.replace("/login");
		}, 4000);
		toast.warn("Has cerrado tu sesión. Esperamos verte pronto!", {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	if (isLogedIn) {
		return (
			<Button className="ml-2" variant="warning" onClick={exit}>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<i className="fas fa-sign-out-alt" />
				Cerrar Sesion
			</Button>
		);
	} else {
		return <> </>;
	}
}

export default LogOut;
