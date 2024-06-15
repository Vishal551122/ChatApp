import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { SocketContextProvider } from './context/SocketContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SocketContextProvider>
        <App/>
        </SocketContextProvider>
      </AuthContextProvider>
    </BrowserRouter>

  </React.StrictMode>,
)
