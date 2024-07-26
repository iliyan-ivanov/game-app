import { Link } from "react-router-dom";
import "./Home.css";
import AuthContext from "../../contexts/AuthContext";
import { useContext } from "react";
import spiderman from "/spiderman.png";
import ronaldo from "/ronaldo.png";
import godofwar from "/godofwar.png";

const Home = () => {
    const user = useContext(AuthContext);

  return (
    <main className="home-page">
      <article className="home-article">
        <div className="godofwar">
          <img src={godofwar} />
        </div>
        {user 
        ? <Link className="home-btns" to="/categories/All">Categories</Link>
        : <Link className="home-btns" to="/login">Login</Link>}
      </article>
      <article className="home-article">
        <h1>Welcome to our Game site!</h1>
        <h2>{user ? "Enjoy" : "Please Login "}</h2>
        <div className="spiderman">
          <img src={spiderman} />
        </div>
      </article>
      <article className="home-article">
        <div className="ronaldo">
          <img src={ronaldo} />
        </div>
        {user 
        ? <Link className="home-btns" to="/create-game">Create</Link>
        : <Link className="home-btns" to="/register">Register</Link>}
      </article>
    </main>
  );
};

export default Home;
