import { CartState } from "../context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const {
    state: { products, sort },
  } = CartState();

  const sortProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    return sortedProducts;
  };
  return (
    <div className="productPage">
      <Filters />
      <div className="productContainer">
        {sortProducts().map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
