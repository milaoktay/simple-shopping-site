import { Offcanvas, Stack, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}

export function ShoppingCart() {
  const {
    state: { products, cart, isOpen },
    dispatch,
  } = CartState();

  return (
    <Offcanvas
      show={isOpen}
      onHide={() =>
        dispatch({
          type: "TOGGLE_CART",
          payload: isOpen,
        })
      }
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cart.map((item) => (
            <SingleProduct product={item} key={item.id} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cart.reduce((total, cartItem) => {
                const item = products.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.qty;
              }, 0)
            )}
          </div>
        </Stack>
        <Button type="button" disabled={cart.length === 0} variant="success">
          Proceed to Checkout
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
