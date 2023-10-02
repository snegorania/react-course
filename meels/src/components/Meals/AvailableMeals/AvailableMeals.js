import React, {useState} from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import { useEffect } from "react";

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMeals() {
      setLoading(true);
      const responce = await fetch('https://react-learn-project-c7c1a-default-rtdb.firebaseio.com/meals.json');
      if (responce.ok) {
        const data = await responce.json();
      console.log(data);
      const fetchedMeals = [];
      for(let key in data) {
        fetchedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        })
      }
      setMeals(fetchedMeals);
      setLoading(false);
      } else {
        setLoading(false);
        throw new Error(responce.status);
      }
      
    }

    try{
      fetchMeals();
    } catch(error) {
      setError(error.message);
    }
  }, [])

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {meals.length > 0 && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
