import {NavLink } from "react-router-dom";
import { useStateContext } from "../context/APIContext";
import { Links } from "../data/Links";
const MyRoutes = () => {
  const {darkTheme} = useStateContext();
  return (
    <section className="links">
      <ul className="list-unstyled">
        {Links.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link.url}
                className={`text-decoration-none ${darkTheme ? "text-white" : "text-muted"}`}
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MyRoutes;
