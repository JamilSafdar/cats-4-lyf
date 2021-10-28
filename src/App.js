import './App.css';
import Home from './Home'
import Contacts from './Contacts'
import About from './About'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
  
function App() {
  return (
    <Router>
      <div className="App">
        
        {/* ANYTHING HERE WILL BE PERMANENTLY SHOWN */}
        <Navbar/>

        <div className = "content">
          <Switch>
            
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route exact path = "/about">
              <About />
            </Route>

            <Route exact path = "/contact">
              <Contacts />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

