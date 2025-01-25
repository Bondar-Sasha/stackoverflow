import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import { userApi, questionsApi } from '../../Shared'
import { authReducer } from './slices'

const rootReducer = combineReducers({
  authReducer,
  [userApi.reducerPath]: userApi.reducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(userApi.middleware)
        .concat(questionsApi.middleware)
    },
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
