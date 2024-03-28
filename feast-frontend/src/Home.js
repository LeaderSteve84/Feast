import AboutBrief from './AboutBrief';
import DisplayFood from './DisplayFood';
import MoreContents from './MoreContents';
import ArticleC from './contents/ArticleC';
import ArticleD from './contents/ArticleD';
import ArticleE from './contents/ArticleE';
import ArticleF from './contents/ArticleF';
import ArticleG from './contents/ArticleG';
import ArticleH from './contents/ArticleH';
import ArticleI from './contents/ArticleI';

const Home = () => {
    return ( 
        <div className="home">
             <AboutBrief />
            <div className="content-display-food">
             <ArticleC />
             <ArticleD />
             <ArticleI />
            </div>
             <DisplayFood />
             <MoreContents />
            <div className="articles-flex">
             <ArticleE />
             <ArticleF />
             <ArticleG />
             <ArticleH />
            </div>
        </div>
     )
}
 
export default Home;
