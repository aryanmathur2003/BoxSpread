import React, { useState } from "react";

const DropdownSelector = ({ selectedOption, onSelect }) => {
  const options = ["spx", "spy"];

  return (
    <div className="relative inline-block">
      <label htmlFor="select" className="sr-only">
        Select
      </label>
      <select
        id="select"
        className="rounded-md border-gray-200 py-3 pl-2 pe-10 shadow-sm text-2xl"
        value={selectedOption}
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelector;
