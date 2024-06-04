
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
     const { products } = useLoaderData();



     return (
          <div>
               <div className="grid grid-cols-3 gap-4 mx-10">
                    {
                         products?.map((product) => <Product key={product.id} product={product}></Product>)
                    }
               </div>
          </div>
     );
};

export default Products;