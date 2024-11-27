import "./Main.css";

const Main = () => {
  return (
    <main>
      <form className="ingredientForm">
        <input
          type="text"
          placeholder="e.g. Oregano"
          aria-label="Add ingedient"
        />
        <button type="button">Add ingedient</button>
      </form>
    </main>
  );
};

export default Main;
