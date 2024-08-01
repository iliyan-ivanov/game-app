import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import AuthContext from "../../contexts/AuthContext";
import {
  deleteGame,
  getOneGame,
  likeGame,
  unlikeGame,
} from "../../services/GameService";
import Aside from "../common/Aside/Aside";
import "./GameDetails.css";

const GameDetails = () => {
  const user = useContext(AuthContext);
  const { id } = useParams();
  const [game, setGame] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getOneGame(id).then((res) => {
      setGame(res);
    });
  }, [onGameLike, onGameUnLike]);

  function onGameLike() {
    likeGame(user.uid, id);
  }

  function onGameUnLike() {
    unlikeGame(user.uid, id);
  }

  function onDeleteGame() {
    deleteGame(id).then((res) => {
      navigate("/categories/All");
    });
  }

  return (
    <main className="game-details-main">
      <Aside />
      <section className="game-details-section">
        <article className="game-details-article">
          <div className="game-details-image">
            <img src={game.imageUrl} />
          </div>
          <div className="game-details-article-content">
            <h2>{game.title}</h2>
            <div>
              <p>Category: {game.category}</p>
              <p>Likes: {game.likes?.length}</p>
              {user?.uid == game.creator ? (
                <div className="btns">
                  <Link to={`/${game.id}/edit`} className="btn">
                    Edit
                  </Link>
                  <Link className="btn" onClick={onDeleteGame}>
                    Delete
                  </Link>
                </div>
              ) : (
                <div className="btns">
                  {game.likes?.includes(user?.uid) 
                    ? (<Link className="btn" onClick={onGameUnLike}>Unlike</Link>) 
                    : user 
                        ? (<Link className="btn" onClick={onGameLike}>Like</Link>) 
                        : ( "")
                  }
                </div>
              )}
            </div>
          </div>
        </article>
        <article className="game-details-description">
          <p>{game.description}</p>
        </article>
      </section>
    </main>
  );
};

export default GameDetails;
