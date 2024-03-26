import AboutBrief from './AboutBrief';
import DisplayFood from './DisplayFood';
import MoreContents from './MoreContents';

const Home = () => {
    return ( 
        <div className="home">
            <AboutBrief />
            <DisplayFood />
            <MoreContents />
        </div>
     )
}
 
export default Home;