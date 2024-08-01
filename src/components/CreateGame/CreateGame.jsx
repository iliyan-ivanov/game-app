import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import ErrorDiv from "../common/ErrorDiv/ErrorDiv";
import Aside from "../common/Aside/Aside";
import { createGame } from "../../services/GameService";
import AuthContext from "../../contexts/AuthContext";
import isAuth from "../../hoc/isAuth";

const CreateGame = () => {
  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState("");
  const [imgErrorMessage, setImgErrorMessage] = useState("");

  const navigate = useNavigate();
  const user = useContext(AuthContext);

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

  const onCreateHandler = (e) => {
    e.preventDefault();

    const { category, title, description, imageUrl } = e.target;

    const gameData = {
      title: title.value,
      description: description.value,
      imageUrl: imageUrl.value,
      likes: [],
      category: category.value == "Select Category" ? "Others" : category.value,
      creator: user.uid,
    };

    if (titleErrorMessage.length < 1 && 
      descriptionErrorMessage.length < 1 &&
      imgErrorMessage.length < 1 &&
      title.value != '' &&
      description.value != '' &&
      imageUrl.value != '') {
      createGame(gameData)
      .then((res) => {
        navigate("/categories/All");
      })
      .catch((err) => {
        console.log("problem with logging in");
      });

    title.value = "";
    description.value = "";
    imageUrl.value = "";
    category.value = "Select Category";
    }
    
  };

  return (
    <main>
      <form className="form" onSubmit={onCreateHandler}>
        <h1>Add Game</h1>
        <div className="form-group">
          <label htmlFor="title">Game Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            name="title"
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
            onBlur={onImageHandler}
          ></textarea>
          <ErrorDiv>{imgErrorMessage}</ErrorDiv>
        </div>
        <div className="form-group">
          <label htmlFor="category">Choose category</label>
          <select name="category" className="form-control">
            <option value="Select Category">Select category</option>
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
          Create
        </button>
      </form>
    </main>
  );
};

export default isAuth(CreateGame);
