import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'

import {
  AppDispatch,
  AppState,
} from './'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
