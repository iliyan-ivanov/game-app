import { Link } from "react-router-dom";
import "./GameCard.css"

const GameCard = (params) => {
    return (
        <article>
            <Link to={`/${params.id}/details`}  className="game-card">
              <div className="game-card-image">
                <img
                  src={params.image}
                  alt="Game picture"
                />
              </div>
              <h4 className="card-header">{params.title}</h4>
            </Link>
          </article>
    )
}

export default GameCard;