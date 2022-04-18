import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Classes from "./components/classes/Classes";
import Trainers from "./components/trainers/Trainers";
import PricePlans from "./components/price&plans/PricePlans";
import Schedule from "./components/schedule/Schedule";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Switch>
        <Route exact path="/">
          {<Home />}
        </Route>
        <Route exact path="/classes">
          {<Classes />}
        </Route>
        <Route exact path="/trainers">
          {<Trainers />}
        </Route>
        <Route exact path="/priceplans">
          {<PricePlans />}
        </Route>
        <Route exact path="/schedule">
          {<Schedule />}
        </Route>
        <Route exact path="/signup">
          {<Signup />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
