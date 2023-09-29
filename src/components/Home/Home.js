import React, { useState } from "react";
import Cafe from "../Cafe/Cafe";
import './Home.css'; 
import { Link } from "react-router-dom"; 
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Home(){
  const [cafes] = useState([
    {
      nombre: "Cafe 1",
      tipo: "Blend",
      region: "Antioquia",
      fecha: "2019-03-26",
      imagen: "imagen de cafe",
      notas: "Panela y caramelo",
      altura: "1920 msnm",
    },
    {
        nombre: "Cafe 2",
        tipo: "Blend",
        region: "Antioquia",
        fecha: "2019-03-26",
        imagen: "imagen de cafe",
        notas: "Panela y caramelo",
        altura: "1920 msnm",
    },
    {
        nombre: "Cafe 3",
        tipo: "Blend",
        region: "Antioquia",
        fecha: "2019-03-26",
        imagen: "imagen de cafe",
        notas: "Panela y caramelo",
        altura: "1920 msnm",
    },
  ]);


  const [selectedCafe, setSelectedCafe] = useState(null);

  const handleCafeClick = (cafe) => {
    setSelectedCafe(cafe);
  };

  return (
    <Row>
        <Col>
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Tipo</th>
                <th scope="col">Region</th>
            </tr>
            </thead>
            <tbody>
            {cafes.map((cafe, index) => (
                <tr key={index} onClick={() => handleCafeClick(cafe)}>
                <th scope="row">{index + 1}</th>
                <td>{cafe.nombre}</td>
                <td>{cafe.tipo}</td>
                <td>{cafe.region}</td>
            </tr>
            ))}
            </tbody>
        </table>
        </Col>
        <Col>
            <Cafe cafe= {selectedCafe}></Cafe>
        </Col>

    </Row>

    
    
  );
};

export default Home;
