import { useState } from "react";
import "./Main.css";
import RecipePlaceholder from "../RecipePlaceholder";
import IngredientsList from "../IngredientsList";

const Main = () => {
  const [recipeShown, setRecipeShown] = useState(false);
  const [ingredients, setIngredients] = useState([
    "chicken",
    "all the main spices",
    "corn",
    "heavy cream",
    "pasta",
  ]);

  function handleSubmit(event: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    addIngredient(newIngredient);
    event.currentTarget?.reset();
  }

  function addIngredient(ingredient: unknown): void {
    if (typeof ingredient === "string") {
      setIngredients((prevIngredient) => [...prevIngredient, ingredient]);
    }
  }

  function toggleRecipeShown(): void {
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

      {!!ingredients.length && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}
      {recipeShown && <RecipePlaceholder />}
    </main>
  );
};

export default Main;
