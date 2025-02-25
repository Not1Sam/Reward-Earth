import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./Components/ProtectedRoute"
import LostPass from "./pages/ForgotPassword.jsx"
import Account from "./pages/Account.jsx"
import BugReport from "./pages/Bug-Report.jsx"
import PrivacyPol from "./pages/Privacy-Policy.jsx"
import { ThemeProvider } from "./Components/ThemeContext.jsx"


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <SignUp />
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<RegisterAndLogout />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/forgotpass" element={<LostPass/>} />
          <Route path="/privacy-policy" element={<PrivacyPol/>} />
          <Route path="/account" element={<Account/>}/>
          <Route path="/bug" element={<BugReport/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App