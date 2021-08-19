import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../HomePage";
import About from "../About";
import NotFound from "./NotFound";
import "./index.css";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <NotFound />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
