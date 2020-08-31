import '../styles/normalize.css'
import '../styles/globals.css'

import Header from '../components/MainHeader/Header/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
