import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ContactType = {
    id: string
    name: string
    number: string
};
type InitialStateType = Array<ContactType>
const initialState:InitialStateType = []

export const myContactsSlice = createSlice({
    name: 'myContacts',
    initialState,
    reducers: {
        addContact(state:InitialStateType, action:PayloadAction<ContactType>){
            return state = [...state, action.payload]
        },
        deleteContact(state:InitialStateType, action: PayloadAction<string>) {
            const filteredContacts = state.filter((contact) => {
                return contact.id !== action.payload;
            });
            return filteredContacts;
        },
    }
});
export const { addContact, deleteContact } = myContactsSlice.actions;
