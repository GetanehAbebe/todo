import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Natan from "./pages/Natan";
import Yehuda from "./pages/Yehuda";
import Abraham from "./pages/Abraham";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/natan" component={Natan} exact />
        <Route path="/abraham" component={Abraham} exact />
        <Route path="/yehuda" component={Yehuda} exact />
      </Switch>
    </Router>
  );
}

export default App;
