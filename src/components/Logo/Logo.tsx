const Logo = () => {
  return (
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
      {/* Fork icon */}
      <path
        d="M120 20 L120 80 M110 20 L110 40 M130 20 L130 40 M110 40 C110 50, 120 50, 120 50 M130 40 C130 50, 120 50, 120 50"
        stroke="#FF4B4B"
        strokeWidth="3"
        fill="none"
      />

      {/* Knife icon */}
      <path
        d="M170 20 C180 20, 180 35, 180 40 L180 80 M170 20 L180 40"
        stroke="#FF4B4B"
        strokeWidth="3"
        fill="none"
      />

      {/* Circuit board elements */}
      <circle cx="145" cy="40" r="3" fill="#333" />
      <circle cx="155" cy="60" r="3" fill="#333" />
      <path d="M145 40 L155 60" stroke="#333" strokeWidth="2" />
      <path d="M145 40 H135" stroke="#333" strokeWidth="2" />
      <path d="M155 60 H165" stroke="#333" strokeWidth="2" />

      {/* Text */}
      <text
        x="150"
        y="95"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        textAnchor="middle"
        fill="#333"
        fontWeight="bold"
      >
        Culinary<tspan fill="#FF4B4B">AI</tspan>
      </text>
    </svg>
  );
};

export default Logo;
