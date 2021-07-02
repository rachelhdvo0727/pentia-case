import React from "react";
import "./Section1.css";

import Banner from "../banner/Banner";
import { ReactComponent as DigitalImg } from "../../assets/zeppeliner.svg";

export default function Section1() {
	return (
		<Banner className='section1'>
			<div className='svg-container'>
				<DigitalImg className='section-main-img'></DigitalImg>
			</div>
			<h1>Digital transformation</h1>
			<h3>Rådgivning. Implementering. Resultater</h3>
			<div className='contents'>
				<p>
					Hvordan bliver din virksomhed en digital vinder i fremtiden? Hvilke
					tiltag skal der til strategisk og taktisk for at dreje forretningen i
					den rigtige retning? Hvilke elementer indeholder en succesfuld digital
					transformation? Vi har svarene. Pentia kan hjælpe dig på hele rejsen
					fra strategisk rådgivning til implementering.
				</p>
			</div>

			<div className='start-journey'>
				<a href='#' className='start-journey'>
					Start din rejse her
				</a>
				<br />
				<div className='dots'>
					<div className='dot dot-1'></div>
					<div className='dot dot-2'></div>
					<div className='dot dot-3'></div>
				</div>
			</div>
		</Banner>
	);
}
