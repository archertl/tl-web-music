import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import routes from './router'

import TLAppHeader from './components/app-header'
import TLAppFooter from './components/app-footer'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <TLAppHeader />
          {renderRoutes(routes)}
        <TLAppFooter />
      </HashRouter>
    </Provider>

  )
})
