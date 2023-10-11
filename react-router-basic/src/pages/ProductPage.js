import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Single product</h1>
      <p>{params.id}</p>
    </>
  );
};

export default ProductsPage;
