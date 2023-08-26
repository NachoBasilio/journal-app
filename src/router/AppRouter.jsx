import { Routes, Route, Navigate } from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"
import JournalRoutes from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"

import { useCheckAuth } from "../hooks/useCheckAuth"

export default function AppRouter() {
  const {status} = useCheckAuth()
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
