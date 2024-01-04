import React from "react";
import OptionTable from "./OptionTable";


const App = () => {
  return (
    <div>
      <div className="bg-neutral-500 h-screen">
        <div className="flex flex-row p-16">
          <div className="w-1/3">
            <OptionTable />
          </div>
          <div className="w-1/6"></div>
          <div>
            <OptionTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
