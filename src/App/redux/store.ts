import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import {
  registrationControls,
  loginControls,
  getUserControls,
} from '../../Features'

const rootReducer = combineReducers({
  [registrationControls.registrationApi.reducerPath]:
    registrationControls.registrationApi.reducer,
  [loginControls.loginApi.reducerPath]: loginControls.loginApi.reducer,
  [getUserControls.getUserApi.reducerPath]: getUserControls.getUserApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(registrationControls.registrationApi.middleware)
        .concat(loginControls.loginApi.middleware)
        .concat(getUserControls.getUserApi.middleware)
    },
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
