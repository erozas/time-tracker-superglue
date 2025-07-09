import { createSlice } from "@reduxjs/toolkit"
import { saveResponse, beforeVisit } from "@thoughtbot/superglue"

const initialState = {
  id: null,
  is_authenticated: false,
  email_address: null,
  username: null,
  slug: null,
  sign_out_form: null
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    },
    signOut(state) {
      return {
        ...initialState
      }
    },
    updateUser(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(beforeVisit, (state, _action) => {
      return state
    })
    builder.addCase(saveResponse, (state, action) => {
      const { page } = action.payload

      if (page.slices.user) {
        return {
          ...state,
          ...page.slices.user
        }
      }

      return state
    })
  }
})

export const { setUser, signOut, updateUser } = userSlice.actions

// Selectors
export const selectUser = (state) => state.user
export const selectIsAuthenticated = (state) => state.user.is_authenticated
export const selectUserId = (state) => state.user.id
export const selectUserEmail = (state) => state.user.email_address
export const selectUsername = (state) => state.user.username
export const selectUserSlug = (state) => state.user.slug
