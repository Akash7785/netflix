import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { useNavigate } from "react-router-dom";
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

  const handleGptContainer = () => {
    dispatch(toggleGpt());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
      <div className="flex flex-col">
        <div className=" flex justify-between items-center absolute p-5 w-full  bg-gradient-to-b from-black z-50  max-sm:p-1 max-sm:flex-col max-sm:bg-black  ">
          <div>
            <img
              className="w-48 mx-20  max-sm:w-36 max-sm:mx-0 max-sm:bg "
              src={logo}
              alt="logo"
            />
          </div>

          {user && (
            <div className="flex max-sm:justify-between">
              {gpt ? (
                <select
                  className="mx-2 bg-gray-500 text-white rounded-lg"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              ) : (
                ""
              )}
              <button
                onClick={handleGptContainer}
                className="bg-gray-900 text-white font-semibold p-2 rounded-md  max-sm:p-1 max-sm:mx-2"
              >
                {gpt ? "Browse Page" : "GPT Search"}
              </button>
              <img
                className="w-12 mx-3 rounded-md  max-sm:hidden"
                src={user?.photoURL}
                alt="user"
              />
              <button
                onClick={handleSignOut}
                className="bg-red-700  text-white font-semibold p-2 rounded-md max-sm:p-1 max-sm:mx-2"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
