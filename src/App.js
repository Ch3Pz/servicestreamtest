import './App.css';
import MovieList from './Components/MovieList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [state, setState] = useState({
    movies: [],
    page: 1,
    totalPages: 1,
    sortBy: 'Title',
    searchTerm: '',
    results: []
  })

  useEffect(() => {
    (async () => {
      const {data} = await axios(`https://jsonmock.hackerrank.com/api/movies/search/?page=${state.page}`);

      setState({...state, movies: data.data, totalPages: data.total_pages, results: data.data});
    })();
  }, [state.page]);

  const handleNextPageClick = () => {
    if(state.page < state.totalPages) {
      setState({...state, page: state.page + 1});
    }
  }

  const handlePreviousPageClick = () => {
    if(state.page > 1) {
      setState({...state, page: state.page - 1});
    }
  }

  const handleOnSort = (sortby) => {
    setState({...state, sortBy: state.sortby});

    // TODO SORTING MECHANISM
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold underline mt-4 mb-4">
            Movie List Sorted by {state.sortBy}
          </h1>
          <input type="text" className="float-right" placeholder="Search..." value={state.searchTerm} onChange={(e)=>setState({...state, searchTerm: e.target.value})}/>
        </div>
        <MovieList movies={state.results} onSort={handleOnSort} sortBy={state.sortBy}/>
        <div className="flex space-x-4">
          <button onClick={( () => setState({...state, page: 1}) )}>First</button>
          <button onClick={(handlePreviousPageClick)}>Prev</button>
          <div className="mt-4 mb-4 text-right">Page {state.page}</div>
          <button onClick={handleNextPageClick}>Next</button>
          <button onClick={( () => setState({...state, page: state.totalPages }) )}>Last</button>
        </div>
      </div>
    </>
  );
}

export default App;
