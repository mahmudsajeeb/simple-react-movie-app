import React, { useEffect, useState } from 'react'
import Movie from '../Movie/Movie'

export default function Home({handleWatch}) {
  const [movie,setMovie] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setMovie(data))
  },[])
  return (
   <>
    {
      movie.map(movie =><Movie handleWatch={handleWatch} movie={movie} />)
    }
   </>
  )
}
