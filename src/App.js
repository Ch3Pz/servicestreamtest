import './App.css';
import MovieList from './Components/MovieList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const {data} = await axios(`https://jsonmock.hackerrank.com/api/movies/search/?page=${page}`);
      setMovies(data.data);
    })();
  }, [movies, page]);

  const handleNextPageClick = () => {
    setPage(page + 1);
  }

  const handlePreviousPageClick = () => {
    setPage(page - 1);
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline mt-4 mb-4">
          Movie List
        </h1>
        <MovieList movies={movies}/>
        <div className="flex space-x-4">
          <button onClick={handlePreviousPageClick}>Prev</button>
          <div className="mt-4 mb-4 text-right">Page {page}</div>
          <button onClick={handleNextPageClick}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
