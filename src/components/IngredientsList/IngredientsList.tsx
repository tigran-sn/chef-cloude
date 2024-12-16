import "./IngredientsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const IngredientsList = ({
  ingredients,
  getRecipe,
  recipeSection,
  removeIngredient,
}: {
  ingredients: string[];
  getRecipe: () => void;
  recipeSection: React.RefObject<HTMLDivElement>;
  removeIngredient: (index: number) => void;
}) => {
  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li key={index}>
      {ingredient}
      <button
        type="button"
        onClick={() => removeIngredient(index)}
        aria-label="Remove ingredient"
        tabIndex={1}
      >
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </button>
    </li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients__list" aria-live="polite">
        {ingredientListItems}
      </ul>
      {ingredients.length > 3 && (
        <div ref={recipeSection} className="getRecipe__container">
          <div>
            <h3>Ready for recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
