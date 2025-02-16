import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Alert {
  id: string
  title: string
  description: string
  timestamp: number
}

interface AlertsState {
  list: Alert[]
}

const initialState: AlertsState = {
  list: [],
}

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert(state, action: PayloadAction<Alert>) {
      state.list.unshift(action.payload)
    },
    removeAlert(state, action: PayloadAction<string>) {
      state.list = state.list.filter((alert) => alert.id !== action.payload)
    },
  },
})

export const { addAlert, removeAlert } = alertsSlice.actions
export default alertsSlice.reducer

