import { Link } from 'react-router-dom';
import { MovieType } from "../types"
import styles from "../assets/scss/Movie.module.scss";


export const Movie = ({id, medium_cover_image, title, year,summary,genres} : MovieType) => {
  // props는 부모로부터 자식으로 전달해준다->> 이것만됨 ㅇㅇ자식-->부모 ß
  return (
    <div className={styles.movie}>
      <img src={medium_cover_image} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 120)}...` :  summary}</p>
      <ul>
        {genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  )
}
