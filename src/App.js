
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";


function App() {
  
  return (
    <div>
<BrowserRouter>
<Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
</BrowserRouter>
    </div>
  );
}

export default App;
