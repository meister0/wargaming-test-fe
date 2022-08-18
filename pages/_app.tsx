import 'nextjs-breadcrumbs/dist/index.css'

import type { AppProps } from 'next/app'
import { withStore } from '~/components/hocs/withStore'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withStore(App)
