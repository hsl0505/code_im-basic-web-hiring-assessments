import React from "react";
import Header from "./Header";
import MovieRankList from "./MovieRankList";
import CurrentMovie from "./CurrentMovie";
// import { movies } from "../fakeData.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: null,
      movies: null
    };
    this.handleCardClick = this.handleCardClick.bind(this);
    this.submitId = this.submitId.bind(this);
  }

  handleCardClick(e) {
    this.setState({
      currentMovie: e
    });
  }

  componentDidMount() {
    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(json => this.setState({ movies: json, currentMovie: json[0] }));
  }

  submitId(id) {
    fetch(`http://localhost:3000/movies/${id}`)
      .then(res => res.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="body">
          <CurrentMovie
            movie={this.state.currentMovie}
            // movies={this.state.movies}
          />
          <MovieRankList
            movies={this.state.movies}
            handleCardClick={this.handleCardClick}
            submitId={this.submitId}
          />
        </div>
      </>
    );
  }
}

export default App;
