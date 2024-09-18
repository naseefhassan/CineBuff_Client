import { Route, Routes } from "react-router-dom";
import AuthenticationPage from "./Pages/AuthenticationPage";
import Home from "./Pages/Home";
import AuthGraud from "./RouteGuard/AuthGraud";

function App() {
  return (
    <>
      <Routes>
       
          <Route path="/auth/*" element={<AuthenticationPage />}></Route>
        <Route path="/" element={<AuthGraud />}>
          <Route path="/*" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
