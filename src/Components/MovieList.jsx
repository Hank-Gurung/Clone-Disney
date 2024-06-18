import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import HrMovieList from './HrMovieList'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
const screenWidth = window.innerWidth

function MovieList(props) {

    const [movieList,setMovieList] = useState([])

    useEffect(()=>{
        getMovieByGenereId()
    },[])
    const getMovieByGenereId=()=>{
        GlobalApi.getMovieByGenreId(props.genereId).then(resp=>{
            setMovieList(resp.data.results)
           
        })
    }

    const elementRef = useRef()
    const  sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const  sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }

  return (
    <>
        <div >
                <HiChevronLeft className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer left-0
                ${props.index_%3==0?'mt-[80px]':'mt-[150px]'}` }
                onClick={()=>sliderLeft(elementRef.current)}/>
                <HiChevronRight className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer right-0  
                ${props.index_%3==0?'mt-[80px]':'mt-[150px]'}`}
                onClick={()=>sliderRight(elementRef.current)}/>
            
            <div className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth 
            pt-4 px-3 pb-4' ref={elementRef}>
                {movieList.map((item,index)=>(
                    <>
                       {props.index_%3==0 ? <HrMovieList movie={item}/> : 
                       <MovieCard movie={item}/>}
                    </>
                ))}
                
            </div>
        </div>
    </>
  )
}

export default MovieList