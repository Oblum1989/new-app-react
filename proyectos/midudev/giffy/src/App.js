import React, {useEffect, useState} from 'react';
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=n0z3y5tSmgGGa9S77WAq5cIkvZjqgZSw&q=anime&limit=10&offset=0&rating=g&lang=es'
function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function(){
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
      })
  }, [])
  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(gif => (
          <img src={gif} />
        ))
      }
      </section>
    </div>
  );
}

export default App;
