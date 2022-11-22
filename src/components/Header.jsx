import {
  Navbar,
  Container,
  NavbarBrand,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";

import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="header">
        <NavbarBrand>
          <a href="/">Home</a>
        </NavbarBrand>

        <Dropdown className="dropdown">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart />
            <Badge bg="success">{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <span className="cartitem" key={prod.id}>
                    <img
                      src={prod.image}
                      className="cartItemImg"
                      alt={prod.title}
                    />
                    <div className="cartItemDetail">
                      <span>{prod.title}</span>
                      <span>{prod.price}€</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        })
                      }
                    />
                  </span>
                ))}
                <Link to="/cart">
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go to cart
                  </Button>
                </Link>
              </>
            ) : (
              <span>Cart is empty!</span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
