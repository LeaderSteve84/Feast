import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Foods from './Foods';
import About from './About';
import SignUp from './SignUp';
import SignIn from './SignIn';
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
            <Route path="/foods" element={<Foods />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;