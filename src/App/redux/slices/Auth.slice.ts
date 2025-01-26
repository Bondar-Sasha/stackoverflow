import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface InitialState {
  isAuth: boolean
  waitingForAuth: boolean
  id: number | null
}

const initialState: InitialState = {
  isAuth: false,
  waitingForAuth: false,
  id: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<InitialState['isAuth']>) => {
      state.isAuth = action.payload
    },
    setWaitingForAuth: (
      state,
      action: PayloadAction<InitialState['waitingForAuth']>
    ) => {
      state.waitingForAuth = action.payload
    },
    setId: (state, action: PayloadAction<InitialState['id']>) => {
      state.id = action.payload
    },
  },
})

export const selectorIsAuth = (state: RootState) => state.authReducer.isAuth
export const selectorId = (state: RootState) => state.authReducer.id
export const selectorWaitingForAuth = (state: RootState) =>
  state.authReducer.waitingForAuth
export const { setIsAuth, setId, setWaitingForAuth } = authSlice.actions

export default authSlice.reducer
