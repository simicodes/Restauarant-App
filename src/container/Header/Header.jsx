import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The key to find dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Do you have a solid knowledge of HTML, CSS, and JavaScript while being
          mindful of the diverse ecosystem of devices and connections? We’re
          looking for experienced Frontend Developers who love to learn and
          collaborate.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
