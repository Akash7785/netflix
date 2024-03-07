import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const ActorCard = ({ profile_photo, name }) => {
  return (
    <div>
      <div className=" px-5 relative mb-5">
        <div className="w-32 h-48   overflow-hidden  rounded-lg">
          <img
            className=" h-48 w-32 hover:scale-105"
            src={IMAGE_CDN_URL + profile_photo}
          />

          <div className="flex items-center justify-center  ">
            <p className="absolute w-32 font-semibold top-36 bg-gradient-to-r from-black  text-center text-sm text-white">
              {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;
