import React from 'react';

const SquareLoader = ({ size = 40 }) => {
  const loaderSize = size;
  const squareSize = size * 0.4; // 40% of loader size (16/40 = 0.4)
  const offset = size * -0.2; // -20% of loader size (-8/40 = -0.2)

  const loaderStyle = {
    width: `${loaderSize}px`,
    height: `${loaderSize}px`,
  };

  const squareStyle = {
    width: `${squareSize}px`,
    height: `${squareSize}px`,
    marginTop: `${offset}px`,
    marginLeft: `${offset}px`,
  };

  return (
    <div className="relative" style={loaderStyle}>
      <style jsx>{`
        @keyframes square-path {
          0% { top: 0; left: 0; }
          25% { top: 100%; left: 0; }
          50% { top: 100%; left: 100%; }
          75% { top: 0; left: 100%; }
          100% { top: 0; left: 0; }
        }
        
        @keyframes square-rotate {
          80%, 100% { transform: rotate(180deg); }
        }
        
        .square-1 {
          animation: square-path 2s infinite, square-rotate 0.5s infinite;
        }
        
        .square-2 {
          animation: square-path 2s infinite, square-rotate 0.5s infinite;
          animation-delay: -1s, 0s;
        }
      `}</style>

      {/* First square (teal) */}
      <div
        className="absolute top-0 left-0 bg-[#3D50FF] square-1"
        style={squareStyle}
      />

      {/* Second square (pink) */}
      <div
        className="absolute top-0 left-0 bg-[#F6339A] square-2"
        style={squareStyle}
      />
    </div>
  );
};

export default SquareLoader;