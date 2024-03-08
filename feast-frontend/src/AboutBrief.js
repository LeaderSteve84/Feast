import { Link } from 'react';

const AboutBrief = () => {
    return ( 
        <div className="about-brief">
            <p className="about-brief-head">
                <span className="about-feast">About Feast?</span> A social web application platform for <span className="food-lovers">food lovers.</span> For more knowledge about Feast <link to="/about" className="click-here">Click Here.</link>
            </p>
        </div>
     );
}

export default AboutBrief;