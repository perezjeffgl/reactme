import React, { Component } from "react";

// Sample data for products
const products = [
  { id: 1, name: "Product A", price: 29.99, description: "Description for Product A" },
  { id: 2, name: "Product B", price: 49.99, description: "Description for Product B" },
  { id: 3, name: "Product C", price: 19.99, description: "Description for Product C" }
];

class ListItems extends Component {
  render() {
    return (
      <div className="list-items">
        <h2>Product List</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>{product.description}</p>
            </li>
          ))}

        </ul>
      </div>
    )
  }
}

export default ListItems;
