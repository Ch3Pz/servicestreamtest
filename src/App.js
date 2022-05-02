import './App.css';
import MovieList from './Components/MovieList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState('Title');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    (async () => {
      const {data} = await axios(`https://jsonmock.hackerrank.com/api/movies/search/?page=${page}`);

      setTotalPages(data.total_pages);
      setMovies(data.data);
    })();
  }, [page]);

  const handleNextPageClick = () => {
    if(page < totalPages) {
      setPage(page + 1);
    }
  }

  const handlePreviousPageClick = () => {
    if(page > 1) {
      setPage(page - 1);
    }
  }

  const handleOnSort = (sortby) => {
    setSortBy(sortby);

    // TODO SORTING MECHANISM
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold underline mt-4 mb-4">
            Movie List Sorted by {sortBy}
          </h1>
          <input type="text" className="float-right" placeholder="Search..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        </div>
        <MovieList movies={movies} onSort={handleOnSort} sortBy={sortBy}/>
        <div className="flex space-x-4">
          <button onClick={( () => setPage(1) )}>First</button>
          <button onClick={(handlePreviousPageClick)}>Prev</button>
          <div className="mt-4 mb-4 text-right">Page {page}</div>
          <button onClick={handleNextPageClick}>Next</button>
          <button onClick={( () => setPage(totalPages) )}>Last</button>
        </div>
      </div>
    </>
  );
}

export default App;
