import './App.css'
import './normalize.css'
import { Outlet } from 'react-router-dom'
import Navbar from './componentes/navbar'

function App() {
  return (
    <div>
      < Navbar/>
      <h1>Teste React Router</h1>
      <Outlet />
    </div>
  )
}

export default App
