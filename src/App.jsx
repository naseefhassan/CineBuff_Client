import { Route, Routes } from "react-router-dom"
import AuthenticationPage from "./Pages/AuthenticationPage"
import Home from "./Pages/Home"

function App() {
  return (
    <>
    <Routes>
      <Route path="/*" element={<Home/>}></Route>
      <Route path="/auth/*" element={<AuthenticationPage/>}></Route>
    </Routes>
    </>
  )
}

export default App