import React from 'react'
const IMAGE_URL = 'https://image.tmdb.org/t/p/original'

function HrMovieList(props) {
    const movie = props.movie
  return (
    <section className='hover:scale-110 transition-all duration-150 ease-in'>
        <img src={IMAGE_URL+movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400 cursor-pointer hover:scale-110 transition-all duration-150 ease-in' />
        <h2 className='w-[110px] md:w-[260px] text-white mt-2'>
            {movie.title}</h2>
    </section>
  )
}

export default HrMovieList