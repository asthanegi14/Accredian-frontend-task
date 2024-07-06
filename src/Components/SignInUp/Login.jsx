import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const backendUrl = import.meta.env.VITE_url || "http://localhost:5000";
    console.log(backendUrl);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${backendUrl}/login`, {
                email,
                password
            });
            if (response.data == "This email is not registered") {
                toast.error("This email is not registered");
            }
            else if (response.data == "Password not provided") {
                toast.error("Password not provided");
            }
            if (response.status == 400) {
                toast.error("Wrong Password");
            }
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.name));
                localStorage.setItem('email', response.data.email);

                navigate("/");
            } else {
                throw new Error(response.data.error);
            }
        } catch (error) {
            toast.error(`${error.response?.data.error || error.message}`);
        }
    };

    return (
        <div>
            <ToastContainer />
            <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-white z-50'>
                <div className='relative bg-white p-4 rounded-lg w-full max-w-lg mx-4 shadow-2xl shadow-black py-8'>
                    <h2 className='text-2xl text-center font-bold mb-4'>Login</h2>
                    <form onSubmit={handleSubmit} className='flex flex-col p-6 w-full gap-4'>
                        <label htmlFor="email" className='text-lg font-semibold'>Email</label>
                        <input type="email" name='email' placeholder='Enter your Email Id' className='bg-gray-200 p-2 rounded-md outline-none' onChange={(e) => setEmail(e.target.value)} />

                        <label htmlFor="password" className='text-lg font-semibold'>Password</label>
                        <input type="password" name='password' placeholder='Enter your password here' className='bg-gray-200 p-2 rounded-md outline-none' onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit" className='bg-blue-700 text-white py-2 w-fit rounded px-8 mt-4 self-center'>Login</button>

                        <p>Don't have an Account? <span className="text-red-500 cursor-pointer" onClick={() => navigate('/register')}>Register Here</span></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
