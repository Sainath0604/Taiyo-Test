import { Link } from "react-router-dom";
import { AddContactIcon, ContactIcon, MapIcon } from "../Icons/Icons";

export default function MobileSidebar() {
  return (
    <div className="border-b border-t py-2">
      <div className="lg:mt-4 text-xs">
        <div className="flex flex-col gap-2">
          <ul className="flex flex-col text-base">
            <Link to="/">
              <li className="flex items-center gap-4 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <button className="text-lg">
                  <ContactIcon />
                </button>
                <button className="">Contacts</button>
              </li>
            </Link>
            <Link to="/addContact">
              <li className="flex items-center gap-4 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <button className="text-lg">
                  <AddContactIcon />
                </button>
                <button className="">Add contacts</button>
              </li>
            </Link>
            <Link to="/chartMaps">
              <li className="flex items-center gap-4 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <button className="text-lg">
                  <MapIcon />
                </button>
                <button className="">Maps and charts</button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
