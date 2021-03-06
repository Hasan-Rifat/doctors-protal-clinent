import React from "react";

const Btn = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary uppercase text-white font-semibold bg-gradient-to-r from-secondary to-primary px-8">
        {children}
      </button>
    </div>
  );
};

export default Btn;
