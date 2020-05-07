import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Reviews from "./components/reviews.component.js";
import EditReviews from "./components/editReviews.component.js";
import CreateReviews from "./components/createReviews.component.js";


class App extends Component {
  render() {
    return (
    <Router>
        <div className="container">
          <h2>Game Review</h2>
        </div>
        <Route path="/" exact component={Reviews} />
        <Route path="/edit/:id" component={EditReviews} />
        <Route path="/create" component={CreateReviews} />
    </Router>
    );
  }
}

export default App;
