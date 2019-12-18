import React from "react";

export default function CurrentMovie(props) {
  if (props.movie === null) {
    return null;
  }
  return (
    <>
      <div className="left-current-side">
        <div className="current-movie">
          <h1 className="title">{props.movie.title}</h1>
          <img className="thumbnail" src={props.movie.medium_cover_image} />
          <p>{`rating : ${props.movie.rating}`}</p>
          <p>{`runtime : ${props.movie.runtime}`}</p>
          <p>description</p>
          <p className="description">{props.movie.summary}</p>
        </div>
      </div>
    </>
  );
}
