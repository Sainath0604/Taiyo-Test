import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
// import HeadLogo from "../Logos/React_Assigment_Amber_icon.png";
import MobileSidebar from "./MobileSidebar";
import {
  AddContactIcon,
  ContactIcon,
  CrossIcon,
  HamburgerIcon,
  MapIcon,
} from "../Icons/Icons";

function Sidebar() {
  return (
    <>
      <div className="hidden md:block w-1/5 bg-white border-r min-h-screen">
        <div className="flex flex-col text-gray-800 ">
          <div className="flex items-center gap-4 border-b h-20 p-4 text-lg lg:ml-4">
            <div className="font-semibold cursor-pointer">
              <Link to="#">Taiyo.AI-Test</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="text-sm lg:text-xs flex flex-col gap-4">
              <div className="flex flex-col gap-2 px-2 mt-2">
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
        </div>
      </div>

      {/* For mobile screen */}

      <Disclosure as="nav" className="bg-white block md:hidden h-1/5">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 bg-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="block h-6 w-6">
                        <CrossIcon />
                      </div>
                    ) : (
                      <div className="block h-6 w-6">
                        <HamburgerIcon />
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex items-center gap-4 h-20 p-4 text-lg">
                      <div className="font-semibold cursor-pointer">
                        <Link to="#">Taiyo.AI-Test</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <MobileSidebar />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Sidebar;
