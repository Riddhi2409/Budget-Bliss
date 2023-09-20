import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
// import { useUserAuth } from "../context/UserAuth";
import { useUserAuth } from "../context/userContext";

function Login(props) {
  const { login } = useUserAuth();

    const successMessage = (Response) => {
        login(Response)
       
    }

  const errorMessage = (error) => {

  };

  return ( 
    < div className="bg-todo-pattern w-screen h-screen flex justify-center items-center">
      <div className="h-16  bg-white flex justify-center items-center">
        <GoogleLogin onSuccess={successMessage} onError={errorMessage}  />
        </div>
    </div>
  );
}

export default Login;