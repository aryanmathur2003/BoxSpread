import React, { useState } from "react";
import DropdownSelector from "./DropdownSelect";

const InputWithButton = ({ setSearchResult }) => {
  const [expirationInput, setExpirationInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("SPY");
  const [error, setError] = useState(null);

  const handleSearch = () => {
    setError(null);
    console.log("expirationInput:", expirationInput);
    console.log("selectedOption:", selectedOption);
    // const url = `https://boxspreadrestapi.onrender.com/runScript/${expirationInput}/`;
    const url = `http://127.0.0.1:8000/runScript/${expirationInput}/${selectedOption}/`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("GET request response:", data);
        setSearchResult(data);
      })
      .catch((error) => {
        console.error("Error making GET request:", error);
        setError(error.message);
      });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      e.target.blur();
    }
  };

  return (
    <div>
      <div className="relative shadow-lg">
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search{" "}
        </label>

        <input
          type="text"
          id="Search"
          placeholder="YYYY-MM-DD"
          className="w-full rounded-md border-gray-200 py-3 pl-2 pe-10 shadow-sm text-xl"
          value={expirationInput}
          onChange={(e) => setExpirationInput(e.target.value)}
          onKeyDown={handleKeyDown} // Add the onKeyDown event handler
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-700"
            // onClick={handleSearch}
          >
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
      <br />
      <DropdownSelector
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
        // onClick={handleSearch}
      />
      <button
        type="button"
        className="bg-zinc-500 shadow-md text-white py-2 px-4 rounded-md mt-4 hover:bg-zinc-900 hover:shadow-lg"
        onClick={handleSearch}
      >
        Search
      </button>
      {error && <div className="absolute text-red-500 my-2">Bad Request</div>}
    </div>
  );
};

export default InputWithButton;
