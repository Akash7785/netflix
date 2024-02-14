import React, { useRef, useState } from "react";
import backgroundImage from "../assets/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "=" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={backgroundImage} alt="logo" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0  rounded-md bg-opacity-80 "
      >
        {isSignInForm ? (
          <h1 className="p-1 mb-4 text-white font-bold text-3xl">Sign In</h1>
        ) : (
          <>
            <h1 className="p-1 mb-4 text-white font-bold text-3xl">Sign Up</h1>
            <input
              ref={name}
              className="border w-full bg-gray-300 border-black m-2 p-2 rounded-md "
              type="text"
              placeholder="Enter Name"
            />
          </>
        )}
        <input
          ref={email}
          className="border w-full bg-gray-300 border-black m-2 p-2 rounded-md"
          type="text"
          placeholder="Enter Email"
        />
        <input
          ref={password}
          className="border w-full bg-gray-300 border-black m-2 p-2 rounded-md"
          type="password"
          placeholder="Enter Password"
          autoComplete="current-password"
        />
        <p className="font-bold text-red-500 p-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="bg-[#E50914] text-white  w-full text-md font-semibold border rounded-md border-black m-2 p-2"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="text-gray-300 m-2">
            New to Netflix? <span> </span>
            <span
              onClick={toggleSignInForm}
              className="font-semibold text-white cursor-pointer"
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-gray-300 m-2">
            Account created ?
            <span
              onClick={toggleSignInForm}
              className="font-semibold text-white cursor-pointer"
            >
              <span> </span> Sign in now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
