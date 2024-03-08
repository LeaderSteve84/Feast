import './App.css';
import Navbar from './Navbar';
import About from './About';
import Header from './Header';
import Wwedo from './Wwedo';
import DisplayFood from './DisplayFood';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/foods">
              <Foods />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;