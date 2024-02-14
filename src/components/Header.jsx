import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptContainer = () => {};

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className=" flex justify-between items-center absolute p-5 w-full  bg-gradient-to-b from-black z-50 ">
        <div>
          <img className="w-48 mx-20" src={logo} alt="logo" />
        </div>
        <div></div>
        {user && (
          <div className="flex">
            <button
              onClick={handleGptContainer}
              className="bg-gray-900 text-white font-semibold p-2 rounded-md"
            >
              GPT Search
            </button>
            <img
              className="w-12 mx-3 rounded-md"
              src={user?.photoURL}
              alt="user"
            />
            <button
              onClick={handleSignOut}
              className="bg-red-700  text-white font-semibold p-2 rounded-md"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
