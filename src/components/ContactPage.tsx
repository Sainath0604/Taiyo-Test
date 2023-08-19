import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromContact, editContact } from "../toolkit/Reducer";
import {
  BigCancelIcon,
  CancelIcon,
  DeleteIcon,
  EditIcon,
  UpdateIcon,
} from "../Icons/Icons";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
interface Contact {
  id: number;
  fName: string;
  lName: string;
  status: string;
}

function ContactPage() {
  const dispatch = useDispatch();
  const [editedContact, setEditedContact] = useState<Contact | null>(null);

  const storedContacts: Contact[] = JSON.parse(
    localStorage.getItem("contacts") || "[]"
  );
  const [contact, setContact] = useState<Contact[]>(storedContacts);

  const contactLength = contact.length;

  function handleDelete(id: number) {
    try {
      dispatch(removeFromContact(id));
      const updatedContacts = contact.filter((contact) => contact.id !== id);
      setContact(updatedContacts);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      console.log("removed");
    } catch (error) {
      console.log("failed to remove");
    }
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  function handleEdit(id: number) {
    console.log("edit");
    const contactToEdit = contact.find((item) => item.id === id);
    if (contactToEdit) {
      setEditedContact(contactToEdit);
    }
  }

  function handleUpdate() {
    try {
      if (editedContact) {
        dispatch(
          editContact({ id: editedContact.id, updatedContact: editedContact })
        );

        const updatedContacts = contact.map((contact) =>
          contact.id === editedContact.id ? editedContact : contact
        );
        setContact(updatedContacts);
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        setEditedContact(null);
      }
    } catch (error) {
      console.log("failed to update");
    }
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className=" md:w-4/5">
          <div>
            <Navbar pageTitle="Contact Page" />
          </div>
          <div className="lg:p-5 mb-5">
            {contactLength === 0 ? (
              <div className="flex flex-col gap-8 p-2">
                <div className="flex justify-center">
                  <Link to="/addContact">
                    <button className="border border-black rounded-md bg-gray-300 py-2 px-4 text-xl font-semibold">
                      Create contact
                    </button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <div className="flex-col lg:flex-row border border-black rounded-md bg-gray-300 p-4 text-xl font-semibold lg:w-1/2 flex justify-center gap-10">
                    <div className="flex justify-center text-3xl font-semibold">
                      <BigCancelIcon />
                    </div>
                    <div className="flex flex-col text-3xl font-semibold">
                      <span>No Contact Found</span>
                      <span>Please add contact from</span>
                      <span>Create Contact Button</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4 p-2 justify-center items-center">
                <div className="flex items-center gap-6 lg:gap-64">
                  <h1 className="text-center text-red-700 font-semibold lg:font-bold lg:text-3xl">
                    Contacts
                  </h1>
                  <Link to="/addContact">
                    <button className="border border-black rounded-md bg-gray-300 p-1 lg:py-2 lg:px-4 lg:font-semibold">
                      Create new contact
                    </button>
                  </Link>
                </div>
                {contact.map((item) => (
                  <div
                    className="w-full border p-2 lg:w-[45vw] bg-[#f6f9fa] rounded-lg text-[#903d2f]"
                    key={item.id}
                  >
                    {editedContact && editedContact.id === item.id ? (
                      <div className="flex flex-col lg:flex-row justify-between lg:gap-8 lg:p-5">
                        <div className="flex flex-col gap-2 p-2">
                          <div className="flex gap-2 items-center">
                            <label className="mr-2 w-20">First Name</label>
                            <input
                              className="border rounded-lg p-2 text-black"
                              type="text"
                              value={editedContact.fName}
                              onChange={(e) =>
                                setEditedContact({
                                  ...editedContact,
                                  fName: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="flex gap-2">
                            <label className="mr-2 w-20">Last Name</label>
                            <span>
                              <input
                                className="border rounded-lg p-2 text-black"
                                type="text"
                                value={editedContact.lName}
                                onChange={(e) =>
                                  setEditedContact({
                                    ...editedContact,
                                    lName: e.target.value,
                                  })
                                }
                              />
                            </span>
                          </div>
                          <div className="flex flex-row p-2 items-center">
                            <div className="w-20 lg:w-24">Status:</div>
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center gap-2">
                                <input
                                  type="radio"
                                  className="h-5 w-5 text-blue-600"
                                  name="status"
                                  value="Active"
                                  checked={editedContact.status === "Active"}
                                  onChange={(e) =>
                                    setEditedContact({
                                      ...editedContact,
                                      status: e.target.value,
                                    })
                                  }
                                />
                                <label className="">Active</label>
                              </div>
                              <div className="flex items-center gap-2">
                                <input
                                  type="radio"
                                  className="h-5 w-5 text-blue-600"
                                  name="status"
                                  value="Inactive"
                                  checked={editedContact.status === "Inactive"}
                                  onChange={(e) =>
                                    setEditedContact({
                                      ...editedContact,
                                      status: e.target.value,
                                    })
                                  }
                                />
                                <label className="">Inactive</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" flex flex-col lg:gap-4">
                          <div className="flex justify-center">
                            <h1 className="hidden lg:block">Actions</h1>
                          </div>
                          <div className="flex flex-row gap-6 lg:gap-2 justify-center">
                            <button
                              className="flex gap-1 items-center rounded-md border bg-[#ee7c68] text-white p-2"
                              onClick={handleUpdate}
                            >
                              <div className="flex gap-1 items-center">
                                <span>Save</span>
                                <span>
                                  <UpdateIcon />
                                </span>
                              </div>
                            </button>
                            <button
                            className="flex gap-1 items-center rounded-md border bg-[#ee7c68] text-white p-2"
                              onClick={() => setEditedContact(null)}
                            >
                              <span>Cancel</span>
                              <span>
                                <CancelIcon />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8 p-2">
                        <div>
                          <div className="p-2 flex gap-2">
                            <span>First name: </span>
                            <span className="text-[#000] font-medium">
                              {item.fName}
                            </span>
                          </div>
                          <div className="p-2 flex gap-2">
                            <span>Last name: </span>
                            <p className="text-[#000] font-medium">
                              {item.lName}
                            </p>
                          </div>
                          <div className="p-2 flex gap-2">
                            <span>Status:</span>
                            <span className="text-[#000] font-medium">
                              {item.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex lg:flex-col gap-4 items-center mt-2 lg:mt-0">
                          <div className="flex justify-center">
                            <h1 className="hidden lg:block">Actions</h1>
                            <h1 className="block lg:hidden">Actions:</h1>
                          </div>
                          <div className="flex flex-row gap-2">
                            <button
                              className="flex gap-1 items-center rounded-md border bg-[#ee7c68] text-[#fff] p-2"
                              onClick={() => handleDelete(item.id)}
                            >
                              <span>Delete</span>
                              <span>
                                <DeleteIcon />
                              </span>
                            </button>
                            <button
                              className="flex gap-1 items-center rounded-md border bg-[#ee7c68] text-[#fff] p-2"
                              onClick={() => handleEdit(item.id)}
                            >
                              <span>Edit</span>
                              <span>
                                <EditIcon />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
