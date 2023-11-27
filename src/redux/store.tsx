import { configureStore } from '@reduxjs/toolkit'
import mailReducer from './mailSlice'
import { loggerMiddleware } from './middleware'

export const store = configureStore({
  reducer: mailReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch