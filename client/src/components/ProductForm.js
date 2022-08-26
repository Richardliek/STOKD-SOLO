import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const navigate = useNavigate();
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState('');
  const [board, setBoard] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/api/products/new`, {
        name,
        img,
        location,
        level,
        board,
        description,
        price
      })
      .then((res) => {
        console.log(res);
        navigate(`/`);
      })
      .catch((err) => {
        console.log("err.response.data.errors:", err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  } 
  
  
  return (
    <div className="shadow-xl bg-gray-50 rounded-lg p-4 m-4" >
      <h1 className='text-2xl font-bold text-center'>Sell your surfboards!</h1>
      <br />
      <form onSubmit={handleSubmit} className='font-Quicksand text-center'>
        {errors.name && (<p className='text-red-500 text-center'>{errors.name.message}</p>)}
          <label>Product Name:</label>
          <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white" >
              <input className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </p>
          <label>Img URL:</label>
          <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white" >
              <input className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" type="text" onChange={(e) => setImg(e.target.value)} value={img} />
          </p>
          {errors.location && (<p className='text-red-500 text-center'>{errors.location.message}</p>)}
          <label>Location:</label>
          <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white" >
              <input className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" type="text" onChange={(e) => setLocation(e.target.value)} value={location} />
          </p>
          {errors.level && (<p className='text-red-500 text-center'>{errors.level.message}</p>)}
          <label>Level:</label>
          <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white" >
              <select className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" name="level" id="level" onChange={(e) => setLevel(e.target.value)} value={level}>
                  <option></option>
                  <option value="beginner">Beginner</option>
                  <option value="amateur">amateur</option>
                  <option value="advanced">advanced</option>
                  <option value="expert">expert</option>
              </select>
          </p>
          {errors.board && (<p className='text-red-500 text-center'>{errors.board.message}</p>)}
          <label>Board Type:</label>
          <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white" >
              <select className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" name="board" id="board" onChange={(e) => setBoard(e.target.value)} value={board}>
                  <option></option>
                  <option value="shortboard">shortboard</option>
                  <option value="longboard">longboard</option>
              </select>
          </p>
          {errors.description && (<p className='text-red-500 text-center'>{errors.description.message}</p>)}
          <label>Description:</label>
          <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white" >
              <input className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" name="description" id="breakType" onChange={(e) => setDescription(e.target.value)} value={description}>
              </input>
          </p>
          {errors.price && (<p className='text-red-500 text-center'>{errors.price.message}</p>)}
         <label>Price:</label>
          <p className="flex items-center border-2 border-gray-50 shadow-md rounded-full bg-white" >
              <input className="flex-grow pl-1 bg-transparent outline-none text-sm sm:m-1 md:text-center sm:text-left text-gray-600 font-Quicksand bg-white" name="price" id="breakType" onChange={(e) => setPrice(e.target.value)} value={price}>
              </input>
          </p>
          <input onSubmit={(e) => navigate.push('/')} className="bg-green-300 font-Montserrat text-lg font-bold text-white rounded-full mt-4 p-1 px-3 cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:bg-green-400 hover:shadow-xl" type="submit" value="add your board" />
      </form>
  </div>
  );
}

export default ProductForm;
