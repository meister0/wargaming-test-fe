import { common } from '~/helpers'

import { configureStore } from '@reduxjs/toolkit'

import * as actions from './actions'
import { reducers } from './slices'

export { actions }
const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type Actions = typeof actions

if (process.env.NODE_ENV === 'development' && common.isClientSide()) {
  ;(window as any).store = store
}

export default store
