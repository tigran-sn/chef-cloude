import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About CulinaryAI</h1>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At CulinaryAI, we're passionate about transforming the way you cook.
            Our mission is to help you create delicious meals from the
            ingredients you already have, reducing food waste while making
            cooking more enjoyable and accessible.
          </p>
        </section>

        <section className="about-section">
          <h2>How It Works</h2>
          <p>
            Using advanced AI technology, CulinaryAI analyzes your available
            ingredients and generates personalized recipes tailored to what you
            have in your kitchen. No more searching through countless recipes
            only to find you're missing key ingredients.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Sustainability</h3>
              <p>Reducing food waste by helping you use what you have.</p>
            </div>
            <div className="value-item">
              <h3>Accessibility</h3>
              <p>
                Making cooking easier for everyone, regardless of experience.
              </p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Using AI to revolutionize home cooking.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Join Us</h2>
          <p>
            Whether you're an experienced chef or just starting your culinary
            journey, CulinaryAI is here to inspire your next delicious creation.
            Let's reduce food waste and make cooking more enjoyable together.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
