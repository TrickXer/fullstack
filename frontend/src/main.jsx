/* eslint-disable no-unused-vars */
import './index.css'
import React from 'react'
import App from './App.jsx'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { BRouter } from 'simple-react-router-x'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './components/sk/state/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BRouter>
      <Provider store={store}>
        {/* <PersistGate loading={false} persistor={persistor}> */}
          <App />
        {/* </PersistGate> */}
      </Provider>
    </BRouter>
  </React.StrictMode>,
)
