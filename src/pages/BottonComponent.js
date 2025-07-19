import React from 'react';

const BottomComponent = ({ onClick, children, className }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
      <button
        onClick={onClick}
        className={`px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default BottomComponent;
