import { FaSearch } from "react-icons/fa";
import './SearchBar.css';

const SearchBar = ({ searchInput, setSearchInput }) => {

        
        /*const handleSearchSubmit = () => {
                setSearchValue();
                <Recipes search={search} />
                console.log(search);
        }*/
        
        return (
                <div className="input-wrapper">
                        <FaSearch id="search-icon" />
                        <input type="text" 
                        id="search-input"
                        name="search"
                        required
                        placeholder="Type to search..."
                        value={ searchInput }
                        onChange={(e) => setSearchInput(e.target.value)}
                        />
                </div>
        );
}

export default SearchBar;
