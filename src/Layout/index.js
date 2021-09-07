import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { listProjects } from "../utils/api";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../HomePage";
import About from "../About";
import NotFound from "./NotFound";
import "./Layout.css";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

function Layout() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const ctrl = new AbortController();
    listProjects(ctrl.signal).then(setProjects).catch(console.error);

    return () => ctrl.abort();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage projects={projects} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio projects={projects} />
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
