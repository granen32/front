import { useState,useEffect } from 'react';
import {Movie} from '../component/Movie';
import { MovieType } from "../types" 
import styles from "../assets/scss/Home.module.scss";
import  axios  from 'axios';
const Home = () => {
  const [loading, setLoading] =useState(true);
  // 로딩 컨트롤
  const [movies, setMovies]=useState<MovieType[]>([]);
  // 데이터 컨트롤 
  const getMovies = async() =>{
    const res = await axios("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
    setMovies(res.data.data.movies);
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
              coverImg={movie.coverImg} 
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
            />
           ))}
       </section>
     )}
    </div>
    </>
  )
}
export default Home;