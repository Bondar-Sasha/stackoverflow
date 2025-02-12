import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'

import {userApi, questionsApi, postsApi} from '../../Shared'

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [questionsApi.reducerPath]: questionsApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(userApi.middleware)
        .concat(questionsApi.middleware)
        .concat(postsApi.middleware)
    },
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
