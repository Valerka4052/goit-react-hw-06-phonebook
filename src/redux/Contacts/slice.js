import { createSlice } from '@reduxjs/toolkit';


export const myContactsSlice = createSlice({
    name: 'myContacts',
    initialState: [],
    reducers: {
        addContact(state, action) {
            return state = [...state, action.payload]
        },
        deleteContact(state, action) {
            const filteredContacts = state.filter((contact) => {
                return contact.id !== action.payload;
            });
            return filteredContacts;
        },
    }
});
export const { addContact, deleteContact } = myContactsSlice.actions;
