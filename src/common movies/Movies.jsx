import React, { useEffect, useState } from 'react'
import { comedyMovies, imageUrl, latestMovies } from '../Url'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { movieContext } from '../App';

const Movies = ({movieApi}) => {
  const [movies, setMovies] = useState([])
  const {movieList,setmovieList} = useContext(movieContext)
  const getApi_id = (id) => {
console.log(id);
  }
    useEffect(() => {
      axios.get(movieApi).then((response)=>setMovies(response.data.results))
      axios.get(movieApi).then((response)=>setmovieList(response.data.results))
     }, [])
     console.log(movieList);
  return (
    <div className='row'>
        {movies.map((item)=>
        <Card style={{backgroundColor:'blanchedalmond',width: '300px', margin:'auto'}} onClick={()=> getApi_id(item.id)} >
          <Link to='/details' style={{textDecoration:'none', color:'black'}}>
      <Card.Img variant="top" src={imageUrl+item.backdrop_path} style={{height:'160px'}} />
      <Card.Body>
        <Card.Title>Title: {item.title}</Card.Title>
        <Card.Text>Language: {item.original_language} </Card.Text>
        <Card.Text>
         Overview: {item.overview}
        </Card.Text>
        <Button  variant="primary">Watch Now</Button>
      </Card.Body>
      </Link>
    </Card>
    )} 

    </div>
  )
}

export default Movies