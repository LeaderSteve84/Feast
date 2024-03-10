import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
            <nav className="nav-bar">
                <h1 className="nav-header">Feast</h1>
                <div className="links">
                    <Link to="/" className="home-link">Home</Link>
                    <Link to="/about" className="about-link">About</Link>
                    <Link to="/recipes" className="recipes-link">Recipes</Link>
                    <Link to="/signup" className="signUp-link">Sign Up</Link>
                    <Link to="/signin" className="signIn-link">Sign In</Link>
                </div>
            </nav>
     );
}
 
export default Navbar;