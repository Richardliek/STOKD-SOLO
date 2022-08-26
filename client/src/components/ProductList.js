import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import WelcomeVideo from "./WelcomeVideo";


const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products`)
            .then( res => {
                console.log(res.data);
                setProducts(res.data.products);
            })
            .catch((err) => console.log(err));
        }, []);
    
    //delete function for products
    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}/delete`)
            .then((res) => {
                console.log(res);
                const newProducts = products.filter(product => product.id !== id);
                setProducts(newProducts);
                navigate('/');
            }).catch((err) => console.log(err));
    }

  return (
      <div className=" pt-4 ml-8 w-2/3">
        <div>
            <WelcomeVideo/>
            {products.map( (product) => (  
                <div key={product._id} className="grid bg-white grid-cols-2 gap-20 p-4 m-8 rounded-xl shadow-lg h-50 transform transition duration-500 hover:scale-95 hover:shadow-xl text-gray-700 hover:opacity-80">
                    <img className="object-contain rounded-xl relative m-1 w-50 h-50" src={product.img} alt="img" />
                    <div className="grid grid-cols-1 m-4">
                        <div>
                            <p className='font-bold text-2xl font-Montserrat gap-1 cursor-pointer flex justify-between'>{product.name}</p>
                            <p className="font-Quicksand text-xl">{product.type}</p>
                            <div className='cursor-pointer'>
                                <div className='gap-1'>
                                    <p>_________</p>
                                    <p className="font-Quicksand font-semibold text-xl">About this Board:</p>
                                    <div className="font-Quicksand text-md">
                                        <p> Surf level: {product.level} </p>
                                        <p> Board type: {product.board} </p>
                                        <p> Surfboard description: {product.description} </p>
                                        <p> Board price: ${product.price} </p>
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Buy</button>| 
                                    <Link to={`/products/${product._id}/edit`} className="btn btn-primary" >Edit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default ProductList;