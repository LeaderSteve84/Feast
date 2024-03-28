import { Link } from 'react-router-dom';

const AboutBrief = () => {
    return ( 
        <div className="about-brief">
            <p className="about-brief-head">
                <span className="about-feast">
                About Feast?</span> A social web application platform for <span className="food-lovers">food lovers.</span> 
                Whether you possess extensive culinary experience or simply harbor an adventurous palate, Feast 
                extends a warm invitation to individuals from all walks of life to become part of our expanding 
                community of gastronomy enthusiasts. For more knowledge about Feast 
                <Link to="/about" className="click-here">Click Here.</Link>
            </p>
        </div>
     );
}

export default AboutBrief;
