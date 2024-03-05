const Navbar = () => {
    return ( 
        <div className="nav-bar">
            <nav>
                <hi className="nav-header">
                    Feast
                </hi>
                <a href="/" className="nav-link">Home</a>
                <a href="/foods" className="nav-link">Foods</a>
                <a href="/signup" className="nav-link">SignUp</a>
                <a href="/signin" className="nav-link">SignIn</a>
            </nav>
        </div>
     );
}
 
export default Navbar;