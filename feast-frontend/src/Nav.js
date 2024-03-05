const Navbar = () => {
    return ( 
            <nav className="nav-bar">
                <h1 className="nav-header">
                    Feast
                </h1>
                <div className="links">
                    <a href="/" className="home">Home</a>
                    <a href="/foods" className="foods">Foods</a>
                    <a href="/signup" className="signUp">SignUp</a>
                    <a href="/signin" className="signIn">SignIn</a>
                </div>
            </nav>
     );
}
 
export default Navbar;