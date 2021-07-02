import React from "react";
import "./Section2.css";

import Banner from "../banner/Banner";
import { ReactComponent as StrategyImg } from "../../assets/illustration1.svg";
import { ReactComponent as DigTransImg } from "../../assets/illustration2.svg";

export default function Section2(props) {
	return (
		<Banner className='section2'>
			{/* Headings */}
			<h2>Vi kan hjælpe dig med digital transformation på to fronter</h2>
			{/* Contents */}
			<div className='contents'>
				<article className='element'>
					<div className='svg-container'>
						<StrategyImg className='elm-svg'></StrategyImg>
					</div>
					<h3>Strategisk rådgiving om digital transformation</h3>
					<p>
						Udnytter din virksomhed sit digitale potentiale? Hvilke
						forretningsmuligheder er der, og hvad betyder det på et strategisk
						plan?
					</p>
				</article>
				<article className='element'>
					<div className='svg-container'>
						<DigTransImg className='elm-svg'></DigTransImg>
					</div>
					<h3>Eksekvering af digital transformation</h3>
					<p>
						I ved, hvad I vil, men I har brug for hjælp til at rulle strategien
						ud i forhold til organisationen og det digitale fundament bl.a. på
						Sitecore. Det handler om mennesker og resultater.
					</p>
				</article>
			</div>
		</Banner>
	);
}
