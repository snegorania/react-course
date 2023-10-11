import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Book",
    price: 6,
    description: "Book about redux",
  },
  {
    id: "p2",
    title: "Game",
    price: 7,
    description: "New computer game",
  },
  {
    id: "p3",
    title: "Tiket",
    price: 5,
    description: "Concert tiket",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
