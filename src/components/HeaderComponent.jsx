import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGpt } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch);
  const movieDetail = useSelector((store) => store.movies.movieDetail);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

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
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className=" flex justify-between items-center absolute p-5 w-full  bg-gradient-to-b from-black z-50 max-sm:p-2 ">
        <Link to={"/"}>
          <div>
            <img
              className="w-48 mx-20 max-sm:w-24 max-sm:mx-3"
              src={logo}
              alt="logo"
            />
          </div>
        </Link>
        <div></div>
        {user && (
          <div className="flex">
            <img
              className="w-12 mx-3 rounded-md max-sm:hidden"
              src={user?.photoURL}
              alt="user"
            />
            <button
              onClick={handleSignOut}
              className="bg-red-700  text-white font-semibold p-2 rounded-md  max-sm:p-1 max-sm:mx-2"
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
