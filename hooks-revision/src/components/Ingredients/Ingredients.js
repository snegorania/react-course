import React, { useCallback, useMemo, useReducer } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currState, action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "ADD":
      return [...currState, action.payload];
    case "DELETE":
      return currState.filter((el) => el.id !== action.payload);
    default:
      throw new Error("Should not get there");
  }
};

const httpReducer = (currState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...currState, isLoading: true };
    case "STOP_LOADING":
      return { ...currState, isLoading: false };
    case "ERROR":
      return { error: action.payload, isLoading: false };
    case "CLEAR_ERROR":
      return { ...currState, error: null };
    default:
      throw new Error("Should not get there");
  }
};

function Ingredients() {
  const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  });

  const { isLoading, error } = httpState;

  //const [ingredients, setIngredients] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);

  const handleFilteredIngredients = useCallback((filteredIngredients) => {
    dispatchIngredients({ type: "SET", payload: filteredIngredients });
  }, []);

  const handleSubmitForm = (ingredient) => {
    dispatchHttp({ type: "LOADING" });
    fetch(
      "https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
          "Content-Type": "applicaion/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatchHttp({ type: "STOP_LOADING" });
        dispatchIngredients({
          type: "ADD",
          payload: { id: data.name, ...ingredient },
        });
      });
  };

  const handleRemoveItem = useCallback((id) => {
    dispatchHttp({ type: "LOADING" });
    fetch(
      `https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        dispatchHttp({ type: "STOP_LOADING" });
        dispatchIngredients({ type: "DELETE", payload: id });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", payload: error.message });
      });
  }, []);

  const clearError = () => dispatchHttp({ type: "CLEAR_ERROR" });

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={ingredients}
        onRemoveItem={handleRemoveItem}
      />
    );
  }, [ingredients, handleRemoveItem]);

  return (
    <div className="App">
      <IngredientForm
        onSubmitIngredient={handleSubmitForm}
        loading={isLoading}
      />
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <section>
        <Search onLoadIngredients={handleFilteredIngredients} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
