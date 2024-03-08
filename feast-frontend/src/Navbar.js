import { Link } from 'react';

const Navbar = () => {
    return ( 
            <nav className="nav-bar">
                <h1 className="nav-header">Feast</h1>
                <div className="links">
                    <link to="/" className="home">Home</link>
                    <link to="/about" className="about">About</link>
                    <link to="/foods" className="foods">Foods</link>
                    <link to="/signup" className="signUp">SignUp</link>
                    <link to="/signin" className="signIn">SignIn</link>
                </div>
            </nav>
     );
}
 
export default Navbar;