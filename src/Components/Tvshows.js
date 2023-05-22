import React, { Fragment,useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/videos.css'
import { Container } from './Navbar'
import { useContext } from 'react'
import { AiFillPlayCircle, AiTwotoneHighlight } from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import TrailerMovies from '../Trailers/TrailerMovies'

function Tvshows() {
  const {toggle,input} = useContext(Container)
  const [tvData,setTvData] = useState([])
  const [trailer,setTrailer] = useState(true)
  const [title,setTitle] = useState('')
  const shown = input ? 'search':'discover'
  const url = `https://api.themoviedb.org/3/${shown}/tv`
  const Images = 'https://image.tmdb.org/t/p/w500'
  const tvShows = async() => {
    const data = await axios.get(url,{
      params: {
        api_key: 'bb0e6b77c063917be27fc07e08d62865',
        query: input
      }
    })
    setTvData(data.data.results);
    
  }
  useEffect(() => {
    setTimeout(() => {
      tvShows()
    },100)
  },[input])

  const TvShowTitle = (shows) => {
    setTitle(shows.name);
    setTrailer(false)
  }

  return (
    <div className={toggle ? 'mainBgColor':'secondaryBgColor'}>
        <div className='movies-container'>
    <Fragment>
      {
        tvData.map((shows) => {
          return(
            <Fragment>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer? "playIcon":"hide"}/>
              <img src={shows.poster_path? `${Images}${shows.poster_path}`:''} alt="" 
              onClick={() => TvShowTitle(shows)}
              />

              <h3 id={shows.name.length > 28 ? 'smaller-Text':''}  className = {toggle ? 'mainColor' : 'secondaryColor'}
               onClick={() => TvShowTitle(shows)}>
              {shows.name}
              </h3>
            </div>
            </Fragment>
          );
        })
      }
      {trailer ? console.log : <TrailerMovies title = {title} toggle = {toggle}/>}
      <AiOutlineClose id={trailer ? 'Nothing': 'Exit1'} className = {toggle ? 'DarkTheme' : 'LightThemeClose'} fontSize = {55}  color = {toggle ? '#fff' : '#ff206e'} cursor={'pointer'} onClick={() => setTrailer(!trailer)}/>
    </Fragment>
    </div>
    </div>
  )
}

export default Tvshows
