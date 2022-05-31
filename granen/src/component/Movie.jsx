import { Link } from 'react-router-dom';
import styles from "../assets/css/Movie.module.css";
const Movie = ({id, coverImg, title, year,summary,genres}) => {
  // props는 부모로부터 자식으로 전달해준다->> 이것만됨 ㅇㅇ자식-->부모 x
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
      <h3 className={styles.movie__year}>{year}</h3>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((e) => <li key={e}>{e}</li>)}
      </ul>
    </div>
  )
}

export default Movie