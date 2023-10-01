import React from "react";
import Card from "react-bootstrap/Card";

import "./Cafe.css"

function Cafe({ cafe }) {
  if (!cafe) {
    return null;
  }

  return (
    <Card className="cafe-card">
      <p style={{ fontSize: "18px", fontWeight: "900", marginBottom: "0" }}>{cafe.nombre}</p>
      <p style={{ fontSize: "14px", fontWeight: "300" }}>{cafe.fecha}</p>
      <img src={cafe.imagen} alt={cafe.nombre} width="200" height="150" /> 
      <p style={{ fontSize: "18px", fontWeight: "300" }}>{cafe.notas}</p>
      <p style={{ fontSize: "18px", fontWeight: "900" }}>{cafe.altura}</p>
    </Card>
  );
}

export default Cafe;