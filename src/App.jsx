import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/common/Header/Header";
import Categories from "./components/Categories/Categories";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import CreateGame from "./components/CreateGame/CreateGame";
import GameDetails from "./components/GameDetails/GameDetails";
import MyProfile from "./components/MyProfile/MyProfile";
import EditGame from "./components/EditGame/EditGame";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AuthContext from "./contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import "./App.css";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  return (
    <AuthContext.Provider value={user}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/edit/:id" element={<EditGame />} />
        <Route path="/:id/details" element={<GameDetails />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
