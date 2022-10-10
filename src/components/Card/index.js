import React, { useState, useEffect } from "react";
import "./Card.css";
import Up from "../../assets/images/up.png";
import Down from "../../assets/images/down.png";

export const Card = ({ idEmpresa, empresaNome, comentarios, sentimento }) => {
  const [corCard, setCorCard] = useState("");

  useEffect(() => {
    if (sentimento === "Bullish") {
      setCorCard("green");
    } else {
      setCorCard("red");
    }
  }, [sentimento]);

  return (
    <div className={`card ` + corCard}>
      <h1>Empresa: {empresaNome}</h1>
      <p>Comentários: {comentarios}</p>
      <img src={corCard === "red" ? Down : Up} alt="" />
    </div>
  );
};
