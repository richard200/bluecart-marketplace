import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?query=${query}`);
  };

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={query}
        onChange={handleChange}
      />
      <Button variant="outline-success" type="submit">Search</Button>
    </Form>
  );
}

export default SearchBar;