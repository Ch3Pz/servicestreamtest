import React from "react";
import { v4 as uuidv4 } from "uuid";
import CaretDown from "../svgs/CaretDown";


const MovieList = (props) => {
  const { movies, sortBy, onSort } = props;

  return (
    <>
      {movies.length === 0 && <div>Loding movies...</div>}
      {movies.length > 0 && (
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100 border p-1">
              <th className="p-1 text-left font-bold text-lg w-2/3"><button onClick={() => {onSort('Title')}}>Title</button>{sortBy === "Title" && <CaretDown className="inline-block h-3 w-3"/>}</th>
              <th className="p-1 text-left font-bold text-lg w-1/3"><button onClick={() => {onSort('Year')}}>Year</button>{sortBy === "Year" && <CaretDown className="inline-block h-3 w-3"/>}</th>
            </tr>
          </thead>
          <tbody>
          {movies.map(movie => (
            <tr key={uuidv4()} className="hover:bg-yellow-100 border p-1">
              <td className="p-1 w-2/3">{movie.Title}</td>
              <td className="p-1 w-1/3">{movie.Year}</td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default MovieList;