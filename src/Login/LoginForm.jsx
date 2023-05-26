import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";


function LoginForm() {
  const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  let location = useLocation();

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (email === loggedUser.email) {
          console.log(loggedUser.email);
          form.reset();
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
        swal("Opss!", error.message, "error")
      });
  };

  const googleHandleBtn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const loggeduser = result.user;
        console.log(loggeduser);
        navigate(from, { replace: true });

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const gitHubHandleBtn = () => {
    gitHubSignIn(gitHubProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        const loggeduser = result.user;
        console.log(loggeduser);
        navigate(from, { replace: true });
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <div className="border rounded-lg bg-white shadow-md mt-5 w-[50%] mx-auto p-8">
        <h1 className="font-bold text-xl text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="py-4">
            <p>
              Don't Have a Account?{" "}
              <Link className="text-blue-400" to="/register">
                Create a New One
              </Link>{" "}
            </p>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md mb-4 w-full"
          >
            Login
          </button>
        </form>
        <div className="lg:flex justify-between">
          <button
            onClick={googleHandleBtn}
            className="bg-white shadow-lg border rounded-lg flex items-center gap-2 text-black font-bold py-2 px-4 rounded-md mr-2"
          >
            <FaGoogle />
            Login with Google
          </button>
          <button
            onClick={gitHubHandleBtn}
            className="bg-white shadow-lg border rounded-lg flex items-center gap-2 text-black font-bold py-2 px-4 rounded-md mr-2"
          >
            <FaGithub />
            Login with Github
          </button>
        </div>
        {/* <p className="text-red-500">{error}</p> */}
      </div>
    </>
  );
}

export default LoginForm;
