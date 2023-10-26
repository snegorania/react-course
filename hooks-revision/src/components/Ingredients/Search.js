import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo(({ onLoadIngredients }) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const handleFilter = ({ target: { value } }) => setEnteredFilter(value);
  const filterRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === filterRef.current.value) {
        const query =
          enteredFilter.trim().length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        fetch(
          "https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/ingredients.json" +
            query
        )
          .then((response) => response.json())
          .then((data) => {
            let newIngredients = [];
            for (let key in data) {
              newIngredients.push({
                id: key,
                title: data[key].title,
                amount: data[key].amount,
              });
            }
            onLoadIngredients([...newIngredients]);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadIngredients]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredFilter}
            onChange={handleFilter}
            ref={filterRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
