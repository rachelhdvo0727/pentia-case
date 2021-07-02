import React from "react";
import "./App.css";

import Navigation from "./components/navigation/Navigation";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";

function App() {
	return (
		<div className='app'>
			<Navigation />
			<main>
				<header>
					<span className='page-title'>Lorem Ipsum</span>
				</header>
				<Section1></Section1>
				<Section2></Section2>
				<Section3></Section3>
			</main>
		</div>
	);
}

export default App;
