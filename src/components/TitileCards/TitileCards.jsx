import React, { useEffect, useState } from "react";
import "./TitileCards.css";
import carts_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

function TitileCards({ title, category }) {
  const [apiData,setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTJhNDQyMmUwYjQ2ZmY4NDI1NjdlNDRkYjQyZjI2ZCIsInN1YiI6IjY2Njk2MTE4MTExODdmOWQxYjhiOTEyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T-CnXuWHQ01ryPVhqdoRJsrayHckT-FzB1wmgzo9a0k",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));
  },[]);
  return (
    <div className="titile-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TitileCards;
