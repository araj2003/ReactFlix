import axios from 'axios'
import React, { Fragment, useContext, useEffect,useState } from 'react'
import { Container } from './Navbar'
import { AiFillPlayCircle } from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import '../styles/videos.css'
import TrailerMovies from '../Trailers/TrailerMovies'
function Trends() {
  const [trendsData,setTrendsData] = useState([])
  const [title,setTitle] = useState('')
  const [trailer,setTrailer] = useState(true)
  const url = 'https://api.themoviedb.org/3'
  const trend = '/trending/all/week'
  const Images = 'https://image.tmdb.org/t/p/w500/'
  const {toggle,input} = useContext(Container)
  const trends = async() => {
    const data = await axios.get(`${url}${trend}`,{
      params: {
        api_key: 'bb0e6b77c063917be27fc07e08d62865'
      }
    })
    setTrendsData(data.data.results)
    // console.log(data.data.results)
  }

 

  useEffect(() => {
    setTimeout(() => {
      
      trends()
    }, 100);
  },[])

  const trendShowTitle = (shows) => {
    setTitle(shows.name);
    setTrailer(false)
  }
  // console.log(trendsData)
  return (
       <div className={toggle ? 'mainBgColor':'secondaryBgColor'}>
        <div className='movies-container'>
        <Fragment>
      {
        trendsData.map((trending) => {
          return(
            <Fragment>
            <div id={trailer ? 'container' : 'NoContainer'}>
              <AiFillPlayCircle color='#fff' fontSize={40} id={trailer? "playIcon":"hide"}/>
              <img src={trending.poster_path? `${Images}${trending.poster_path}`:''} alt="" 
              onClick={() => trendShowTitle(trending)}
              />

              <h3 id='smaller-Text' className={toggle ? 'mainColor':'secondaryColor'}
               onClick={() => trendShowTitle(trending)}>
              {trending.title}
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

export default Trends
