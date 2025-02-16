import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Machine {
  id: string
  name: string
  status: string
  latitude: number
  longitude: number
}

interface MachinesState {
  list: Machine[]
}

const initialState: MachinesState = {
  list: [],
}

const machinesSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    setMachines(state, action: PayloadAction<Machine[]>) {
      state.list = action.payload
    },
    updateMachineStatus(state, action: PayloadAction<{ id: string; status: string }>) {
      const machine = state.list.find((m) => m.id === action.payload.id)
      if (machine) {
        machine.status = action.payload.status
      }
    },
  },
})

export const { setMachines, updateMachineStatus } = machinesSlice.actions
export default machinesSlice.reducer

