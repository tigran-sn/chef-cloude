import { useState } from "react";
import "./Main.css";
import RecipePlaceholder from "../RecipePlaceholder";

const Main = () => {
  const [recipeShown, setRecipeShown] = useState(false);
  const [ingredients, setIngredients] = useState([
    "chicken",
    "all the main spices",
    "corn",
    "heavy cream",
    "pasta",
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
    console.log(Object.fromEntries(formData));
  }

  function addIngredient(ingredient: unknown) {
    if (typeof ingredient === "string") {
      setIngredients((prevIngredient) => [...prevIngredient, ingredient]);
    }
  }

  function toggleRecipe() {
    setRecipeShown((prevState: boolean) => !prevState);
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

      {!!ingredientListItems.length && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients__list" aria-live="polite">
            {ingredientListItems}
          </ul>
          {ingredientListItems.length > 3 && (
            <div className="getRecipe__container">
              <div>
                <h3>Ready for recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={toggleRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
      {recipeShown && <RecipePlaceholder />}
    </main>
  );
};

export default Main;
