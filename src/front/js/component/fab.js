import React, { Component, useState } from "react";
import WebFont from "webfontloader";

export const Fab = () => {
	const [btnScrollToTop, setBtnScrollToTop] = useState("");
	//Get the button:
	let mybutton = document.querySelector("#fabToTop");

	// When the user scrolls down 80px from the top of the document, show the button
	window.onscroll = function() {
		scrollFunction();
	};

	const scrollFunction = () => {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			setBtnScrollToTop("");
		} else {
			setBtnScrollToTop("d-none");
		}
	};

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	return (
		<>
			<div className="fab">
				<div className="active">
					<button
						id="fabToTop"
						onClick={() => topFunction()}
						className={"scrollfab fab fab-energized " + btnScrollToTop}>
						<i className="fa fa-home" />
					</button>
				</div>
			</div>
		</>
	);
};
