import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllGames } from "../../services/GameService";

import Aside from "../common/Aside/Aside";
import GameCard from "../common/GameCard/GameCard";
import "./Categories.css";

const Categories = () => {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]);
  const { category } = useParams();
  let inputElement = document.getElementById('search');

  useEffect(() => {
    getAllGames(category).then((res) => {
      setAllGames(res);
      setGames(res);
    });
    
    !inputElement ? '' : inputElement.value = ''
    
  }, [category]);

  const onSearchHandler = (e) => {
    let searchTitle = e.target.value;
    if(searchTitle == '') {
     setGames(allGames)
      console.log('ops');
      return;
    }

    setGames(allGames.filter(x => x.title.toLowerCase().includes(searchTitle)));
  }

  return (
    <main>
      <Aside />
      <section className="home-container">
        <input
          type="text"
          id="search"
          className="form-control"
          placeholder="Search"
          name="search"
          onChange={onSearchHandler}
        />
        <article className="home-container-games">
          {games.map((x) => (
            <GameCard key={x.id} title={x.title} image={x.imageUrl} id={x.id} />
          ))}
        </article>
      </section>
    </main>
  );
};

export default Categories;
