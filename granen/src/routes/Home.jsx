import Movie from './component/Movie';
import { useState,useEffect } from 'react';
import { PropTypes } from 'prop-types';

const Home = () => {
  const [loading, setLoading] =useState(true);
  // 로딩 컨트롤
  const [movies, setMovies]=useState([]);
  // 데이터 컨트롤 
  const getMovies = async() =>{
    // usestate 에 data를 받아와서 패치로 전달 후 데이터 속성을 뿌려줌
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
  return (
    <>
      {loading ? <h1>Loading ...</h1> : movies.map((movie) => 
      <Movie 
        key={movie.id}
        coverImg={movie.medium_cover_image} 
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
      />
    )}
    </>
  )
}
Movie.PropTypes= {
  coverImg :PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Home