import ReactMarkdown from "react-markdown";

import "./ClaudeRecipe.css";

const ClaudeRecipe = (props: { recipe: string }) => {
  return (
    <section aria-live="polite" className="suggested-recipe-container">
      <h2> Chef Claud Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};

export default ClaudeRecipe;
