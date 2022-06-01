import { useState,useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Movie from '../component/Movie';
import styles from "../assets/css/Home.module.css";
import  axios  from 'axios';
const Home = () => {
  const [loading, setLoading] =useState(true);
  // 로딩 컨트롤
  const [movies, setMovies]=useState([]);
  // 데이터 컨트롤 
  const getMovies = async() =>{
    const res = await axios("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    setMovies(res.data.data.movies);
    console.log(res.data.data.movies);
    setLoading(false);
    // 패치 할당한 걸 await 후 json 할당
    // usestate 에 data를 받아와서 패치로 전달 후 데이터 속성을 뿌려줌
  }
  useEffect(() =>{
    getMovies();
    // 겟 무비 실행
  }, []);
  // 디펜더시는 실행 없음
  return (
    <>
    <div className={styles.container}>
    {loading ? 
    (
      <header className={styles.loader}>
        <span>Loading ...</span>
      </header>
    )
     : 
     (
       <section className={styles.movies}>
         {
           movies.map((movie) =>(
            <Movie 
              id={movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image} 
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
           ))}
       </section>
     )}
    </div>
    </>
  )
}
Movie.PropTypes= {
  id: PropTypes.number.isRequired,
  coverImg :PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
}

export default Home;