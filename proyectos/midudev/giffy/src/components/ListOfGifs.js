import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs';
import Gif from './Gif'


export default function ListOfGifs({params}){
  const {keyword} = params
  const [gifs, setGifs] = useState([]);

  useEffect(function () {
    getGifs({ keyword })
      .then((gifs) => setGifs(gifs));
  }, [keyword]);

  return(
    <div>
      {
        gifs.map(({id, title, url}) => (
          <Gif title={title} url={url} id={id} key={id} />
        ))
      }
    </div>
  )
}