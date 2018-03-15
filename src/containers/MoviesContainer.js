import React, {Component} from "react";
import TitleBar from '../components/TitleBar';
import MoviesList from '../components/MoviesList';
import API_KEY from '../API_KEY';

class MoviesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    // const space = / /gi;
    // const moviesTitleModifier = moviesTitle.replace(space, "+");
    const url = 'http://www.omdbapi.com/?s=' + "guardian" + '&apikey=' + API_KEY
    const request = new XMLHttpRequest()
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const moviesList = JSON.parse(jsonString);
        console.log(moviesList);
        this.setState({movies: moviesList});
      }
    });
    request.send();
  }

  render(){
    return <MoviesList movies={this.state.movies} />
  }
}





export default MoviesContainer;
