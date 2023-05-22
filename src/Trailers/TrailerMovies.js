import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import '../styles/Trailer.css'
function TrailerMovies({title,toggle}) {

    const [video, setVideo] = useState("");
  const [videoURL, setVideoURL] = 
    useState("");
   
  //A function to fetch the required URL
  // and storing it inside the
  // videoURL state variable
  function handleSearch() {
    setVideo(title)
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  useEffect(() => {
    handleSearch()
  },[videoURL])

  return (
    <Fragment>
      <div className="Container">

      </div>
      <div className="player">
        <h1 id={toggle ? 'TrailerMovie-name-dark' : 'TrailerMovie-name-light'}>{title}</h1>
        <ReactPlayer url={videoURL} controls = {true} width = {'1000px'} height = {'700px'} muted = {false}/>
      </div>
    </Fragment>
  )
}

export default TrailerMovies
