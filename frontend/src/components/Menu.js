import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/menu`)
      .then((response) => {
        setMenu(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the menu', error);
      });
  }, []);

  return (
    <div>
      <h2>Restaurant Menu</h2>
      {menu.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>
                <strong>{item.name}</strong>: {item.description} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;
