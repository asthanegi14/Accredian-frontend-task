import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosArrowForward } from "react-icons/io";
import { FaGraduationCap } from "react-icons/fa";
import Popup from './Popup';

const sections = [
    "All Programs", "Computer Science", "Product Management", "Strategy & Leadership",
    "Business Management", "Fintech", "Senior Management",
    "Data Science", "Digital Transformation", "Business Analytics"
];

const Benefits = () => {
    const [selectedFilter, setSelectedFilter] = useState('All Programs');
    const [data, setData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        fetchData(selectedFilter);
    }, [selectedFilter]);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    };

    const backendUrl = import.meta.env.VITE_url || "http://localhost:5000";

    const fetchData = async (filter) => {
        console.log("fetching data...");
        try {
            console.log("post request...");
            const response = await axios.get(`${backendUrl}/getReferrals`, { filter });
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
        setShowContent(false);
    };

    const toggleContent = () => {
        setShowContent(!showContent);
        if (!showContent) {
            fetchData(selectedFilter);
        }
    };

    return (
        <div className='flex justify-center items-center p-[2%]'>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h2 className='flex gap-2 justify-center items-center text-xl font-semibold'>
                    What Are The <span className='text-blue-400'>Referral Benefits?</span>
                </h2>

                <div className='sm:flex sm:flex-row flex-col gap-4'>
                    {/* Filters Section */}
                    <div className="flex flex-col mt-4 border-2 border-white shadow-2xl rounded-md items-start">
                        {sections.map((section, idx) => (
                            <button key={idx}
                                className={`uppercase text-sm flex w-full gap-4 justify-between rounded-sm font-semibold p-4 ${selectedFilter === section ? 'bg-blue-400 text-white' : `${idx === sections.length - 1 ? "border-b-0" : "border-b-2"} border-gray-300 text-black `}`}
                                onClick={() => handleFilterSelect(section)}
                            >
                                <p className='text-left'>{section}</p>
                                <IoIosArrowForward />
                            </button>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div className="mt-4 rounded-2xl">
                        {showContent ? (
                            <table className="table-auto">
                                <thead className='bg-blue-300 text-blue-600 font-semibold'>
                                    <tr>
                                        <th className="border px-4 py-2">Program</th>
                                        <th className="border px-4 py-2">Reference Bonus</th>
                                        <th className="border px-4 py-2">Referee Bonus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2 flex gap-2 items-center">
                                                <FaGraduationCap />
                                                {item.name}</td>
                                            <td className="border px-4 py-2">{item.referenceBonus}</td>
                                            <td className="border px-4 py-2">{item.refereeBonus}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <button className="bg-blue-700 w-fit py-2 px-6 text-white rounded-md" onClick={toggleContent}>Show Content</button>
                        )}
                    </div>
                </div>

                {!showContent && (
                    <button className='bg-blue-700 w-fit py-2 px-6 text-white rounded-md' onClick={handlePopup}>Refer Now</button>
                )}
            </div>

            {showPopup && <Popup handleClose={handlePopup} />}
        </div>
    );
};

export default Benefits;
