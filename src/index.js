//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReacdDOM from "react-dom";

ReacdDOM.render(
	<div>
		<h1>My favourite foods</h1>
		<ul>
			<li>Pivo</li>
			<li>Cigarety</li>
			<li>Palenky</li>
		</ul>
	</div>,
	document.getElementById("root")
);
