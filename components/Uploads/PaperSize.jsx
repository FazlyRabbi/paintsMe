import { useState } from "react";

function PaperSize({ name, options }) {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div className="my-6">
      <div className="my-6  flex items-center justify-start space-x-6">
        <div>
          <label className=" font-bold">Paper Size :</label>
        </div>

        <div>
          <select
            className=" appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option>1' x 1'</option>
            <option>2' x 3'</option>
            <option>3' x 4'</option>
            <option value={"custom"}>Custom Size</option>
          </select>
        </div>
      </div>

      {selectedValue === "custom" ? (
        <div>
          <div className="mb-4  flex items-center space-x-[3.6rem]">
            <div>
              <label className="font-bold ">Width :</label>
            </div>

            <input
              className="appearance-none block max-w-[9.5rem] bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
            />
          </div>
          <div className="mb-4  flex items-center space-x-[3.3rem]">
            <div>
              <label className="font-bold ">Height :</label>
            </div>

            <input
              className="appearance-none block max-w-[9.5rem] bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PaperSize;
