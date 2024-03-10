import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer"> 
            <nav className="footer-nav-bar">
                <div className="footer-link">
                    <Link to="/" className="home-link">Home</Link>
                    <Link to="/about" className="about-link">About</Link> 
                    <Link to="/recipes" className="footer-recipes-link">Recipes</Link> 
                </div>
                <h1 className="footer-mantra">For the love of food . . .</h1>  
            </nav>
        </div>
     );
}
 
export default Footer;