import { Routes, Route } from "react-router-dom"
import Login from "./pages/login.tsx"
import Home from "./pages/home.tsx"
import './App.css'

function App() {

  return (     
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  
  )

  


}

export default App
