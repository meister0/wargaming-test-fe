import { Provider } from 'react-redux'
import store from '~/redux-store'

// eslint-disable-next-line react/display-name
export const withStore = (Component: any) => (props: any) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}
