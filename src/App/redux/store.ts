import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { userApiControls } from '../../Features'

const rootReducer = combineReducers({
  [userApiControls.userApi.reducerPath]: userApiControls.userApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(userApiControls.userApi.middleware)
    },
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
