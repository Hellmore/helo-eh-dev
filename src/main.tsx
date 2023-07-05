import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./routes/home/index.tsx"
import Contato from "./routes/contato/index.tsx"
import Erro from './routes/Erro/erro.tsx'
import Contatosid from './routes/contato/contatosid.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
    errorElement: < Erro/>,
    children: [
      {
        path: "/",
        element: < Home/>
      },
      {
        path: "Contato",
        element: < Contato/>
      },
      {
        path: "/contato/:id",
        element: <Contatosid/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
