import React from 'react';
import Logo from '../../assets/footerIcon.png';
import { FaPlus } from 'react-icons/fa';
// import { AiFillFacebook, AiFillTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
    const programs = [
        "Data Science & AI",
        "Product Management",
        "Business Analytics",
        "Digital Transformation",
        "Business Management",
        "Project Management",
        "Strategy & Leadership",
        "Senior Management",
        "Fintech"
    ];

    const contact = [
        "Email us (For Data Science Queries): admissions@accredian.com",
        "Email us (For Product Management Queries): pm@accredian.com",
        "Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)",
        "Product Management Admission Helpline:+91 9625811095",
        "Enrolled Student Helpline: +91 7969322507",
        "Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015"
    ];

    const AccredianLinks = [
        "About",
        "Career",
        "Blog",
        "Admission Policy",
        "Privacy Policy",
        "Terms Of Services",
        "Master FAQs"
    ];

    return (
        <div className='bg-gray-900 py-4 sm:px-[12%] px-10 flex flex-col gap-8'>
            <div className='flex sm:flex-row flex-col gap-4 justify-between items-center'>
                <img src={Logo} alt="icon" />
                <div className='flex flex-col gap-2'>
                    <button className='bg-blue-500 text-white py-1 px-6 rounded-md'>Schedule 1-on-1 Call Now</button>
                    <p className='text-white text-sm text-center'>Speak with our Learning Advisor</p>
                </div>
            </div>
            <hr className='w-full border-gray-700' />
            <div className='flex flex-col sm:flex-row gap-8'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold text-white'>Programs</h2>
                    {programs.map((program, idx) => (
                        <p key={idx} className='text-gray-200 flex justify-between'>{program}<FaPlus className='ml-2' /></p>
                    ))}
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold text-white'>Contact Us</h2>
                    {contact.map((contactInfo, idx) => (
                        <p key={idx} className='text-gray-200'>{contactInfo}</p>
                    ))}
                    <h2 className='font-semibold text-white'>Why Accredian</h2>
                    <h2 className='text-white'>Follow Us</h2>
                    <div className='flex gap-2'>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className='text-gray-200' /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaXTwitter className='text-gray-200' /></a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram className='text-gray-200' /></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-gray-200' /></a>

                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube className='text-gray-200' /></a>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-semibold text-white'>Accredian</h2>
                    {AccredianLinks.map((link, idx) => (
                        <p key={idx} className='text-gray-200'>{link}</p>
                    ))}
                </div>
            </div>

            <p className='text-center text-white text-sm'>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
    );
}
