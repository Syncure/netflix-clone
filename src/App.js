import React from "react";
import Row from "./Row";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="Originales de Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Tendencias" fetchUrl={requests.fetchTrending} />
      <Row title="Acción" fetchUrl={requests.fetchActionMovies} />
      <Row title="Aventura" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Comedia" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentales" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Románticas" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
