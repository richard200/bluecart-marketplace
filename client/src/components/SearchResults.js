import React from 'react';

function SearchResultList({ results }) {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResultList;
