//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReacdDOM from "react-dom";

const img = "https://picsum.photos/200";
ReacdDOM.render(
	<div>
		<h1 className="heading" contentEditable="true" spellCheck="false">
			My favourite foods
		</h1>
		{/* 		<ul>
			<li>Pivos</li>
			<li>Cigarety</li>
			<li>Palenky</li>
		</ul> */}
		<div>
			<img  className="image" src={img + "?grayscale"}></img>
			<img  className="image" src={img + "?grayscale"}></img>
			<img  className="image" src={img + "?grayscale"}></img>
		</div>
	</div>,
	document.getElementById("root")
);
