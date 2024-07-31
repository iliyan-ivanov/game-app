import { NavLink } from "react-router-dom";
import "./Aside.css";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";

const Aside = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const categories = [
    "All",
    "Adventure",
    "Fighting",
    "Racing",
    "RPG",
    "Shooter",
    "Sports",
    "Strategy",
    "Others"
  ];

  return (
    <aside id="aside">
      <section className="aside-header">
        <h2>Categories</h2>
        <FaIcons.FaBars className="aside-icon" onClick={showSidebar} />
      </section>
      <ul className={sidebar ? "aside-list active" : "aside-list"}>
        {categories.map((x) => (
          <li key={x}>
            <NavLink className={({ isActive }) =>isActive ? "selected-category" : "nav-category"} to={`/categories/${x}`} >{x}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
