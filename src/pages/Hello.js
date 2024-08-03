import React from "react";
import "../App.css"
import { useLocation } from "react-router-dom";

const Hello = () => {
	const location = useLocation("Unknow");
	let name = location.state;
	if (name == null)
		name = "Unknow";
	else 
		name = name.from;

	return (
		<>
			<p>
				Hello, You are {name}
			</p>

		</>
	);
}

export default Hello;