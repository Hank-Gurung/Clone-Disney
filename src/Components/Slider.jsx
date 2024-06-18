import React, {useEffect, useRef, useState} from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'
const IMAGE_URL = 'https://image.tmdb.org/t/p/original'
const screenWidth = window.innerWidth

function Slider() {
    const [movieList,setMovieList] = useState([])
    useEffect(()=>{
        getTrendingVideos()
    },[])
    const elementRef = useRef()
    const  sliderRight=(element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const  sliderLeft=(element)=>{
        element.scrollLeft-=screenWidth-110
    }
    const getTrendingVideos=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            
            setMovieList(resp.data.results)
        })
    }
  return (
    <>
        <div className=''>

        
            <div >
                <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[212px] cursor-pointer' 
                onClick={()=>sliderLeft(elementRef.current)}/>
                <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[212px] cursor-pointer right-0'
                onClick={()=>sliderRight(elementRef.current)}/>
            </div>
            <div className='flex overflow-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item,index)=> (
                    <img src={IMAGE_URL+item.backdrop_path} 
                    className='object-cover min-w-full md:h-[450px]  object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in ' />
                    
                ))}
                
            </div>
        </div>
      
        
    </>
  )
}

export default Slider