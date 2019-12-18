import React from "react";
import MovieRankListEntry from "./MovieRankListEntry";

export default function MovieRankList(props) {
  if (props.movies === null) {
    return null;
  }
  const arr = props.movies;
  const mapArr = arr.map(ele => (
    <MovieRankListEntry
      key={ele.id}
      movie={ele}
      handleCardClick={props.handleCardClick}
      submitId={props.submitId}
    />
  ));
  return <div className="right-movie-list">{mapArr}</div>;
}
