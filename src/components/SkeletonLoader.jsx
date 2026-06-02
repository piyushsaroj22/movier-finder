import React from "react";

const SkeletonLoader = () => {
  const skeletons = Array(10).fill(0);

  return (
    <>
      {skeletons.map((_, index) => (
        <div key={index} className="bg-gray-800 p-5 rounded-lg animate-pulse">
          <div className="w-full h-72 bg-gray-700 rounded-lg mb-3"></div>

          <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>

          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
