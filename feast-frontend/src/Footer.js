import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer"> 
            <nav>
                <Link to="/" className="footer-home">Home</Link>
                <Link to="/recipes" className="footer-foods">Recipes</Link> 
                <Link to="/about" className="footer-about">About</Link> 
            </nav>
            <em className="mantra">For the love of food . . .</em>
        </div>
     );
}
 
export default Footer;