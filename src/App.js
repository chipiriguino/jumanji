
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Clock from "./components/Clock.jsx";

function App() {
  
  return (
    <div>
<BrowserRouter>
<Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/clock" component={Clock}/>
        </Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
