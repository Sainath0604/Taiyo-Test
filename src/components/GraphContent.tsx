import { useState } from "react";
import LineGraph from "./LineGraph";
import LeafletMap from "./LeafletMap";

function Graphcontent() {
  const [activeComponent, setActiveComponent] = useState("LineGraph");

  const handleButtonClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded-md shadow-lg h-[80vh]">
      <div className="flex w-full">
        <button
          className={`border border-gray-300 py-3 text-xl bg-gray-100 font-semibold w-1/2 ${
            activeComponent === "LineGraph"
              ? "border-b-4 border-b-purple-700"
              : ""
          }`}
          onClick={() => handleButtonClick("LineGraph")}
        >
          Line Graph
        </button>
        <button
          className={`border border-gray-300 w-1/2 py-3 text-xl bg-gray-100 font-semibold ${
            activeComponent === "LeafletMap"
              ? "border-b-4 border-b-purple-700"
              : ""
          }`}
          onClick={() => handleButtonClick("LeafletMap")}
        >
          Leaflet Map
        </button>
      </div>
      <div className="p-2">
        {activeComponent === "LineGraph" && <LineGraph />}
        {activeComponent === "LeafletMap" && <LeafletMap />}
      </div>
    </div>
  );
}

export default Graphcontent;
