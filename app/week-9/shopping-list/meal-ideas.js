"use client";
import { useState, useEffect } from "react";

const cleanIngredient = (ingredient) => {
  const withoutEmojis = ingredient.replace(/[^a-zA-Z0-9 ,]/g, "");
  const cleanedIngredient = withoutEmojis.split(",")[0].trim().toLowerCase();
  return cleanedIngredient;
};

const fetchMealIdeas = async (ingredient) => {
  const cleanedIngredient = cleanIngredient(ingredient);
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
      cleanedIngredient
    )}`
  );
  const data = await response.json();
  return data.meals;
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      if (ingredient) {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
      }
    };
    getMeals();
  }, [ingredient]);

  return (
    <div>
      <h2 style={styles.mealTitle}>
        {ingredient
          ? `Here are some meal ideas using ${ingredient}:`
          : "Meal Ideas"}
      </h2>
      {meals ? (
        <ul style={styles.mealList}>
          {meals.map((meal) => (
            <li key={meal.idMeal} style={styles.mealItem}>
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for {ingredient}</p>
      )}
    </div>
  );
};

const styles = {
  mealTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  mealList: {
    listStyleType: "none",
    padding: 0,
  },
  mealItem: {
    backgroundColor: "#374151",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "4px",
    color: "white",
  },
};

export default MealIdeas;
