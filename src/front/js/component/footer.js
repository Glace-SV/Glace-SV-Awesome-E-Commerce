import React, { Component } from "react";
import gLogo from "../../img/GLogo.png";
import WebFont from "webfontloader";

export const Footer = () => {
	let getYear = () => {
		let currentYear = new Date().getFullYear();
		return currentYear;
	};
	return (
		<div className="myFooter">
			<footer className="py-4">
				<div className="container-fluid ">
					<p className="m-0 text-center text-white">
						<div className="row mx-auto">
							<div className="glogo col-sm-3 col-12 w-50 mx-auto">
								<img src={gLogo} alt="GLogo" width="100px" />
							</div>
							<div className="knowus col-sm-3 col-12 w-50 mx-auto">
								<div className="footertitle">
									<span>Conócenos</span>
								</div>
								<div className="footertext">
									<p>
										Ser mujer y emprender:
										<br />
										Conoce nuestra historia.
									</p>
								</div>
							</div>
							<div className="shedule col-sm-3 col-12 w-50 mx-auto">
								<div className="footertitle">
									<span>Horarios</span>
								</div>
								<div className="footershedule">
									<p>
										Lunes a Viernes
										<br />
										9:00h - 18:00h
										<br />
										Sábados
										<br />
										9:00H - 15:00h
									</p>
								</div>
							</div>
							<div className="contact col-sm-3 col-12 w-50 mx-auto">
								<div className="footertitle">
									<span>Contacto</span>
								</div>
								<div className="footerawesome">
									<p>
										<a className="text-white" href="https://wa.me/50377362484">
											<i className="fab fa-whatsapp" />
										</a>{" "}
										&nbsp;
										<a className="text-white" href="https://www.instagram.com/glace_sv/">
											<i className="fab fa-instagram" />
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className="copyr mt-5">
							🍰 Glace SV &copy;
							<span> {getYear()} </span>
						</div>
						<div className="madeby">
							<br /> Made with ❤️ by ADG 🔥
						</div>
					</p>
				</div>
			</footer>
		</div>
	);
};
