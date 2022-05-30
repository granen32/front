import React from 'react'

const Movie = ({coverImg, title,summary,genres}) => {
  // props는 부모로부터 자식으로 전달해준다->> 이것만됨 ㅇㅇ자식-->부모 x
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((e) => <li key={e}>{e}</li>)}
      </ul>

    </div>
  )
}

export default Movie