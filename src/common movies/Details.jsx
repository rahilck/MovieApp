import React, { useContext } from 'react'
import { movieContext } from '../App'

const Details = () => {
const {movieList} = useContext(movieContext)
console.log(movieList);
  return (
    <div>
      
    </div>
  )
}

export default Details