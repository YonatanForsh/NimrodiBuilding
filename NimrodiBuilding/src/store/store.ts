// FILL HERE 3.3

import { configureStore } from "@reduxjs/toolkit";
import { floorSlice } from "./floorreducer";
import { roleSlice } from "./Rolereducer";

export default configureStore({
    reducer: {
      floors: floorSlice.reducer,
      roles: roleSlice.reducer,
    },
  });
  
  export const {
    changeAccess,
    setRole
  } = {
    ...floorSlice.actions,
    ...roleSlice.actions
};