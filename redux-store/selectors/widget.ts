import { AppState } from '../'

export const base = (state: AppState) => state.widget

export const items = (state: AppState) => state.widget.items
export const selectedItems = (state: AppState) => state.widget.selectedItems
