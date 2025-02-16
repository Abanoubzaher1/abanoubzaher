import { configureStore } from "@reduxjs/toolkit"
import machinesReducer from "./machinesSlice"
import alertsReducer from "./alertsSlice"
import inventoryReducer from "./inventorySlice"
import settingsReducer from "./settingsSlice"

const store = configureStore({
  reducer: {
    machines: machinesReducer,
    alerts: alertsReducer,
    inventory: inventoryReducer,
    settings: settingsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store

