import { useState, useContext, createContext } from "react";

export const StateContext = createContext();
export const URL = "https://google-search3.p.rapidapi.com/api/v1";

export const ContextProvider = ({ children }) => {
  // Variables
  const [searchTerm, setSearchTerm] = useState(""),
    [darkTheme, setDarkTheme] = useState(false),
    [loading, setLoading] = useState(false),
    [myResults, setMyResults] = useState([]),
    [error, setError] = useState({
      show: false,
      msg: "",
    });

  // Trigger Error
  const errorTrigger = (show = false, msg = "") => {
    return setError({ show, msg });
  };

  // Fetch Results
  const FetchResults = async (type) => {
    setLoading(true);
    const res = await fetch(`${URL}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_GOOGLE_KEY,
      },
    });
    const data = await res.json();
    if (type.includes("/news")) {
      setMyResults(data.entries);
    } else if (type.includes("/image")) {
      setMyResults(data.image_results);
    } else {
      setMyResults(data.results);
    }
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        setDarkTheme,
        darkTheme,
        FetchResults,
        loading,
        myResults,
        error,
        setError,
        errorTrigger,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
