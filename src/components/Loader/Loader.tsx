import React from "react";

const Loader: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="100 20 100 80" xmlns="http://www.w3.org/2000/svg" {...props}>
      <style>
        {`
          @keyframes shimmer {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          @keyframes subtleWave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
            @keyframes dash {
            0% { stroke-dashoffset: 50; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -50; }
          }
        `}
      </style>

      {/* Fork icon with subtle opacity change */}
      <path
        d="M120 20 L120 80 M110 20 L110 40 M130 20 L130 40 M110 40 C110 50, 120 50, 120 50 M130 40 C130 50, 120 50, 120 50"
        stroke="#FF4B4B"
        strokeWidth={3}
        fill="none"
        style={{
          animation: "dash 2s linear infinite",
          strokeDasharray: 50,
          transformOrigin: "center",
        }}
      />

      {/* Knife icon with subtle opacity change */}
      <path
        d="M170 20 C180 20, 180 35, 180 40 L180 80 M170 20 L180 40"
        stroke="#FF4B4B"
        strokeWidth={3}
        fill="none"
        style={{
          animation: "dash 2s linear infinite",
          strokeDasharray: 50,
          transformOrigin: "center",
        }}
      />

      {/* Circuit board elements with subtle wave */}
      <g style={{ animation: "subtleWave 2s ease-in-out infinite" }}>
        <circle cx={145} cy={40} r={3} fill="#333" />
        <circle cx={155} cy={60} r={3} fill="#333" />
        <path d="M145 40 L155 60" stroke="#333" strokeWidth={2} />
        <path d="M145 40 H135" stroke="#333" strokeWidth={2} />
        <path d="M155 60 H165" stroke="#333" strokeWidth={2} />
      </g>

      {/* Text with gentle opacity change */}
      <text
        x={150}
        y={95}
        fontFamily="Arial, sans-serif"
        fontSize={18}
        textAnchor="middle"
        fill="#333"
        fontWeight="bold"
      >
        Culinary<tspan fill="#FF4B4B">AI</tspan>
      </text>
    </svg>
  );
};

export default Loader;
