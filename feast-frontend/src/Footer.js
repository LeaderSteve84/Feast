import { Link } from 'react';

const Footer = () => {
    return (
        <div className="footer"> 
            <nav>
                <link to="/home" className="footer-home">Home</link>
                <link to="/foods" className="footer-foods">Foods</link> 
                <link to="/about" className="footer-about">About</link> 
            </nav>
            <em className="mantra">For the love of food . . .</em>
        </div>
     );
}
 
export default Footer;