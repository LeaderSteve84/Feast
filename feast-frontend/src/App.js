import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Recipes from './Recipes';
import About from './About';
import SignupLogin from './SignupLogin';
import Comments from './Comments';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/signuplogin" element={<SignupLogin />} />
          </Routes>
        </div>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
