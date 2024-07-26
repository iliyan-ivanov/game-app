import GameCard from "../common/GameCard/GameCard";
import { getUserGames } from "../../services/GameService";
import profilePic from "/profile.png";
import AuthContext from "../../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";
import "./MyProfile.css";

const MyProfile = () => {
  const user = useContext(AuthContext);
  const [games, setGames] = useState([]);

  useEffect(() => {
    getUserGames(user?.uid).then((res) => setGames(res));
  }, []);

  return (
    <main>
      <section className="profile-section">
        <article className="profile-article">
          <div className="profile-pic">
            <img src={profilePic} />
          </div>
          <div>
            <p>Email: {user?.email}</p>
            <p>Total games: {games?.length}</p>
          </div>
        </article>
        <article className="profile-games">
        {games.map((x) => (
          <GameCard key={x.id} title={x.title} image={x.imageUrl} id={x.id} />
        ))}
        </article>
      </section>
    </main>
  );
};

export default MyProfile;
