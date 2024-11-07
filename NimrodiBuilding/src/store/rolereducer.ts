import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import roles from "../data/roles.json"

//FILL HERE 3.2
const initialState = {
    role: roles[0]
};

interface roleState{
    role: string
};

export const floorSlice  = createSlice({
    name: "access",
    initialState,
    reducers: {
        changeAccess: (state: roleState, action: PayloadAction<number>) => {
            if(!state.floorAccess[action.payload]){
                state.floorAccess[action.payload] = true
            }
            state.floorAccess[action.payload] = false
        }
    }
})
