import React from 'react'
import { Link } from "wouter";

export default function Gif ({ id, title, url }){
  return(
    <Link to={`/gif/show/${id}`}>
      <h4>{title}</h4>
      <img src={url} />
    </Link>
  )
}