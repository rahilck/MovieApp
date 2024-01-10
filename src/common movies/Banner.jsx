import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { comedyMovies, imageUrl } from '../Url';


const Banner = () => {
    const [slide, setslide] = useState([])
    useEffect(() => {
        axios.get(comedyMovies).then((response)=>setslide(response.data.results))
    }, [])
    const array = slide[(Math.floor(Math.random() * slide.length))] 
  return (
    <div>
       <h2 className='container' style={{textAlign:'center',bottom:'14.5rem' ,position:'absolute',color:'white'}}>{array?.name} </h2>
       <p style={{textAlign:'center',position:'absolute', bottom: '10rem', color:'white'}}>{array?.overview}</p>
       <img src={imageUrl + array?.backdrop_path} style={{height:"730px"}} alt= '' />
    </div>
  )
}

export default Banner