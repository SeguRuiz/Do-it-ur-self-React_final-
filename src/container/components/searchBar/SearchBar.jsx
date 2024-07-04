import { useTheContext } from "../../../context/ContextProvider";
const SearchBar = () => {
  const { searchValue, setSearchValue } = useTheContext();

  const changeSearch = (o) =>{
    setSearchValue(o.target.value)
  }

  return <input  value={searchValue}  type="text" placeholder="searchBar" onInput={changeSearch} />;
};

export default SearchBar;
