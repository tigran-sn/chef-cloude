const FAQPage = () => {
  const styles: Record<string, React.CSSProperties> = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#fafafa",
      padding: "60px 20px",
    },
    content: {
      maxWidth: "800px",
      margin: "0 auto",
      backgroundColor: "white",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    },
    title: {
      color: "#2d3748",
      fontSize: "36px",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: "40px",
    },
    faqItem: {
      marginBottom: "32px",
    },
    question: {
      color: "#2d3748",
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "12px",
    },
    answer: {
      color: "#4a5568",
      fontSize: "16px",
      lineHeight: "1.8",
    },
    divider: {
      margin: "32px 0",
      border: "none",
      borderBottom: "1px solid #e2e8f0",
    },
  };

  const faqs = [
    {
      question: "How does CulinaryAI generate recipes?",
      answer:
        "CulinaryAI uses advanced AI technology to analyze your available ingredients and create personalized recipes. It considers ingredient combinations, cooking methods, and common recipe patterns to suggest dishes you can make with what you have.",
    },
    {
      question: "Is there a limit to how many ingredients I can input?",
      answer:
        "No, there's no limit! You can input as many ingredients as you have available. The more ingredients you add, the more possibilities CulinaryAI has to work with to create interesting recipes.",
    },
    {
      question: "Can I specify dietary restrictions or preferences?",
      answer:
        "Yes! Once you create an account, you can set your dietary preferences (vegetarian, vegan, gluten-free, etc.) in your profile settings. CulinaryAI will then generate recipes that match your dietary requirements.",
    },
    {
      question: "Can I save recipes for later?",
      answer:
        "Absolutely! When you're logged in, you can save any generated recipe to your favorites. You can also organize them into collections and add personal notes.",
    },
    {
      question: "What if I'm missing an ingredient from a generated recipe?",
      answer:
        "CulinaryAI will suggest possible substitutions for missing ingredients when available. You can also regenerate a recipe with your current ingredients, or add the missing items to your shopping list.",
    },
    {
      question: "Is this service free?",
      answer:
        "We offer both free and premium tiers. The free tier allows you to generate a limited number of recipes per day, while premium members get unlimited recipe generations, saving features, and additional personalization options.",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Frequently Asked Questions</h1>

        {faqs.map((faq, index) => (
          <div key={index}>
            <div style={styles.faqItem}>
              <h2 style={styles.question}>{faq.question}</h2>
              <p style={styles.answer}>{faq.answer}</p>
            </div>
            {index < faqs.length - 1 && <hr style={styles.divider} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
