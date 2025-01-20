import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

import { UserTypes } from '../../../Features'

const initialState: UserTypes.GetUserResponse['data'] = {
  id: '-1',
  username: '',
  role: '',
}

const authSlice = createSlice({
  name: 'userCredentials',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<UserTypes.GetUserResponse['data']>
    ) => {
      return action.payload
    },
  },
})

export const selectorUser = (state: RootState) => state.userCredentialsReducer
export const { setUser } = authSlice.actions

export default authSlice.reducer
