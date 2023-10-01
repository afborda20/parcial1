import React, { useState, useEffect } from "react";
import Cafe from "../Cafe/Cafe";
import './Home.css'; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Home(){
  const [cafes, setCafes] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:3001/cafes"; 

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCafes(data);
      })
      .catch((error) => {
        console.error("No se encontro la información:", error);
      });
  }, []);

  const handleCafeClick = (cafe) => {
    setSelectedCafe(cafe);
  };

  return (
    <Row>
        <Col className="left-column">
        <table className= "table-style">
            <thead className="thead-style">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Región</th>
            </tr>
            </thead>
            <tbody>
            {cafes.map((cafe, index) => (
                <tr key={index} onClick={() => handleCafeClick(cafe)} className="table-row-hover">
                  <th scope="row">{index + 1}</th>
                  <td>{cafe.nombre}</td>
                  <td>{cafe.tipo}</td>
                  <td>{cafe.region}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </Col>
        <Col className="right-column">
          <Cafe id={selectedCafe ? selectedCafe.id : null} />
        </Col>

    </Row>

    
    
  );
};

export default Home;
