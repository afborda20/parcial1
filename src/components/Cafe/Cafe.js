import React from "react";
import Card from "react-bootstrap/Card";

function Cafe({ cafe }) {
  if (!cafe) {
    return null; // Don't render anything if cafe is not selected
  }

  return (
    <Card className="cafe-details">
      <h2>{cafe.nombre}</h2>
      <p>{cafe.fecha}</p>
      <p>{cafe.imagen}</p>
      <p>{cafe.notas}</p>
      <p>{cafe.altura}</p>
    </Card>
  );
}

export default Cafe;