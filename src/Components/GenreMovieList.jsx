import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'


function GenreMovieList() {
    const genereList = GenresList.genere
  return (
    <>
        <div>
            {genereList.map((item,index)=> index < 5 && (
                <>
                    <div className='p-8 px-8 md:px-16'>
                        <h2 className='text-[20px] font-bold text-white' >
                            {item.name} </h2>

                        <MovieList genereId={item.id} index_={index}/>
                        
                    
                    </div>
                </>
            ))}
        </div>
    </>
  )
}

export default GenreMovieList