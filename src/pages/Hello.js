import React from "react";
import "../App.css"
import { useLocation } from "react-router-dom";

const Hello = () => {
	const location = useLocation();
	return (
		<>	
		{
			(location.state) ? (
				<p>
					Hello, You are {location.state.name}
				</p>
			) : (
				<p> Hello , Anonymous!!</p>
			)
		}

		</>
	);
}

export default Hello;