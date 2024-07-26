import { NavLink } from "react-router-dom";
import "./Aside.css";

const Aside = () => {
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
      </section>
      <ul className="aside-list">
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
