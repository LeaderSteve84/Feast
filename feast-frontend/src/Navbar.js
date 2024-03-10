import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
            <nav className="nav-bar">
                <h1 className="nav-header">Feast</h1>
                <div className="links">
                    <Link to="/" className="home">Home</Link>
                    <Link to="/about" className="about">About</Link>
                    <Link to="/recipes" className="recipes">Recipes</Link>
                    <Link to="/signup" className="signUp">SignUp</Link>
                    <Link to="/signin" className="signIn">SignIn</Link>
                </div>
            </nav>
     );
}
 
export default Navbar;