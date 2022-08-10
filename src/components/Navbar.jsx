import { Link } from "react-router-dom";
import { useStateContext } from "../context/APIContext";
import { Search } from "./CompWrapper";
const Navbar = () => {
  const { darkTheme, setDarkTheme } = useStateContext();
  const MyBody = document.body;
  const themeTrigger = () => {
    setDarkTheme(!darkTheme);
    if (!darkTheme) {
      MyBody.classList.add("dark");
    } else {
      MyBody.classList.remove("dark");
    }
  };

  return (
    <nav className="py-2">
      <div className="container">
        <div className="nav-wrapper">
          <div className="brand-name fw-bold">
            <Link
              to="/search"
              className="text-uppercase text-decoration-none text-muted"
            >
              googgl 🔎
            </Link>
          </div>
          <div className="right-side">
            <Search />
            <button
              className={`btn text-capitalize border ${
                darkTheme ? "text-white" : ""
              }`}
              onClick={themeTrigger}
            >
              {darkTheme ? "💡 Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
