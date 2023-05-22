import React, { Fragment, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import '../styles/NavbarStyle.css'
import { Routes,Route } from 'react-router';
import Movies from './Movies'
import Trends from './Trends'
import Tvshows from './Tvshows'
import Prising from './Prising'
import { NavLink } from 'react-router-dom';

export const Container = React.createContext()

function Navbar() {
    const [toggle,setToggle] = useState(true);
    const [input,setInput] = useState('')

  return (
    <Container.Provider value = {{toggle,input}}>

    
    <Fragment>
      <nav className={toggle? '':'navBarColor'}>
        <div className="nav-options">
            
            <h1 id={toggle? '':'heading'}>REACTFLIX</h1>
           
            <NavLink to='' style={({isActive}) => {return {color : isActive ? '#fff': '#EE9b00'}}}>
            <span id={toggle? 'Movies':'MoviesLight'}>Movies</span>
            </NavLink>
            <NavLink to='/TvShows'  style={({isActive}) => {return {color : isActive ? '#fff': '#EE9b00'}}}>
            <span id={toggle? 'Movies':'MoviesLight'}>Tv Shows</span>
            </NavLink>
            <NavLink to='/trending'  style={({isActive}) => {return {color : isActive ? '#fff': '#EE9b00'}}}>
            <span id={toggle? 'Movies':'MoviesLight'}>Trending</span>
            </NavLink>
            <NavLink to='pricing'  style={({isActive}) => {return {color : isActive ? '#fff': '#EE9b00'}}}>
            <span id={toggle? 'Movies':'MoviesLight'}>Pricing</span>
            </NavLink>
        </div>
        <div className="input-group">
        <input type="text" placeholder='Search Whatever You Want' onChange={(e) => setInput(e.target.value)} value = {input}/>
        <HiSearch fontSize={21} color = {toggle ? 'black' : '#ff206e'} id = 'search'/>
        <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
            <div id= {toggle? 'Color-switcher-mover': 'Color-switcher-moved'} ></div>
        </div>
        </div>
      </nav>
      
        <Routes>
            <Route path='' element = {<Movies/>}/>
            <Route path='TvShows' element = {<Tvshows/>}/>
            <Route path='trending' element = {<Trends/>}/>
            <Route path='pricing' element = {<Prising/>}/>
        </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default Navbar
