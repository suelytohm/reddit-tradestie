import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";

export const Home = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios
      .post("https://course-search-proxy.herokuapp.com/", {
        urlToGet: "https://tradestie.com/api/v1/apps/reddit",
      })
      .then(function (response) {
        setDados(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1 className="titulo">Empresas mais comentadas no Reddit</h1>

      <div className="container">
        {dados.map((empresa, key) => (
          <Card
            key={key}
            empresaNome={empresa.ticker}
            comentarios={empresa.no_of_comments}
            sentimento={empresa.sentiment}
          />
        ))}
      </div>
    </div>
  );
};
