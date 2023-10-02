import React from "react";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

import "./Cafe.css"

import { FormattedMessage } from 'react-intl';


function Cafe({ id }) {
  const [cafe, setCafeDetails] = useState(null);

  useEffect(() => {
    if (id) {
      const apiUrl = `http://localhost:3001/cafes/${id}`;

     fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setCafeDetails(data);
        })
        .catch((error) => {
          console.error("Error fetching cafe details:", error);
        });
    }
  }, [id]);

  if (!cafe) {
    return null;
  }

  return (
    <Card className="cafe-card">
      <p style={{ fontSize: "18px", fontWeight: "900", marginBottom: "0" }}>{cafe.nombre}</p>
      <p style={{ fontSize: "14px", fontWeight: "300" }}>{cafe.fecha_cultivo}</p>
      <img src={cafe.imagen} alt={cafe.nombre} width="150" height="150" /> 
      <p style={{ fontSize: "18px", fontWeight: "300", marginBottom: "0"  }}><FormattedMessage id="Notas"/></p>
      <p style={{ fontSize: "18px", fontWeight: "300" }}>{cafe.notas}</p>
      <p style={{ fontSize: "18px", fontWeight: "900" }}><FormattedMessage id="Cultivado"/>{+cafe.altura}<FormattedMessage id="Metros"/></p>
    </Card>
  );
}

export default Cafe;