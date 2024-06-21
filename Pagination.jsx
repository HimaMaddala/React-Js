import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Pagination } from 'react-bootstrap';

const FruitList = () => {
  const [fruits, setFruits] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const fruitsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fruits');
        setFruits(response.data);
      } catch (error) {
        console.error('Error fetching fruits:', error);
      }
    };

    fetchData();
  }, []);

  // Logic for pagination
  const indexOfLastFruit = currentPage * fruitsPerPage;
  const indexOfFirstFruit = indexOfLastFruit - fruitsPerPage;
  const currentFruits = fruits.slice(indexOfFirstFruit, indexOfLastFruit);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="row">
        {currentFruits.map((fruit) => (
          <div key={fruit.id} className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={fruit.img_url} />
              <Card.Body>
                <Card.Title>{fruit.name}</Card.Title>
                <Card.Text>
                  Quantity: {fruit.quantity}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Pagination>
        {Array.from({ length: Math.ceil(fruits.length / fruitsPerPage) }).map((_, index) => (
          <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default FruitList;
