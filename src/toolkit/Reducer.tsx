import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contact {
  id: number;
  fName: string;
  lName: string;
  status: string;
}

interface ContactState {
  items: Contact[];
}

const initialState: ContactState = {
  items: [],
};

const ContactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addToContact: (state, action: PayloadAction<Contact>) => {
      state.items.push(action.payload);
    },
    emptyContact: (state) => {
      state.items = [];
    },
    removeFromContact: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `Can't remove contact (id: ${action.payload}) as it's not in the tasks!`
        );
      }
    },
    editContact: (
      state,
      action: PayloadAction<{ id: number; updatedContact: Contact }>
    ) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.items[index] = action.payload.updatedContact;
      } else {
        console.warn(
          `Can't edit contact (id: ${action.payload.id}) as it's not in the contacts!`
        );
      }
    },
  },
});

export const { addToContact, emptyContact, removeFromContact, editContact } =
  ContactSlice.actions;

export default ContactSlice.reducer;
