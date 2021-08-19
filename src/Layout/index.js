import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../HomePage";
import NotFound from "./NotFound";
import "./index.css";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <NotFound />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
