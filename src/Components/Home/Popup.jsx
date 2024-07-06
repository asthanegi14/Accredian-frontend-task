import { ImCross } from "react-icons/im";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default function Popup({ handleClose }) {
    const [name, setName] = useState('');
    const [referenceBonus, setReferenceBonus] = useState('');
    const [refereeBonus, setRefereeBonus] = useState('');
    const [email, setEmail] = useState('');

    const backendUrl = import.meta.env.url || "http://localhost:5000";


    useEffect(() => {
        const fetchUserFromLocalStorage = () => {
            const userData = localStorage.getItem('email');

            if (userData != "undefined") {
                setEmail(userData);
            }
        };

        fetchUserFromLocalStorage();
        console.log(JSON.stringify(localStorage.getItem('user')));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${backendUrl}/referrals`, {
                name,
                referenceBonus,
                refereeBonus,
                email,
            });
            toast.success('Referral submitted successfully');
        } catch (error) {
            toast.error('Error submitting referral', error);
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <ToastContainer />
            <div className='relative bg-white p-4 rounded-lg w-full max-w-lg mx-4'>
                <ImCross className='absolute top-2 right-2 text-black cursor-pointer' onClick={handleClose} />
                <h2 className='text-2xl text-center font-bold mb-4'>Refer Info</h2>
                <form action="" className='flex flex-col p-6 w-full gap-4' onSubmit={handleSubmit}>
                    <label htmlFor="name" className='text-lg font-semibold'>Program Name</label>
                    <input type="text" name="name" placeholder='Enter your Program name here' className='bg-gray-200 p-2 rounded-md outline-none' onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="reference" className='text-lg font-semibold'>Reference Bonus</label>
                    <input type="text" name='reference' placeholder='Enter your Reference Bonus here' className='bg-gray-200 p-2 rounded-md outline-none' onChange={(e) => setReferenceBonus(e.target.value)} />

                    <label htmlFor="referee" className='text-lg font-semibold'>Referee Bonus</label>
                    <input type="text" name='referee' placeholder='Enter your Referee Bonus here' className='bg-gray-200 p-2 rounded-md outline-none' onChange={(e) => setRefereeBonus(e.target.value)} />

                    <button type="submit" className='bg-blue-700 text-white py-2 w-fit rounded px-8 mt-4 self-center'>Submit</button>
                </form>
            </div>
        </div>
    )
}
