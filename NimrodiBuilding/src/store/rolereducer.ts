import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from "../data/roles.json"
import { act } from "react-dom/test-utils";

//FILL HERE 3.2
const initialState = {
    role: roles[0]
};

interface roleState{
    role: string
};

export const roleSlice  = createSlice({
    name: "role",
    initialState,
    reducers: {
        setRole: (state: roleState, action: PayloadAction<number>) => {
            const role: string = roles[action.payload]
            state.role = role            
        }   
    }
});
