import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_url || "http://localhost:5000";

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password != confirmPassword) {
            toast.error("Both Passwords must be same");
        }

        try {
            const response = await axios.post(`${backendUrl}/register`, {
                name,
                email,
                password
            });
            navigate('/login');
        } catch (error) {
            console.log('Registered successfully', error.message);
            toast.error('Error Registering');
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white z-50'>
            <ToastContainer />
            <div className='relative bg-white p-4 rounded-lg w-full max-w-lg mx-4'>
                <h2 className='text-2xl text-center font-bold mb-4'>Registration Form</h2>
                <form className='flex flex-col p-6 w-full gap-4' onSubmit={handleSubmit}>
                    <label htmlFor="name" className='text-lg font-semibold'>Name</label>
                    <input type="text" name="name" placeholder='Enter your Name here' className='bg-gray-200 p-2 rounded-md outline-none' onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="email" className='text-lg font-semibold'>Email</label>
                    <input type="email" name='email' placeholder='Enter your Email Id' className='bg-gray-200 p-2 rounded-md outline-none' onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="password" className='text-lg font-semibold'>Password</label>
                    <input type="password" name='password' placeholder='Enter your password here' className='bg-gray-200 p-2 rounded-md outline-none' onChange={(e) => setPassword(e.target.value)} />

                    <label htmlFor="password" className='text-lg font-semibold'>Confirm Password</label>
                    <input type="password" name='password' placeholder='Re Enter your password here' className='bg-gray-200 p-2 rounded-md outline-none' onChange={(e) => setConfirmPassword(e.target.value)} />

                    <button type="submit" className='bg-blue-700 text-white py-2 w-fit rounded px-8 mt-4 self-center'>Register</button>
                </form>
            </div>
        </div>
    )
}
