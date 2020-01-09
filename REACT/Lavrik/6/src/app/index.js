import React from "react";
import styles from "./app.module.css";
import { observer, Provider } from "mobx-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import routes, { routesMap } from "~/routes";
import cart from "~s/cart.js";

@observer
class App extends React.Component {
  render() {
    let routesComponents = routes.map(route => {
      return (
        <Route
          path={route.url}
          component={route.component}
          exact={route.exact}
          key={route.url}
        />
      );
    });

    return (
      <Provider cart={cart}>
        <Router>
          <div className="container">
            header
            <hr />
            <div className="row">
              <div className="col col-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to={routesMap.home}>Home</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to={routesMap.cart}>Cart</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to={routesMap.order}>Order</Link>
                  </li>
                </ul>
              </div>
              <div className="col col-9">
                <Switch>{routesComponents}</Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
