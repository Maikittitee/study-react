import React, { useEffect, useState } from "react";
import SearchIcon from '../search.svg'
import MovieCard from "../MovieCard";
import { Link } from "react-router-dom";
import "../App.css"

const API_URL = "http://www.omdbapi.com?apikey=" + process.env.REACT_APP_API_KEY;

const Home = () => {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const searchMovie = async (title) => {
		const response = await fetch(`${API_URL}&s=${title}`);
		const data = await response.json();
		console.log(API_URL);
		setMovies(data.Search);
	}

	useEffect(() =>{
		searchMovie("Spider-man");
	}, []);
	return (
		<>
		<div className="app">
			<h1>Hello, Movie</h1>
			<div className="search">
				<input
					placeholder="Search for movies"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<img 
					src={SearchIcon} 
					alt="Search" 
					onClick={() => searchMovie(searchTerm)}
				/>
			</div>

			{
				movies?.length > 0 ? (
					<div className="container">
						{
							movies.map((movie) => (
								<MovieCard movie={movie}/>
							))
						}
					</div>
				) : (
					<div className="empty">
						<h2>No Movies Found</h2>
					</div>
				)
			}

		</div>
		<footer>
			<Link to="/hello" state={{ name: "Mai" }}>Hello</Link>
		</footer>
		</>

	);
}

export default Home;