import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface InventoryState {
  [item: string]: number
}

const initialState: InventoryState = {}

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    updateInventory(state, action: PayloadAction<{ item: string; quantity: number }>) {
      const { item, quantity } = action.payload
      state[item] = quantity
    },
  },
})

export const { updateInventory } = inventorySlice.actions
export default inventorySlice.reducer

