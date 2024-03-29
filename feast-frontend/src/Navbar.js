import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
            <nav className="nav-bar">
                <h1 className="nav-header">Feast</h1>
                <div className="links">
                    <Link to="/" className="home-link">Home</Link>
                    <Link to="/about" className="about-link">About</Link>
                    <Link to="/recipes" className="recipes-link">Recipes</Link>
                    <Link to="/comments" className="comments-link">Comments</Link>
                    <Link to="/signuplogin" className="signuplogin-link1 signuplogin-link2">Sign Up/Login</Link>
                </div>
            </nav>
     );
}
 
export default Navbar;
