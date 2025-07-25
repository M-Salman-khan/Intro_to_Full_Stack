import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard";
const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App