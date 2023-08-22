import { Routes, Route, Navigate } from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"
import JournalRoutes from "../journal/routes/JournalRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth/authSlice"
import { useCheckAuth } from "../hooks/useCheckAuth"

export default function AppRouter() {
  const {status} = useCheckAuth()
  console.log(status)
  if(status === "chequeando"){
    return <CheckingAuth/>
  }

  return (
    <Routes>
        {
          status === "autenticado" ?  
          <Route path="/*" element={<JournalRoutes/>} />:
          <Route path="auth/*" element={<AuthRoutes/>} />
        }
          <Route path="/*" element={<Navigate to="/auth/login"/>} />
    </Routes>
  )
}
