import { useEffect, useRef, useState, ChangeEvent } from "react";
import * as Toast from "@radix-ui/react-toast";
import { useDispatch } from "react-redux";
import { addToContact, emptyContact } from "../toolkit/Reducer";
import { AppDispatch } from "../toolkit/Store";
import { CreateIcon } from "../Icons/Icons";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Contact {
  id: number;
  fName: string;
  lName: string;
  status: string;
}

interface AddContactProps {}

const AddContact: React.FC<AddContactProps> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [fName, setFname] = useState<string>("");
  const [lName, setLname] = useState<string>("");
  const [status, setStatus] = useState<string>("Active");

  const handleFname = (e: ChangeEvent<HTMLInputElement>) => {
    setFname(e.target.value);
  };
  const handleLname = (e: ChangeEvent<HTMLInputElement>) => {
    setLname(e.target.value);
  };

  const handleStatus = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  function handleAddTask() {
    try {
      dispatch(
        addToContact({
          id: Date.now(),
          fName: fName,
          lName: lName,
          status: status,
        })
      );

      const contacts: Contact[] = JSON.parse(
        localStorage.getItem("contacts") || "[]"
      );
      contacts.push({
        id: Date.now(),
        fName: fName,
        lName: lName,
        status: status,
      });
      localStorage.setItem("contacts", JSON.stringify(contacts));

      setFname("");
      setLname("");
      setStatus("Active");
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    const storedContacts: Contact[] = JSON.parse(
      localStorage.getItem("contacts") || "[]"
    );
    if (storedContacts.length > 0) {
      dispatch(emptyContact());
      storedContacts.forEach((contact) => dispatch(addToContact(contact)));
    }
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div className="h-screen">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className=" md:w-4/5">
          <div>
            <Navbar pageTitle="Contact Page" />
          </div>
          <div>
            <div className="p-5 flex justify-center">
              <div className="mb-2 flex  min-w-full flex-col gap-y-2 p-2 rounded-lg">
                <div className="flex justify-center p-1">
                  <h1 className="text-[#ee7c68] text-2xl font-semibold">
                    Create contact
                  </h1>
                </div>
                <div className="flex flex-col items-center text-[#b44e3c] gap-y-2 lg:p-4 lg:m-2 lg:border">
                  <div>
                    <div className="flex flex-row gap-2 p-2 items-center">
                      <div className="w-20 lg:w-24">First Name:</div>
                      <input
                        value={fName}
                        placeholder="First Name"
                        className="border rounded-lg p-2 text-black"
                        onChange={handleFname}
                      />
                    </div>
                    <div className="flex flex-row gap-2 p-2 items-center">
                      <div className="w-20 lg:w-24">Last Name: </div>
                      <div>
                        <input
                          value={lName}
                          className="border rounded-lg p-2 text-black"
                          placeholder="Last Name"
                          onChange={handleLname}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 p-2 items-center">
                      <div className="w-20 lg:w-24">Status:</div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            className="h-5 w-5 text-blue-600"
                            name="status"
                            value="Active"
                            checked={status === "Active"}
                            onChange={handleStatus}
                          />
                          <label className="">Active</label>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                          <input
                            type="radio"
                            className="h-5 w-5 text-blue-600"
                            name="status"
                            value="Inactive"
                            checked={status === "Inactive"}
                            onChange={handleStatus}
                          />
                          <label className="">Inactive</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-2 flex  justify-center p-1">
                  <Toast.Provider swipeDirection="right">
                    <button
                      className="flex flex-row items-center gap-2 bg-[#ee7c68] text-[#fff] p-2 rounded-md"
                      onClick={() => {
                        setOpen(false);
                        window.clearTimeout(timerRef.current);
                        timerRef.current = window.setTimeout(() => {
                          setOpen(true);
                        }, 100);
                        handleAddTask();
                      }}
                    >
                      <span>Save contact</span>
                      <span className="text-2xl">
                        <CreateIcon />
                      </span>
                    </button>

                    <Toast.Root
                      duration={2000}
                      className="bg-[#121212] text-white rounded-sm px-4 py-2 shadow-sm shadow-black fixed bottom-5 right-5 lg:right-16 max-w-xs"
                      open={open}
                      onOpenChange={setOpen}
                    >
                      <Toast.Title className="ToastTitle">Contact saved</Toast.Title>
                    </Toast.Root>
                    <Toast.Viewport className="ToastViewport" />
                  </Toast.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
