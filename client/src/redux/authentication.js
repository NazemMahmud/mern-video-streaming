import { createSlice } from '@reduxjs/toolkit'
import {getAccessToken, getUserData} from "../utility/utils";


export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    userData: getUserData(),
    accessToken: getAccessToken
  },
  reducers: {
    handleLogin: (state, action) => {
      state.userData = action.payload;
      state.accessToken = action.payload.accessToken
      // state.refreshToken = action.payload.refreshToken

      localStorage.setItem('userData', JSON.stringify(state.userData))
      localStorage.setItem('accessToken', action.payload.accessToken)
      // localStorage.setItem('refreshToken, JSON.stringify(action.payload.refreshToken))
    },
    handleLogout: state => {
      state.userData = {}
      state.accessToken = null
      // state.refreshToken = null
      // ** Remove user, accessToken & refreshToken from localStorage
      localStorage.removeItem('userData')
      localStorage.removeItem('accessToken')
      localStorage.removeItem('user')
      // localStorage.removeItem('refreshToken')
    }
  }
})

export const { handleLogin, handleLogout } = authSlice.actions

export default authSlice.reducer;
