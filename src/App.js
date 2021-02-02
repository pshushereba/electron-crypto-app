import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import theme from "./styles/Theme.js";
import Nav from "./components/Nav.js";

import HomeView from "./views/Home.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/feeds">
            <h1>Twitter Feeds will go here.</h1>
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
