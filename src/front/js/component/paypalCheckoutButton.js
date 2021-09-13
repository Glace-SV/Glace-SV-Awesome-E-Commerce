import React from "react";
import ReactDOM from "react-dom";
import paypal from "paypal-checkout";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaypalCheckoutButton = ({ order }) => {
	const paypalConf = {
		currency: "USD",
		env: process.env.PAYPAL_ENV,
		client: {
			sandbox: process.env.PAYPAL_KEY,
			production: process.env.PAYPAL_KEY
		},
		style: {
			label: "pay", // checkout | credit | pay | buynow | paypal | installment (Note: The installment feature is available only in these locales: en_MX, es_MX, en_BR, pt_BR)
			size: "responsive", // small | medium | large | responsive
			shape: "pill", // pill | rect
			color: "gold", // gold | blue | silver | black
			tagline: "false" // false | true
		}
	};

	const PayPalButton = paypal.Button.driver("react", { React, ReactDOM });

	const payment = (data, actions) => {
		const payment = {
			transactions: [
				{
					amount: {
						total: order.total,
						currency: paypalConf.currency
					},
					description: "Compra en Glacé SV",
					custom: order.customer || "",
					item_list: {
						items: order.items
					}
				}
			],
			note_to_payer: "Contáctanos para cualquier aclaración sobre tu compra. +503 77 36 24 84"
		};

		return actions.payment.create({
			payment
		});
	};

	const onAuthorize = (data, actions) => {
		return actions.payment
			.execute()
			.then(response => {
				setTimeout(function() {
					window.location.replace("/");
				}, 4000);
				toast.warn("Tu pago se ha realizado correctamente, gracias por tu compra.", {
					position: "top-right",
					autoClose: 4000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				});
			})
			.catch(error => {
				toast.warn("Ocurrió un error en el proceso de pago, vuelva a intentarlo.", {
					position: "top-right",
					autoClose: 4000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				});
			});
	};

	const onError = error => {
		toast.warn("El pago no fue realizado, vuelva a intentarlo.", {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	const onCancel = (data, actions) => {
		toast.warn("El pago no fue realizado, el usuario canceló el proceso.", {
			position: "top-right",
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	return (
		<PayPalButton
			env={paypalConf.env}
			client={paypalConf.client}
			payment={(data, actions) => payment(data, actions)}
			onAuthorize={(data, actions) => onAuthorize(data, actions)}
			onCancel={(data, actions) => onCancel(data, actions)}
			onError={error => onError(error)}
			style={paypalConf.style}
			commit
			locale="es_SV"
		/>
	);
};

PaypalCheckoutButton.propTypes = {
	order: PropTypes.object
};

export default PaypalCheckoutButton;
