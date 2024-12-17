import ReactMarkdown from "react-markdown";

import "./CulinaryAIRecipe.css";

const CulinaryAIRecipe = (props: { recipe: string }) => {
  return (
    <section aria-live="polite" className="suggested-recipe-container">
      <h2>
        Culinary<span style={{ color: "#FF4B4B" }}>AI</span> recommends:
      </h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default CulinaryAIRecipe;
