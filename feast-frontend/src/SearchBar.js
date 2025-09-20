import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <div className="relative flex items-center bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-green-500 transition-all duration-200 max-w-full">
      <FaSearch className="absolute left-3 text-gray-500" />
      <input
        type="text"
        id="search-input"
        name="search"
        required
        placeholder="Search for recipes (e.g., pasta, vegan, Italian)..."
        value={searchInput || ''}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full pl-10 pr-4 py-2 text-gray-700 rounded-lg focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default SearchBar;
