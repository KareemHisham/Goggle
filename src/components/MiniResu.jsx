import { useLocation } from "react-router-dom";
import { useStateContext } from "../context/APIContext";
import Loading from "./Loading";
import ReactPlayer from "react-player";

const MiniResu = () => {
  const location = useLocation();
  const { myResults, loading, darkTheme } = useStateContext();
  if (loading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="result-search">
          <div className="row">
            {myResults.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    <div
                      style={{ color: "#395B64" }}
                      className={darkTheme ? "text-info" : ""}
                    >
                      {item.link.length > 30
                        ? item.link.substring(0, 30)
                        : item.link}
                    </div>
                    <p
                      className={`lead ${
                        darkTheme ? "text-white" : "text-info"
                      }`}
                    >
                      {item.title}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      );
    case "/news":
      return (
        <div className="result-news">
          <div className="row">
            {myResults.map((item) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={item.id}>
                  <div className="sub-links">
                    <a
                      href={item.links?.[0]?.href}
                      alt={item.title}
                      className={`text-decoration-none ${
                        darkTheme ? "text-info" : ""
                      }`}
                      rel="noreferrer"
                      style={{ color: "#395B64" }}
                    >
                      <p className="m-0">{item.title}</p>
                    </a>
                    <a
                      href={item?.source?.href}
                      className={`text-decoration-none ${
                        darkTheme ? "text-white" : "text-info"
                      }`}
                      rel="noreferrer"
                    >
                      {item?.source?.href}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    case "/image":
      return (
        <div className="result-images">
          <div className="row">
            {myResults.map((item, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
                  <a href={item?.link?.href} className="text-decoration-none ">
                    <img src={item?.image?.src} alt={item?.link?.title} loading="lazy"/>
                    <p
                      className={`lead text-center ${
                        darkTheme ? "text-white" : "text-muted"
                      }`}
                    >
                      {item?.link?.title}
                    </p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      );
    case "/video":
      return (
        <div className="result-video">
          <div className="row">
            {myResults.map((video, index) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 mb-3" key={index}>
                  {video?.additional_links?.[0]?.href && (
                    <ReactPlayer
                      url={video?.additional_links?.[0]?.href}
                      controls
                      width="100%"
                      height="100%"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );

    default:
      break;
  }
};

export default MiniResu;
