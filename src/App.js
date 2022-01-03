import BookList from "./components/BookList";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import AddBook from "./components/AddBook";

import "./App.css";
import BookDetails from "./components/BookDetails";
import Footer from "./components/Footer";

const client = new ApolloClient({
  uri: "http://localhost:2000/graphql",
});

function App() {
  const [bookId, getBookId] = useState(null);

  const getBookById = (e, bookId) => {
    getBookId(bookId);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>{" "}
          <Route path="/about">
            <About />
          </Route>{" "}
          <Route path="/projects">
            <Project />
          </Route>{" "}
          <Route path="/contact">
            <Contact />
          </Route>{" "}
          <Route exact path="*">
            <Home />
          </Route>{" "}
        </Switch>{" "}
        <Footer />
      </Router>{" "}
    </ApolloProvider>
  );
}

export default App;
