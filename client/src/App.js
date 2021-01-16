import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Application from "./private";
import Login from "./login"


function App() {


 return(<div>
   <Router>
     <Switch>
      <Route path="/" exact component={Login}/>
       <Route path="/app" component={Application}/>
     </Switch>
   </Router>
 </div>)
}

export default App;
