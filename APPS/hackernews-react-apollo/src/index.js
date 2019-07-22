import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

// Apollo dependencies
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// Construct a link
const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

// Construct a client
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// Wrap the provide and add client in props
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
