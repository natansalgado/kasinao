import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface UserState {
  name: string
  cash: number
  actived: string
}

const initialState: UserState = {
  name: 'none',
  cash: 0,
  actived: 'mine'
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
    }
  }
})

export const { removeCash, addCash, active } = userSlice.actions

export const user = (state: RootState) => state.user.name

export default userSlice.reducer