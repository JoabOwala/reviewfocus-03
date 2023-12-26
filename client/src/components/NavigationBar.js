import React from "react";
import "../styles/NavigationBar.css";
// import { Link } from "react-router-dom";

function NavigationBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      <section className="hero">
        <h4>
          review<i className="fa-solid fa-magnifying-glass fa-rotate-90"></i>{" "}
          Focus
        </h4>
        <h2>Discover The Best Products in Every Category.</h2>
        <p>Focus on The Best Value.</p>
        <a href="#" className="cta-button">
          Explore
        </a>
      </section>
      <div className="search-bar">
        <input type="text" placeholder="The Best..." />
        <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <div>
          {user ? (
            <button onClick={handleLogoutClick}>Logout</button>
          ) : (
            <>
              {/* <Link to="/signup">Signup</Link> */}
              {/* <Link to="/login">Login</Link> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
