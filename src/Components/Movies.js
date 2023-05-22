import React,{Fragment, useContext, useEffect,useState} from 'react'
import axios from 'axios'
import {AiFillPlayCircle} from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import '../styles/videos.css'
import { Container } from './Navbar'
import TrailerMovies from '../Trailers/TrailerMovies'
function Movies() {
  const {toggle,input} = useContext(Container)
  const [trailer,setTrailer] = useState(true)
  const [title,setTitle] = useState('')
  const [moviesData,setMoviesData] = useState([])
  const Shown = input ? "search":"discover"
  const url = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const MovieCall = async() => {
    const data = await axios.get(url,{
      params: {
        api_key: 'bb0e6b77c063917be27fc07e08d62865',
        query: input
      }
    })
    setMoviesData(data.data.results);
    
  }

  useEffect(() => {
    setTimeout(() => {
      MovieCall()
    },100)
    
  },[input])

  const TvShowTitle = (movie) => {
    setTitle(movie.title);
    setTrailer(false)
  }

  return (
    <Fragment>
      <div className={toggle ? 'mainBgColor':'secondaryBgColor'}>
        <div className='movies-container'>
      {
        moviesData.map((movie) => {
          return(
            <Fragment >
              <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id='playIcon'/>
              <img src={movie.poster_path ? `${Images}${movie.poster_path}`: null} alt="" 
               onClick={() => TvShowTitle(movie)}
              />
              <h3 id={movie.title.length > 28 ? 'smaller-Text':''}
               onClick={() => TvShowTitle(movie) } className = {toggle ? 'mainColor' : 'secondaryColor'}
              >{movie.title}</h3>
              </div>

            </Fragment>
          )
        })
      }
      {trailer ? console.log : <TrailerMovies title = {title} toggle = {toggle}/>}
      <AiOutlineClose id={trailer ? 'Nothing': 'Exit1'} className = {toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize = {55} color = {toggle ? '#fff' : '#ff206e'} cursor={'pointer'} onClick={() => setTrailer(!trailer)}/>
      </div>
      </div>
    </Fragment>
  )
}

export default Movies
