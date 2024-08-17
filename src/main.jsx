import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from '../src/store/store.js'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {AddItem, ErrorPage, Home} from './pages'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path: "/",
        element : <Home/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
  
)
