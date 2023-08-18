import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AddContact() {
  return (
    <div className="m-0 h-screen">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className=" md:w-4/5">
          <div><Navbar/></div>
          <div className="p-10">add contacts</div>
        </div>
      </div>
    </div>
  )
}

export default AddContact

