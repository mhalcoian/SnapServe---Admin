import { useState, useRef, useEffect } from "react";
import Auth from "./verify/auth";
import Dashboard from "./sections/dashboard";
import Vendors from "./sections/vendors";
import Stores from "./sections/stores";
import Users from "./sections/users";
import Reports from "./sections/reports";
import '@fontsource/roboto';

function container() {
  const [isAuth, setIsAuth] = useState(true);

  const [activeIndex, setIsActiveIndex] = useState(0);
  const navRef = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const handleAuthentication = () => {
    if (isAuth) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  };

  const navItems = [
    { label: "Dashboard", icon: "/dashboard.svg" },
    { label: "Vendors", icon: "/vendor.svg" },
    { label: "Stores", icon: "/store.svg" },
    { label: "Users", icon: "/users.svg" },
    { label: "Reports", icon: "/reports.svg" },
  ];

  const renderComponents = [
    <Dashboard />,
    <Vendors />,
    <Stores />,
    <Users />,
    <Reports />,
  ];

  // change indicator effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentActiveEl = navRef.current[activeIndex];
      if (currentActiveEl) {
        setIndicatorStyle({
          top: currentActiveEl.offsetTop,
          height: currentActiveEl.offsetHeight,
          width: currentActiveEl.offsetWidth,
        });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <>
      {!isAuth ? (
        <Auth handleAuthentication={handleAuthentication} />
      ) : (
        <>
          <div className="main-container">
            <div className="header">
              <img className="company-logo" src="/snapserve_logo.jpg" alt="" />
              <img className="bell-icon" src ="/bellicon.svg"/>
            </div>
            <div className="sub-container">
              <div className="nav-form">
                <div className="nav-bar">
                  {navItems.map((items, i) => (
                    <div
                      key={i}
                      className={`nav-items ${
                        i === activeIndex ? "active" : ""
                      }`}
                      ref={(el) => (navRef.current[i] = el)}
                      onClick={() => setIsActiveIndex(i)}
                    >
                      <span className="nav-icon"><img className="item-icon" src={items.icon}/></span>
                      <span>{items.label}</span>
                    </div>
                  ))}
                  <div
                    className="nav-active-indicator"
                    style={indicatorStyle}
                  ></div>
                </div>
                <button className="btn-logout" onClick={() => setIsAuth(false)}>
                  LOG OUT
                </button>
              </div>
              <div className="render-body">{renderComponents[activeIndex]}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default container;
