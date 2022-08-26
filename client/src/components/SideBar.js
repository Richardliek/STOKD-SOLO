import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from './ProductForm';


function SideBar() {
    const [showSpotForm, setSpotForm] = useState(false);
    // const [user, setUser] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [users, setUsers] = useState([]);

    const removeFromDom = (userId, id) => {
        setUsers(users.filter(user => user._id !== userId));
    }

    return (
        <div className='absolute bg-white right-0 w-1/4 border-2 border-gray-50 rounded-xl shadow-lg m-4 mr-16'>
            <br />
            <h1 className='text-center text-gray-800 font-semibold text-2xl font-Quicksand'>Your Activities</h1>
            <div className='grid grid-cols-1 text-center m-4'>
                <p className='text-sm mb-2 font-semibold font-Quicksand'>Need to sell a board?</p>
                {showSpotForm && <ProductForm />}
                <button onClick={() => setSpotForm(!showSpotForm)}
                    className=" bg-green-300 rounded-full p-2 px-4 text-white font-semibold font-Montserrat focus-within:cursor-pointer active:scale-90 transform transition duration-500 hover:scale-90 hover:shadow-xl hover:bg-green-400">
                    {showSpotForm ? "minimize" : "add your old surfboards!"}
                </button>
            </div>
        </div>
    )
}

export default SideBar