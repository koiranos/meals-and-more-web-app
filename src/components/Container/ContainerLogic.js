import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LoginPageLogic from "../../pages/LoginPage/LoginPageLogic";
import HomePageLogic from "../../pages/HomePage/HomePageLogic";
import StoresPageLogic from "../../pages/StoresPage/StoresPageLogic";

const ContainerLogic = () => {
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    setCurrentCard(window.localStorage.getItem("currentCard"));
  }, [currentCard]);

  useEffect(() => {
    currentCard !== null ? (
      <Navigate replace to="/card" />
    ) : (
      <Navigate to="/login" />
    );
  }, []);

  const NavigateTo = (place) => {
    return <Navigate replace to={place} />;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <LoginPageLogic navigation={(place) => NavigateTo(place)} />
            }
          />

          <Route
            path="/login"
            element={
              <LoginPageLogic navigation={(place) => NavigateTo(place)} />
            }
          />

          <Route
            path="/card"
            element={<HomePageLogic navigate={(place) => NavigateTo(place)} />}
          />
          <Route
            path="/stores"
            element={
              <StoresPageLogic navigate={(place) => NavigateTo(place)} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default ContainerLogic;
