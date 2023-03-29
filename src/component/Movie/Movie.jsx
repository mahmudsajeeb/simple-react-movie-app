import React from 'react'

export default function Movie({movie,handleWatch}) {
  return (
    <div>
         <div className='card m-auto g-3 text-center w-70'>
        <img className='w-50 p-3 m-auto' src={movie.poster} alt="" />
        <div className="movie-info">
        <h1>{movie.movieName}</h1>
        <p>{movie.description}</p>
        </div>
        <div className="d-flex justify-content-around">
          <div><h4>Watch Time: {movie.watchTime} </h4></div>
          <div><h4>Rating: {movie.imdbRating} </h4></div>
        </div>
        <button onClick={()=>handleWatch(movie.watchTime)} className='btn btn-primary w-50 m-auto'>Book Now</button>
    </div>
    </div>
  )
}
