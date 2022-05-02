import React from "react";
import { v4 as uuidv4 } from "uuid";


const MovieList = (props) => {
  const { movies } = props;

  return (
    <>
      {movies.length === 0 && <div>Loding movies...</div>}
      {movies.length > 0 && (
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left font-bold w-2/3">Title</th>
              <th className="text-left font-bold w-1/3">Year</th>
            </tr>
          </thead>
          <tbody>
          {movies.map(movie => (
            <tr key={uuidv4()} className="hover:bg-yellow-100">
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default MovieList;