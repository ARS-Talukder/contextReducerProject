import { useProduct } from '../context/ProductProvider';
import ProductCard from './ProductsCard';

const Home = () => {
    const { state } = useProduct();
    const { products, loading, error } = state;
    // console.log(products);
    // console.log(data);
    let content;
    if (loading) {
        content = <p>Loading...</p>
    }
    if (error) {
        content = <p>Error</p>
    }
    if (!loading && !error && products.length === 0) {
        content = <p>Nothing to show. Product list is empty</p>
    }
    if (!loading && !error && products.length) {
        content = products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }
    return (
        <div>
            {content}
        </div>
    );
};

export default Home;