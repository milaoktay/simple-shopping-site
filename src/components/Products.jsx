import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="productPage">
      <Filters />
      <div className="productContainer">
        {products.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
