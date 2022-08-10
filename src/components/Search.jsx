import { useStateContext } from "../context/APIContext";
import { useLocation, useNavigate } from "react-router-dom";
const Search = () => {
  const { searchTerm, setSearchTerm, errorTrigger } = useStateContext();
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // Check pathname
    if (location.pathname === "/") {
      navigate("/search");
    }
    // Check value of searchTeam
    if (searchTerm) {
      return errorTrigger(false, "");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      return errorTrigger(true, "Please type your search keywords");
    }
  };
  return (
    <div className="Search-form me-2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="form-control"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
