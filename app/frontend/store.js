import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector, useStore } from "react-redux"
import { flashSlice } from "./slices/flash"
import { userSlice } from "./slices/user"
import {
  beforeVisit,
  beforeFetch,
  beforeRemote,
  rootReducer
} from "@thoughtbot/superglue"
import { pomodoroSlice } from "./slices/pomodoro"

const { pages, superglue } = rootReducer

export const store = configureStore({
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [beforeFetch.type, beforeVisit.type, beforeRemote.type]
      }
    }),
  reducer: {
    superglue,
    pages,
    flash: flashSlice.reducer,
    user: userSlice.reducer,
    pomodoro: pomodoroSlice.reducer
  }
})

export const useAppDispatch = useDispatch.withTypes()
export const useAppSelector = useSelector.withTypes()
export const useAppStore = useStore.withTypes()