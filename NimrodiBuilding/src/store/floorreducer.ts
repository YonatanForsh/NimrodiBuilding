//FILL HERE 3.1
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Floor } from "../utils/BuildingDataProvider"


const initialState = {
    floorAccess:  [false, false, false, false, false]
};

interface accessState{
    floorAccess:  boolean[]
}

export const floorSlice  = createSlice({
    name: "access",
    initialState,
    reducers: {
        changeAccess: (state: accessState, action: PayloadAction<number>) => {
            if(!state.floorAccess[action.payload]){
                state.floorAccess[action.payload] = true
            }
            state.floorAccess[action.payload] = false
        }
    }
})
