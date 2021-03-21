import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";
import ShowGif from "./components/ShowGif";

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda">Pandas</Link>
        <Link to="/gif/anime">Anime</Link>
        <Link to="/gif/cars">Cars</Link>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        />
        <Route path="/gif/show/:id" component={ShowGif} />
      </section>
    </div>
  );
}

export default App;
