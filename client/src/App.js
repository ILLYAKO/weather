import "./App.css";
import NavbarTop from "./components/particles/NavbarTop";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import RegisterPage from "./components/pages/RegisterPage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavbarTop />
          <Switch>
            <Route path="/register">
              <RegisterPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
