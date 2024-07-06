import R1 from '../../assets/r1.png';
import R2 from '../../assets/r2.png';
import R3 from '../../assets/r3.png';
import { useState, useEffect } from 'react';
import Popup from './Popup';

export default function Refer() {
    const [showPopup, setShowPopup] = useState(false);

    const arr = [
        {
            img: R1,
            text: "Submit referrals easily via our website’s referral section."
        },
        {
            img: R2,
            text: "Earn rewards once your referral joins an Accredian program."
        },
        {
            img: R3,
            text: "Both parties receive a bonus 30 days after program enrollment."
        },
    ]

    const handlePopup = () => {
        setShowPopup(!showPopup);
    };


    return (
        <div className='bg-[#EEF5FF] p-10 flex flex-col justify-center items-center gap-16'>
            <h2 className='flex gap-2 font-bold text-2xl'>How Do I <span className='text-blue-400'>Refer?</span></h2>

            <div className='flex flex-col sm:flex-row gap-16'>
                {arr.map((item, idx) => (

                    <div key={idx} className='rounded-full w-60 h-60 flex flex-col gap-4 shadow-2xl justify-center items-center p-4'>
                        <img src={item.img} alt="image" className='w-10' />
                        <p className='text-center'>{item.text}</p>
                    </div>
                ))}
            </div>

            <button className='bg-blue-700 py-2 px-6 text-white rounded-md' onClick={handlePopup}>Refer Now</button>

            {showPopup && <Popup handleClose={handlePopup} />}

        </div>
    )
}
