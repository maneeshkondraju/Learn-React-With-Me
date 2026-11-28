import React from "react";

function Products() {
  const products = [
    {
      id: 101,
      name: "Speaker",
      category: "Electronics",
      price: 499,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30d",
      rating: 4.1,
      reviews: 125,
      discount: 22,
      description: "Premium speaker with high build quality.",
      stock: 32,
      brand: "Sony",
    },
    {
      id: 102,
      name: " Watch",
      category: "Accessories",
      price: 399,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      rating: 4.7,
      reviews: 185,
      discount: 39,
      description: "long life with premium gorilla glass.",
      stock: 25,
      brand: "Fenton",
    },
    {
      id: 103,
      name: "casual Shoes",
      category: "Footwear",
      price: 999,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      rating: 4.2,
      reviews: 150,
      discount: 29,
      description: "casual shoes for everyday comfort.",
      stock: 35,
      brand: "Nike",
    },
    {
      id: 104,
      name: "travel bag",
      category: "Bags",
      price: 1299,
      originalPrice: 1799,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      rating: 4.0,
      reviews: 65,
      discount: 28,
      description: "Durable backpack with multiple storage compartments.",
      stock: 12,
      brand: "Skybags",
    },
    {
      id: 105,
      name: "Sunglasses",
      category: "Fashion",
      price: 899,
      originalPrice: 1499,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      rating: 4.3,
      reviews: 95,
      discount: 40,
      description: "Stylish UV-protected sunglasses.",
      stock: 20,
      brand: "Ray-Ban",
    },
      
  ];
  return (
    <div className="container" >
         <div className="row mt-5">
      {products.map((product) => (
         
            <div className="col-md-6" key={product.id}>
              <div className="card mt-3 text-center">
                <div className="card-header">
                  <h3>{product.name}</h3>
                </div>

                <div className="card-body">
                  <p>{product.category}</p>

                  <p>{product.description}</p>

                  <h4>
                    ₹{product.price}
                    <del> ₹{product.originalPrice}</del>
                  </h4>
                  <img>{product.image}</img>

                  <p>
                    {product.rating} ({product.reviews} reviews)
                  </p>

                  <button className="btn btn-info">+</button>
                  <button className="btn btn-danger mx-3">-</button>
                </div>
              </div>
            </div>
      
      ))}
    </div>
      </div>
  );
}

export default Products;