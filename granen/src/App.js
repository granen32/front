import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [loading, setLoading] =useState(true);
  const [movies, setMovies]=useState([]);
  const getMovies = async() =>{
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    // 패치 할당한 걸 await 후 json 할당
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() =>{
    getMovies();
    // 겟 무비 실행
  }, []);
  // 디펜더시는 실행 없음
  console.log(movies);
  return (
    <>
    {loading ? <h1>Loading ...</h1> : movies.map((movie) => 
    <div key={movie.id}>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((e) => <li key={e}>{e}</li>)}
      </ul>

    </div>
    )}
    </>
  );
}

export default App;
