import Graphcontent from "./GraphContent";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function ChartMaps() {
  return (
    <div className="m-0 h-screen">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className=" md:w-4/5">
          <div>
            <Navbar pageTitle="Charts and Maps" />
          </div>
          <div className="p-5"><Graphcontent/></div>
        </div>
      </div>
    </div>
  );
}

export default ChartMaps;
