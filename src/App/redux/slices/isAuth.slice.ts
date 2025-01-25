import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface InitialState {
  isAuth: boolean
  isLoading: boolean
  id: number
}

const initialState: InitialState = {
  isAuth: false,
  isLoading: false,
  id: -1,
}

const isAuthSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload
    },
  },
})

export const selectorIsAuth = (state: RootState) => state.isAuthReducer.isAuth
export const selectorId = (state: RootState) => state.isAuthReducer.id
export const selectorIsLoading = (state: RootState) =>
  state.isAuthReducer.isLoading
export const { setIsAuth, setId, setIsLoading } = isAuthSlice.actions

export default isAuthSlice.reducer
