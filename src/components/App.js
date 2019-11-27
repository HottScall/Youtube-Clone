import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";

class App extends React.Component {
  onTermSubmit = term => {
    youtube.get("/search", {
      params: {
        q: "term"
      }
    });
  };
  render() {
    return (
      <div className="ui-container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
