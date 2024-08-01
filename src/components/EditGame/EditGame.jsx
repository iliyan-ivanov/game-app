import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { editGame, getOneGame } from "../../services/GameService";
import ErrorDiv from "../common/ErrorDiv/ErrorDiv";
import Aside from "../common/Aside/Aside";
import isAuth from "../../hoc/isAuth";

const EditGame = () => {
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [imgErrorMessage, setImgErrorMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    getOneGame(id).then((res) => {
      setGame(res);
    });
  }, []);

  const onTitleHandler = (e) => {
    const title = e.target.value;

    setTitleErrorMessage("");

    if (title.length < 3) {
      setTitleErrorMessage("Title must be at least 6 characters!");
    }

    if (title.length < 1) {
      setTitleErrorMessage("Please insert title!");
    }

    if (title.length > 70) {
      setTitleErrorMessage("Title too long!");
    }
  };

  const onDescriptionHandler = (e) => {
    const description = e.target.value;

    setDescriptionErrorMessage("");

    if (description.length < 6) {
      setDescriptionErrorMessage("Description must be at least 6 characters!");
    }

    if (description.length < 1) {
      setDescriptionErrorMessage("Please insert Description!");
    }
  };

  const onImageHandler = (e) => {
    const imageUrl = e.target.value;

    setImgErrorMessage("");

    if (imageUrl.length < 10) {
      setImgErrorMessage("Image URL must be at least 6 characters!");
    }

    if (imageUrl.length < 1) {
      setImgErrorMessage("Please insert image URL!");
    }
  };

  const onEditHandler = (e) => {
    e.preventDefault();

    const { category, title, description, imageUrl } = e.target;

    const gameData = {
      title: title.value,
      description: description.value,
      imageUrl: imageUrl.value,
      category: category.value == "Select Category" ? "Others" : category.value,
    };

    if (titleErrorMessage.length < 1 && 
        descriptionErrorMessage.length < 1 &&
        imgErrorMessage.length < 1 &&
        title.value != '' &&
        description.value != '' &&
        imageUrl.value != '') {
      editGame(id, gameData)
        .then((res) => {
          navigate("/categories/All");
        })
        .catch((err) => {
          console.log("problem with logging in");
        });
    }
  };

  return (
    <main>
      <form className="form" onSubmit={onEditHandler}>
        <h1>Edit Game</h1>
        <div className="form-group">
          <label htmlFor="title">Game Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
            defaultValue={game.title}
            onBlur={onTitleHandler}
          />
          <ErrorDiv>{titleErrorMessage}</ErrorDiv>
        </div>
        <div className="form-group">
          <label htmlFor="description">Game Description</label>
          <textarea
            className="form-control form-description"
            placeholder="Description"
            name="description"
            defaultValue={game.description}
            onBlur={onDescriptionHandler}
          ></textarea>
          <ErrorDiv>{descriptionErrorMessage}</ErrorDiv>
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image url</label>
          <textarea
            type="text"
            className="form-control"
            placeholder="Image Url"
            name="imageUrl"
            defaultValue={game.imageUrl}
            onBlur={onImageHandler}
          ></textarea>
          <ErrorDiv>{imgErrorMessage}</ErrorDiv>
        </div>
        <div className="form-group">
          <label htmlFor="category">Choose category</label>
          <select
            name="category"
            className="form-control"
            defaultValue={game.category}
          >
            <option value={game.category}>{game.category}</option>
            <option value="Adventure">Adventure</option>
            <option value="Fighting">Fighting</option>
            <option value="Racing">Racing</option>
            <option value="RPG">RPG</option>
            <option value="Shooter">Shooter</option>
            <option value="Sports">Sports</option>
            <option value="Strategy">Strategy</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button type="submit" className="btn">
          Edit
        </button>
      </form>
    </main>
  );
};

export default isAuth(EditGame);
