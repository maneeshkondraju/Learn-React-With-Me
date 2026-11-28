import React from "react";
import Button from './Button'

function Product() {
  return (
    <>
      <section className="container-fluid">
        <h1>mens shirt</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, sed!
          Doloribus illum aliquid numquam! Commodi, debitis rem optio accusamus
          dicta accusantium architecto non iste quia. Voluptatum, commodi.
          Cumque fuga beatae dolor magni ipsa repellendus, nobis saepe, dicta
          voluptatum sapiente ab possimus doloribus, temporibus odio impedit
          quod modi exercitationem minima ipsam!
        </p>
        <Button color="success"> shop now</Button>
      </section>
      <div className="container mt-3 ">
        <div className="card">
          <div className="card-body">
            <h3>Formal shirt</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolorum alias ducimus aperiam, sequi quas quod quos
              praesentium expedita nulla reiciendis quidem corrupti quo,
              veritatis, quis ratione nobis nesciunt repellat.
            </p>
            <Button color="warning">add to cart</Button>
            <Button color="primary">but now</Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
