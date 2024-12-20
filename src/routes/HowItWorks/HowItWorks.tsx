const HowItWorks = () => {
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
    subtitle: {
      color: "#2d3748",
      fontSize: "24px",
      fontWeight: "600",
      marginBottom: "24px",
      marginTop: "40px",
    },
    text: {
      color: "#4a5568",
      fontSize: "16px",
      lineHeight: "1.8",
      marginBottom: "20px",
    },
    stepGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
      marginTop: "32px",
    },
    stepCard: {
      padding: "24px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
    },
    stepNumber: {
      color: "#2d3748",
      fontSize: "48px",
      fontWeight: "700",
      marginBottom: "16px",
      opacity: "0.2",
    },
    stepTitle: {
      color: "#2d3748",
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "12px",
    },
    featureList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      marginTop: "32px",
    },
    featureItem: {
      padding: "24px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: "1px solid #e2e8f0",
      transition: "transform 0.2s ease",
      cursor: "pointer",
    },
    featureTitle: {
      color: "#2d3748",
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "12px",
    },
    divider: {
      margin: "48px 0",
      border: "none",
      borderBottom: "1px solid #e2e8f0",
    },
  };

  const steps = [
    {
      number: "1",
      title: "Add Your Ingredients",
      description:
        "Input the ingredients you have available in your kitchen. No ingredient list is too long or too short!",
    },
    {
      number: "2",
      title: "Let AI Work Its Magic",
      description:
        "Our AI analyzes your ingredients and creates personalized recipe suggestions based on what you have.",
    },
    {
      number: "3",
      title: "Choose & Cook",
      description:
        "Pick a recipe you like and start cooking! Each recipe comes with detailed instructions and tips.",
    },
  ];

  const features = [
    {
      title: "AI-Powered Recipe Generation",
      description:
        "Advanced algorithms create unique recipes tailored to your available ingredients.",
    },
    {
      title: "Dietary Preferences",
      description:
        "Set your dietary restrictions and preferences for perfectly matched recipes.",
    },
    {
      title: "Ingredient Substitutions",
      description:
        "Get smart suggestions for ingredient substitutions when you're missing something.",
    },
    {
      title: "Recipe History",
      description:
        "Access your previously generated recipes and favorites anytime.",
    },
    {
      title: "Shopping Lists",
      description: "Generate shopping lists from recipes with one click.",
    },
    {
      title: "Personal Notes",
      description:
        "Add your own notes and modifications to recipes for future reference.",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>How It Works</h1>

        <p style={styles.text}>
          CulinaryAI makes cooking easier by turning your available ingredients
          into delicious recipes. No more wondering what to cook or wasting food
          – let AI help you create amazing meals!
        </p>

        <div style={styles.stepGrid}>
          {steps.map((step) => (
            <div key={step.number} style={styles.stepCard}>
              <div style={styles.stepNumber}>{step.number}</div>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.text}>{step.description}</p>
            </div>
          ))}
        </div>

        <hr style={styles.divider} />

        <h2 style={styles.subtitle}>Key Features</h2>

        <div style={styles.featureList}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureItem}>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.text}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
