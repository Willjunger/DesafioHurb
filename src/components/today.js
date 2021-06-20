import React, { useState } from "react";

import Sun from "../assets/meteocons-icons/SVG/2.svg";

function Today({ getTest }) {
	// const [textToday, setTextToday] = useState("");

	return (
		<section onClick={getTest} className="today">
			<div className="today__box">
				<div>
					<img className="sun" src={Sun} alt="sun" />
				</div>

				<div className="today__box--data">
					<div className="temperature">
						<span>HOJE</span>
						<span>32ºC</span>
					</div>
					<div className="climate">
						<span>Ensolarado</span>
						<span>Vento:NO 6.4km/h</span>
						<span>Humidade: 78%</span>
						<span>Pressão: 1003hPA</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Today;
