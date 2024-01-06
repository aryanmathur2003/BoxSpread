import React from "react";
import OptionTable from "./components/OptionTable";
import InputwithButton from "./components/InputwithButton";

const App = () => {
  return (
    <div>
      <div className="bg-neutral-100 h-screen">
        <div className="flex text-7xl h-32 pb-4 font-medium shadow-sm justify-center items-center">
          Box Spread Calculator
        </div>
        <div className="flex flex-col px-32 h-4/5">
          <div className="grid grid-cols-2 gap-16 gap-y-24 pt-8 mx-36">
            <div className="flex items-center justify-center">
              <div className="h-1/4 w-2/5">
                <p className="text-2xl font-light text-center flex justify-start pb-1 pl-2">
                  Expiration Date
                </p>
                <InputwithButton />
              </div>
            </div>
            <div>
              <OptionTable />
            </div>
            <div>
              <OptionTable />
            </div>
            <div>
              <OptionTable />
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <div className="bg-neutral-100 h-screen">
    //     <div className="flex text-7xl h-32 font-medium shadow-sm justify-center">
    //       Box Spread
    //     </div>
    //     <div className="flex flex-col px-32 h-full">
    //       <div className="flex flex-row h-max px-8">
    //         <div className="flex items-center justify-center w-1/2">
    //           <div className="h-1/4 w-2/5">
    //             <InputwithButton />
    //           </div>
    //         </div>
    //         <div className=" w-1/2 p-10 px-10">
    //           <OptionTable />
    //         </div>
    //       </div>

    //       <div className="h-2/5 mt-8">
    //         <div className="flex flex-row h-full justify-evenly">
    //           <div className="w-1/3">
    //             <OptionTable />
    //           </div>
    //           <div className="w-1/3">
    //             <OptionTable />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;
