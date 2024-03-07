import React from "react";
import { useSelector } from "react-redux";
import ActorCard from "./Actorcard";

const ActorsCard = () => {
  const actors = useSelector((store) => store.movies.movieActors);
  if (!actors) return;

  return (
    <>
      <div className="flex overflow-x-auto no-scrollbar">
        {actors.map((actor) => (
          <ActorCard
            key={actor.id}
            profile_photo={actor.profile_path}
            name={actor.name}
            character={actor.character}
          />
        ))}
      </div>
    </>
  );
};

export default ActorsCard;
