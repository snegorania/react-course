import { Link } from "react-router-dom";

const ProductsPage = () => {
  const products = [{ id: "p1" }, { id: "p2" }, { id: "p3" }];
  
  return (
    <>
      <h1>My products page</h1>
      <ul>
        {products.map((el) => (
          <li>
            <Link to={`/products/${el.id}`}>Link to product {el.id}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
