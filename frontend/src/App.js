import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Sidebar from "./components/Sidebar";
import { useUserAuth } from "./context/userContext";
import { Route, Routes } from "react-router-dom";

function App() {
  const { isAuthen,user}=useUserAuth();

  return ( 
    <div className=" min-h-screen bg-gradient-to-br from-red-100 to-red-200">
      {/* <Home /> */}
      <Routes>
      <Route path="/login" element={<SignUp />} />
      <Route path="/*" element={isAuthen ? <Home /> : <SignUp />} />
    </Routes>
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
