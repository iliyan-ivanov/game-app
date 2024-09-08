import { db } from "../config/firebase";
import uniqid from 'uniqid';
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  arrayUnion,
  updateDoc,
  arrayRemove,
  deleteDoc
} from "firebase/firestore/lite";

const url =
  "https://game-site-2a632-default-rtdb.europe-west1.firebasedatabase.app/games.json";

export async function getAllGames(asideCategory) {
  const allGames = await getDocs(collection(db, "games"));

  const gameList = await allGames.docs.map((game) => {
    return { id: game.id, ...game.data() };
  });

  if (asideCategory != "All") {
    let filtredCategories = gameList.filter((x) => x.category == asideCategory);

    return filtredCategories;
  } else {
    return gameList;
  }
}

export async function getOneGame(id) {
  const game = await getDoc(doc(db, "games", `${id}`));

  return { id: game.id, ...game.data() };
}

export async function getUserGames(user) {
  const allGames = await getDocs(collection(db, "games"));

  const userGames = await allGames.docs.map((game) => {
    return { id: game.id, ...game.data() };
  }).filter((x) => x.creator == user);;

  return userGames;
}

export async function createGame(data) {
  try {
    const game = await addDoc(collection(db, "games"), data);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function editGame(gameId, data) {
  try {
    const game = doc(db, 'games', gameId);
    await updateDoc(game, data);

  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function likeGame(userId, gameId) {
  const game = await doc(db, "games", gameId);

  return await updateDoc(game, {
    likes: arrayUnion(userId),
  });
}

export async function unlikeGame(userId, gameId) {
  const gameLikes = await doc(db, "games", gameId);

  return await updateDoc(gameLikes, {
    likes: arrayRemove(userId),
  });
}

export async function deleteGame(gameId) {
  return await deleteDoc(doc(db, "games", gameId));
}

export async function addComment(gameId, user, comment) {
  const game = await doc(db, "games", gameId);

  return await updateDoc(game, {
    comments: arrayUnion({user, 
                          comment, 
                          id: uniqid()}),
  });
}

export async function getComments(id) {
  const game = await getDoc(doc(db, "games", `${id}`));

  return game.data().comments;
  
}