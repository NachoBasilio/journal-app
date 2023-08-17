import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Registe from "../pages/Registe"

export default function AuthRoutes() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Registe />} />
        <Route path='/*' element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

