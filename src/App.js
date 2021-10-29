
//----------→ REACT IMPORTS ----------→
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//----------→ CSS IMPORTS ----------→
import './App.css';

//----------→ COMPONENT IMPORTS ----------→
import About from './About';
import Product from './components/Product';
import Home from './basilsComponents/Home'; 
import Contacts from './basilsComponents/Contacts';
import Navbar from './basilsComponents/Navbar';
import Basket from './basilsComponents/Basket';


  
//----------→ MAIN FUNCTION ----------→
const App = () => {
  // ↓ useState used to pass cat elements to basket
  const [basket, setBasket] = useState([])

  return (
    <Router>
      <div className="App">
        {/* ANYTHING BEFORE "<Navbar/>" WILL BE PERMANENTLY SHOWN/USED */}
        

        <Navbar/>
        
        <div className = "content">
          <Switch>
            
            <Route exact path="/">
              <Home />
              <Product bket= {basket} sbket = {setBasket}/>
            </Route>
            
            <Route exact path = "/about">
              <About />
            </Route>

            <Route exact path = "/basketList">
              <BasketList/>

              {/* Basket takes 'props'. messsage displays a <h2> tag. total needs to be calculated, then passed in*/}
              <Basket basket={basket}/>
            </Route>

            <Route exact path="/contact">
              <Contacts />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
);
}

export default App;

