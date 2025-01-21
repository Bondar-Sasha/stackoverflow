import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface InitialState {
  isAuth: boolean
}

const initialState: InitialState = {
  isAuth: false,
}

const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
})

export const selectorIsAuth = (state: RootState) => state.isAuthReducer.isAuth
export const { setIsAuth } = isAuthSlice.actions

export default isAuthSlice.reducer
