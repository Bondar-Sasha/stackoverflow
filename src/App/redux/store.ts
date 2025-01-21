import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { userApi } from '../../Features'
import { isAuthReducer } from './slices'

const rootReducer = combineReducers({
  isAuthReducer,
  [userApi.reducerPath]: userApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(userApi.middleware)
    },
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
