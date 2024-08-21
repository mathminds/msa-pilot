import React, { useState } from 'react';

function DataFlow({ title}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute">
      {/* The element that triggers the modal */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="btn btn-xs bg-red-200 border-2 border-red-200 text-black hover:bg-red-300 hover:text-black"
      >
        {title}
      </button>

      {/* The modal that appears on hover */}
      {isHovered && (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute top-3 left-3 mt-0 p-4 w-96 bg-white rounded-lg shadow-lg transition-opacity duration-300 ease-in-out"
        >
          <h2 className="text-normal font-bold">제공받는 데이터: 신용등급</h2>
          <p>제공받는 목적: 마케팅을 위하여 제공받음.</p>
        </div>
      )}
    </div>
  );
}

export default DataFlow;
