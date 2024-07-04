import { useRef } from "react";
import { useTheContext } from "../../../context/ContextProvider";
import "../searchBar/search.css";
const SearchBar = () => {
  const { searchValue, setSearchValue } = useTheContext();

  const searchRef = useRef()

  const changeSearch = (o) => {
    setSearchValue(o.target.value);
  };

  const focus = () => {
  searchRef.current.focus()
  }

  return (
    <>
      <div className="searchBtn" onClick={focus}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#8bb4f8"
        >
          <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z" />
        </svg>
      </div>
      <input
        value={searchValue}
        type="text"
        placeholder="...."
        onInput={changeSearch}
        className="searchBar"
        ref={searchRef}
      />
      
    </>
  );
};

export default SearchBar;
