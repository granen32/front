import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() =>{
    const getMovie = async() =>{
      const json = await(
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        // 영화정보 id를 가져와서 보여줌
    };
    getMovie();
  }, [id])
  return (
    <div key={movie.id}>
      <img src={movie.large_cover_image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description_intro}</p>
    </div>
  )
}


export default Detail;