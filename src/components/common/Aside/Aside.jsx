import { NavLink } from "react-router-dom";
import "./Aside.css";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    let categoriesList = document.querySelector(".aside-list")

    window.addEventListener('resize', () => {
      if (window.innerWidth < 740) {
        categoriesList.classList.add('hide');
      } else if (window.innerWidth > 740) {
        categoriesList.classList.remove('hide');
      }
    })
  })
  
  return (
    <aside id="aside">
      <section className="aside-header">
        <h2>Categories</h2>
        <FaIcons.FaBars className="aside-icon" onClick={showSidebar} />
      </section>
      <ul className={sidebar ? "aside-list hide" : "aside-list"}>
        {categories.map((x) => (
          <li key={x}>
            <NavLink className={({ isActive }) => isActive ? "selected-category" : "nav-category"} to={`/categories/${x}`} >{x}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
