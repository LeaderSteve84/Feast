import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Foods from './Foods';
import About from './About';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;