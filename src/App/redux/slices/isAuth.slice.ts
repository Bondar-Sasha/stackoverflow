import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface InitialState {
  isAuth: boolean
  id: number
}

const initialState: InitialState = {
  isAuth: false,
  id: -1,
}

const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },
  },
})

export const selectorIsAuth = (state: RootState) => state.isAuthReducer.isAuth
export const selectorId = (state: RootState) => state.isAuthReducer.id
export const { setIsAuth, setId } = isAuthSlice.actions

export default isAuthSlice.reducer
