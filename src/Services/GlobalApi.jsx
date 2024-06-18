import axios from "axios"

const movieBaseUrl = "https://api.themoviedb.org/3/"
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key='
const api_key = '3431e24b6eccb7aa6b0eef4454658489'

const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key)

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+api_key+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}