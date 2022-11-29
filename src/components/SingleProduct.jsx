import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import { formatCurrency } from "./Cart";

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={product.image} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{formatCurrency(product.price)}</span>
          </Card.Subtitle>
          {cart.some((p) => p.id === product.id) ? (
            <div>
              <div className="d-flex mb-3" style={{ gap: ".5rem" }}>
                <Button
                  variant="success"
                  onClick={() =>
                    dispatch({
                      type: "DECREASE_QTY",
                      payload: product,
                    })
                  }
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{product.qty}</span> in cart
                </div>
                <Button
                  variant="success"
                  onClick={() =>
                    dispatch({
                      type: "INCREASE_QTY",
                      payload: product,
                    })
                  }
                >
                  +
                </Button>
              </div>
              <Button
                variant="outline-secondary"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  })
                }
              >
                Remove
              </Button>
            </div>
          ) : (
            <Button
              variant="success"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
            >
              Add to Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
