 import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
  ]);
  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  function handleSubmit(event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    addIngredient(newIngredient);
    event.currentTarget?.reset();
  }

  function addIngredient(ingredient: unknown) {
    setIngredients((prevIngredient) => [
      ...prevIngredient,
      ingredient as string,
    ]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="ingredientForm">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add ingedient"
          name="ingredient"
        />
        <button>Add ingedient</button>
      </form>

      <ul>{ingredientListItems}</ul>
    </main>
  );
};

export default Main;
