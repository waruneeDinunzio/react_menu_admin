import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from './Home'
import OrderOnline from './OrderOnline';
import HealthyRecipes from './HealthyRecipes';
import Contact from './Contact';
import Menu from './Menu';
//import Categories from './Categories';
import foods from '../data';
import ListMenu from './ListMenu';
import AddMenu from './AddMenu';
import UpdateMenu from './UpdateMenu';
import DeleteMenu from './DeleteMenu';
import ViewMenu from './ViewMenu';

//import '../App.css'


const App = () => {
  const [menuItem, setMenuItems] = useState(foods);

  return (
      <div id="app">
      <Header />

      <Switch>
          {/* Route is a child */}
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/orderOnline">
              <OrderOnline />
            </Route>
            
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/healthyRecipes">
              <HealthyRecipes />
            </Route>
            <Route exact path="/menu">
              <Menu foods={menuItem} setMenuItems={setMenuItems}/> 
            </Route>

            <Route exact path="/listMenu" component = {ListMenu}/>
                  
            <Route path="/add-menu" component = {AddMenu}/> 
                  
            <Route path="/update-menu/:id" component={UpdateMenu}/>
            <Route path="/delete-menu/:id" component={DeleteMenu}/> 
            <Route path="/view-menu/:id" component={ViewMenu}/>
                  
          </Switch>
        <Footer />
        
    </div>
  );
};

export default App;