import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import { Col, Row } from "react-bootstrap";

const Products = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="productPage">
      {products.length > 0 && <Filters />}
      <Row md={2} xs={1} lg={3} className="g-3 productContainer">
        {products.map((product) => (
          <Col key={product.id}>
            <SingleProduct product={product} key={product.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
