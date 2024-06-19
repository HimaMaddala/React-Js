// src/components/FruitTable.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FruitTable = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fetchfruits');
        setFruits(response.data);
      } catch (error) {
        console.error('Error fetching fruits:', error);
      }
    };

    fetchFruits();
  }, []);

  return (
    <div>
      <h1>Fruit List</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Fruit</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{fruit.name}</td>
              <td>{fruit.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FruitTable;
