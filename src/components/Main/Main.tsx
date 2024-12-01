 import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [ingredients, setIngredients] = useState<string[]>([
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
    console.log(Object.fromEntries(formData))
  }

  function addIngredient(ingredient: unknown) {
    if (typeof ingredient === 'string') {
        setIngredients((prevIngredient) => [...prevIngredient, ingredient]);
    }
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

      {!!ingredientListItems.length && <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients__list" aria-live="polite">{ingredientListItems}</ul>
        {ingredientListItems.length > 3 && <div className="getRecipe__container">
          <div>
            <h3>Ready for recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>}
      </section>}
    </main>
  );
};

export default Main;