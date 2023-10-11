import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/products');
    }
  return (
    <>
      <h1>My home page</h1>
      <p> Go to <Link to='/products'>the list of products</Link> </p>
      <button onClick ={handleClick}>Go to products page</button>
    </>
  );
};

export default HomePage;
