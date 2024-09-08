import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import AuthContext from "../../contexts/AuthContext";
import {
  addComment,
  deleteGame,
  getComments,
  getOneGame,
  likeGame,
  unlikeGame,
} from "../../services/GameService";
import Aside from "../common/Aside/Aside";
import "./GameDetails.css";
import CommentSection from "../common/CommentSection/CommentSection";

const GameDetails = () => {
  const user = useContext(AuthContext);
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getOneGame(id).then((res) => {
      setGame(res);
      setComments(res.comments)
    });
  }, []);

  function onGameLike() {
    likeGame(user.uid, id).then(() => {
      getOneGame(id).then((res) => {
        setGame(res);
      });
    });
  }

  function onGameUnLike() {
    unlikeGame(user.uid, id).then(() => {
      getOneGame(id).then((res) => {
        setGame(res);
      });
    });
  }

  function onDeleteGame() {
    deleteGame(id).then((res) => {
      navigate("/categories/All");
    });
  }

  function onAddComment(e) {
    e.preventDefault();

    const [user, comment] = e.target;

    addComment(id, user.value, comment.value)
      .then(() => {
        getComments(id)
          .then((data) => setComments(data))
          .catch((err) => console.log(err))        
      })
      .catch((err) => console.log(err));
      
      user.value = "";
      comment.value = "";
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
            <article className="game-details-content-details">
              <div className="game-details-criteries">
                <p>Category: {game.category}</p>
                <p>Likes: {game.likes?.length}</p>
              </div>
              <div className="game-details-btns">
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
                    {game.likes?.includes(user?.uid) ? (
                      <Link className="btn" onClick={onGameUnLike}>
                        Unlike
                      </Link>
                    ) : user ? (
                      <Link className="btn" onClick={onGameLike}>
                        Like
                      </Link>
                    ) : (
                      ""
                    )}
                  </div>
                )}
              </div>
            </article>
          </div>
        </article>
        <article className="game-details-description">
          <p>{game.description}</p>
        </article>
        <CommentSection onAddComment={onAddComment} comments={comments} />
      </section>
    </main>
  );
};

export default GameDetails;
