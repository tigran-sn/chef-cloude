const IngredientsList = ({
  ingredients,
  getRecipe,
}: {
  ingredients: string[];
  getRecipe: () => void;
}) => {
  const ingredientListItems = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients__list" aria-live="polite">
        {ingredientListItems}
      </ul>
      {ingredients.length > 3 && (
        <div className="getRecipe__container">
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
