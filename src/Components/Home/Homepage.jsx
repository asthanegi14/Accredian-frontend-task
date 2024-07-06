import { useState, useEffect } from 'react';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import Image from "../../assets/homepage.png";
import ImageTag from "../../assets/homepageTag.png";
import MoneyImg1 from "../../assets/mny1.png";
import MoneyImg2 from "../../assets/mny2.png";
import MoneyImg4 from "../../assets/mny4.png";
import MoneyImg5 from "../../assets/mny5.png";
import Refer from './Refer';
import Benefits from './Benefits';
import FAQ from './FAQ';
import Support from './Support';
import Popup from './Popup';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export default function Homepage() {
    const pages = ['Refer', 'Benefits', 'FAQs', 'Support'];
    const [activePage, setActivePage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [user, setUser] = useState(null);

    const handleButtonClick = (page) => {
        setActivePage(page);
    };

    useEffect(() => {
        const fetchUserFromLocalStorage = () => {
            const userData = localStorage.getItem('user');

            if (userData != "undefined") {
                setUser(JSON.parse(userData));
            }
        };

        fetchUserFromLocalStorage();
    }, []);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowBackToTop(true);
        } else {
            setShowBackToTop(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className='m-4 flex flex-col justify-around items-center relative w-vh gap-4'>
                <div className='flex py-2 px-4 rounded-full w-fit bg-blue-100 gap-8 text-sm'>
                    {pages.map((page) => (
                        <Link
                            key={page}
                            to={page.toLowerCase()}
                            smooth={true}
                            duration={500}
                            onClick={() => handleButtonClick(page)}
                            className={`relative cursor-pointer ${activePage === page ? 'text-blue-600' : ''}`}
                        >
                            {page}
                        </Link>
                    ))}
                </div>

                {user && <h2 className='uppercase font-bold text-center'>Welcome Back {user}</h2>}

                <div className="flex sm:m-8 m-2 bg-green-100 rounded-xl justify-center items-center relative shadow-lg w-fit">
                    <div className="w-1/4 flex flex-col gap-4">
                        <img src={ImageTag} alt="tag" />
                        <button className="bg-blue-700 text-white rounded-lg w-fit sm:py-2 py-2 sm:px-4 px-2 sm:text-sm text-xs sm:flex-nowrap" onClick={handlePopup}>Refer Now</button>
                    </div>
                    <div className="w-1/2">
                        <img src={Image} alt="Image" />
                    </div>
                    <img src={MoneyImg1} alt="money" className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16" />
                    <img src={MoneyImg2} alt="money" className="absolute bottom-1/2 right-[5%] w-12 h-12 sm:w-16 sm:h-16" />
                    <img src={MoneyImg5} alt="money" className="absolute bottom-[2%] right-1/2 w-12 h-12 sm:w-16 sm:h-16" />
                    <img src={MoneyImg4} alt="money" className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16" />
                </div>
            </div>

            {showPopup && <Popup handleClose={handlePopup} />}

            {/* other nav items */}
            <Element name="refer">
                <Refer />
            </Element>
            <Element name="benefits">
                <Benefits />
            </Element>
            <Element name="faqs">
                <FAQ />
            </Element>
            <Element name="support">
                <Support />
            </Element>

            {showBackToTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-blue-700 text-white p-2 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
                >
                    <MdOutlineKeyboardDoubleArrowUp />
                </button>
            )}
        </div>
    );
}
