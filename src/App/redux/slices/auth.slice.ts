import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface AuthState {
  isRegistered: boolean
  isLogin: boolean
}

const initialState: AuthState = {
  isRegistered: false,
  isLogin: false,
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsRegistered: (state, action: PayloadAction<boolean>) => {
      state.isRegistered = action.payload
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    },
  },
})

export const selectorIsRegistered = (state: RootState) =>
  state.authReducer.isRegistered
export const selectorIsLogin = (state: RootState) => state.authReducer.isLogin
export const { setIsRegistered, setIsLogin } = authSlice.actions

export default authSlice.reducer
