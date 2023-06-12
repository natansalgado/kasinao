import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface UserState {
  cash: number
  actived: string
  isMenuOpen: boolean
}

const initialState: UserState = {
  cash: 0,
  actived: 'settings',
  isMenuOpen: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeCash: (state, action: PayloadAction<number>) => {
      state.cash = state.cash - action.payload
    },
    addCash: (state, action: PayloadAction<number>) => {
      state.cash = state.cash + action.payload
    },
    active: (state, action: PayloadAction<string>) => {
      state.actived = action.payload
    },
    changeMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    }
  }
})

export const { removeCash, addCash, active, changeMenu } = userSlice.actions

export const user = (state: RootState) => state.user

export default userSlice.reducer