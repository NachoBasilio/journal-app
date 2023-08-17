import { Routes, Route } from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"
import JournalRoutes from "../journal/routes/JournalRoutes"

export default function AppRouter() {
  return (
    <Routes>
        <Route path="auth/*" element={<AuthRoutes/>} />
        {/* Aqui seria le login y registro */}
        <Route path="/*" element={<JournalRoutes/>} />
        {/* La app */}
    </Routes>
  )
}
