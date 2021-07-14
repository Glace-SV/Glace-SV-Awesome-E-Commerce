import React, { Component, useState } from "react";
import WebFont from "webfontloader";
import { animateScroll as scroll } from "react-scroll";

export const Fab = () => {
	const [btnScrollToTop, setBtnScrollToTop] = useState("");
	//Get the button:
	let mybutton = document.querySelector("#fabToTop");

	// When the user scrolls down 80px from the top of the document, show the button
	window.onscroll = function() {
		scrollFunction();
	};

	const scrollFunction = () => {
		if (document.body.scrollToTop > 80 || document.documentElement.scrollToTop > 80) {
			setBtnScrollToTop("");
		} else {
			setBtnScrollToTop("d-none");
		}
	};

	// When the user clicks on the button, scroll to the top of the document
	function scrollToTop() {
		scroll.scrollToTop();
	}

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<div className="fab">
				<div className="active" smooth={true} offset={50} duration={500} delay={1000}>
					<button
						id="fabToTop"
						onClick={toggleHome}
						className={"scrollfab fab fab-energized " + btnScrollToTop + scrollToTop}>
						<i className="fa fa-home" />
					</button>
				</div>
			</div>
		</>
	);
};
