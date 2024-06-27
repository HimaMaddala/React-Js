// src/App.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const fruits = [
  { id: 1, name: 'Apple', color: 'Red', image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Apple' },
  { id: 2, name: 'Banana', color: 'Yellow', image: 'https://via.placeholder.com/150/FFFF00/000000?text=Banana' },
  { id: 3, name: 'Cherry', color: 'Red', image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Cherry' },
  { id: 4, name: 'Grape', color: 'Purple', image: 'https://via.placeholder.com/150/800080/FFFFFF?text=Grape' },
  { id: 5, name: 'Lemon', color: 'Yellow', image: 'https://via.placeholder.com/150/FFFF00/000000?text=Lemon' },
  { id: 6, name: 'Orange', color: 'Orange', image: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Orange' },
];

const App = () => {
  return (
    <div className="App">
      <h1>Fruit Carousel</h1>
      <Carousel>
        {fruits.map((fruit) => (
          <Carousel.Item key={fruit.id}>
            <img
              className="d-block w-100"
              src={fruit.image}
              alt={fruit.name}
            />
            <Carousel.Caption>
              <h3>{fruit.name}</h3>
              <p>{fruit.color}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
