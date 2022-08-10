import { useStateContext } from "../context/APIContext";

const Footer = () => {
  const {darkTheme} = useStateContext()
  return (
    <footer className={`text-center py-4 ${darkTheme ? "text-white" : ""}`}>
      &copy; <span>{new Date().getFullYear()}</span> Googgl, Inc.
    </footer>
  );
};

export default Footer;
