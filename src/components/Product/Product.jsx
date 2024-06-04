import { IoStar } from "react-icons/io5";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Product = ({ product }) => {
     const { title, id, images, price, rating } = product;
     // console.log(product)
     return (
          <div className="bg-red-200 rounded-lg mt-10 hover:bg-sky-200 p-6  flex flex-col ">


               <div>
                    <img className="" src={images[0]} alt="" />
               </div>


               <div className=" flex-grow">

                    <h1 className="text-2xl font-bold mt-6">{title}</h1>
                    <h1 className="flex text-lg mt-4 font-medium gap-3"><span className="flex text-lg gap-1 items-center ">
                         <IoStar /> <IoStar /><IoStar /><IoStar /><IoStar />
                    </span>{rating}</h1>


                    <div className="flex items-center justify-between">
                         <h3 className="text-xl font-bold">Price : {price} $</h3>
                         <Link to={`/product/${id}`}>
                              <button className="bg-sky-600 hover:bg-red-500 p-3 rounded-xl text-lg font-medium text-white mb-4 ">View Details</button>
                         </Link>
                    </div>

               </div>
          </div >

     );
};
Product.propTypes = {
     product: PropTypes.object
}

export default Product;