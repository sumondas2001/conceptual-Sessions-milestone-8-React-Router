import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useNavigation, useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";


const ProductDetails = () => {
     const productDetails = useLoaderData()
     const { title, id, images, price, rating, availabilityStatus, brand, category, description, returnPolicy } = productDetails;
     console.log(productDetails)
     // const data = useParams()
     // // console.log(data)
     // const [product, setProduct] = useState({})
     // useEffect(() => {
     //      fetch(`https://dummyjson.com/products/${data.id}`)
     //           .then(res => res.json())
     //           .then(data => console.log(data))
     // }, [data.id])
     const navigat = useNavigate()
     const handelGoBack = () => {
          navigat(- 1)
     }

     return (
          <div className=" flex items-center justify-center">
               <div className="bg-red-200 rounded-lg mt-2 hover:bg-sky-200 px-6 pb-4  flex flex-col w-96 ">

                    <img className="w-64" src={images[0]} alt="" />

                    <div className=" flex-grow ">
                         <div className="">
                              <h1 className="text-xl font-bold mt-2">{title}</h1>
                              <div className="flex items-center gap-6">
                                   <span className="flex text-lg gap-1 items-center text-amber-500">
                                        <IoStar /> <IoStar /><IoStar /><IoStar /><IoStar />
                                   </span>
                                   <h1 className="text-lg mt-2 font-medium gap-3 bg-amber-400 p-1 rounded-xl ">{rating}</h1>
                              </div>

                              <div className="mt-2">
                                   <h5 className="text-lg font-medium">Braned: {brand}</h5>
                                   <h5 className="text-lg font-medium "> Category: {category}</h5>
                                   <h5 className="text-lg font-medium ">Return Policy: {returnPolicy}</h5>
                                   <h5 className="text-lg font-medium ">Stock: {availabilityStatus}</h5>
                                   <p className="py-1">{description}</p>
                              </div>


                         </div>

                         <div className=" items-center justify-between">
                              <h3 className="text-xl font-bold">Price : {price} $</h3>

                              <button onClick={handelGoBack} className="w-full mt-2 bg-sky-600 hover:bg-red-500 p-3 rounded-xl text-lg font-medium text-white mb-4 ">Go Back</button>

                         </div>

                    </div>
               </div >
          </div>
     );
};

export default ProductDetails;