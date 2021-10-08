import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './Pages/Home';
import ProfilePage from './Pages/Profile';
import SavePage from './Pages/Save';
import LoginPage from './Pages/Login';
import Nav from './components/Navbar'


function App() {
  return (
    <div className="">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          
          <Route path="/profile">
            <ProfilePage/>
          </Route>

          <Route path="/save">
            <SavePage/>
          </Route>

          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
