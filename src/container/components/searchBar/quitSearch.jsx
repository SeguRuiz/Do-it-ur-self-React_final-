import { useTheContext } from "../../../context/ContextProvider";
import "../searchBar/search.css";

const QuitSearch = () => {
  const { searchValue, setSearchValue } = useTheContext();

  const quitSearch = () => {
    setSearchValue("");
  };
  return (
    <>
      {searchValue != "" ? (
        <button onClick={quitSearch} className="quitSearch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="#8bb4f8"
          >
            <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
          </svg>
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default QuitSearch;
