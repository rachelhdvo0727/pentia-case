import React from "react";
import "./Banner.css";

function Banner(props) {
	return (
		<section id={props.id} className={props.className + " section"}>
			<div className='wrapper'>{props.children}</div>
		</section>
	);
}

export default Banner;
