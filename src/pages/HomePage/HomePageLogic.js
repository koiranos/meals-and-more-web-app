import React, { useState, useEffect } from "react";
import axios from "axios";

import HomePageView from "./HomePageView";

const HomePageLogic = (props) => {
  const [currentCard, setCurrentCard] = useState(null);
  const [password, setPassword] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (card, pass) => {
    let userData;
    let url = `https://cors-everywhere.herokuapp.com/https://meals-and-more.herokuapp.com/DGUnpOFFP525lIcwThVVTQNa1v?username=${card}&password=${pass}`;
    try {
      userData = await axios.get(url);
    } catch (e) {
      let message = "Error";
      return message;
    }
    return userData.data;
  };

  useEffect(() => {
    setCurrentCard(window.localStorage.getItem("currentCard"));
    setPassword(window.localStorage.getItem("password"));
  }, []);

  useEffect(() => {
    setIsLoading(true);
    if (currentCard !== null && password !== null) {
      getData(currentCard, password)
        .then((data) => setData(data))
        .catch((e) => setData("Error"));
    }
  }, [currentCard]);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  const renderElement = () => {
    if (
      currentCard === null ||
      currentCard === undefined ||
      currentCard === ""
    ) {
      return props.navigate("/login");
    } else {
      if (!isLoading) {
        return <HomePageView data={data} />;
      } else {
        return <p>Loading...</p>;
      }
    }
  };

  return renderElement();
};

export default HomePageLogic;
