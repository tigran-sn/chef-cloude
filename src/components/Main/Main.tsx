import { useEffect, useRef, useState } from "react";
import "./Main.css";
import ClaudeRecipe from "../ClaudeRecipe";
import IngredientsList from "../IngredientsList";
import { getRecipeFromMistral } from "../../ai";

const Main = () => {
  const [recipe, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);
  const recipeSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

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

  async function getRecipe(): Promise<void> {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown ? recipeMarkdown : "");
  }

  return (
    <>
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
          recipeSection={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </>
  );
};

export default Main;
