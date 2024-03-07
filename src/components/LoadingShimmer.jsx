import React from "react";

const LoadingShimmer = () => {
  return (
    <div>
      <button type="button" class="bg-purple-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Loading...
      </button>
    </div>
  );
};

export default LoadingShimmer;
