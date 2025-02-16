import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type UserRole = "operator" | "manager" | "technician"

interface AuthState {
  isLoggedIn: boolean
  username: string | null
  role: UserRole | null
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: null,
  role: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string; role: UserRole }>) {
      state.isLoggedIn = true
      state.username = action.payload.username
      state.role = action.payload.role
    },
    logout(state) {
      state.isLoggedIn = false
      state.username = null
      state.role = null
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer

