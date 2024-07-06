import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function FAQ() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [questions, setQuestions] = useState([
        { question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?", answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work." },
        { question: "What is the minimum system configuration required?", answer: "The minimum system configuration includes XYZ." },
    ]);

    const handleButtonClick = (index) => {
        setSelectedButton(index === selectedButton ? null : index);
    };

    const toggleAnswer = (index) => {
        const updatedQuestions = questions.map((q, idx) => {
            if (idx === index) {
                return { ...q, displayAnswer: !q.displayAnswer };
            } else {
                return q;
            }
        });
        setQuestions(updatedQuestions);
    };

    return (
        <div className='flex justify-center items-center p-[2%]'>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h2 className='flex gap-2 justify-center items-center text-xl font-semibold'>Frequently Asked <span className='text-blue-400'>Questions</span></h2>

                <div className='flex gap-8 p-8'>
                    <div className='flex flex-col gap-8'>
                        <button className={`border-2 rounded-lg p-2 ${selectedButton === 0 ? 'border-0 shadow-xl text-blue-400' : 'border-black'}`} onClick={() => handleButtonClick(0)}>Eligibility</button>
                        <button className={`border-2 rounded-lg p-2 ${selectedButton === 1 ? 'border-0 shadow-xl text-blue-400' : 'border-black'}`} onClick={() => handleButtonClick(1)}>How To Use?</button>
                        <button className={`border-2 rounded-lg p-2 ${selectedButton === 2 ? 'border-0 shadow-xl text-blue-400' : 'border-black'}`} onClick={() => handleButtonClick(2)}>Terms & Conditions</button>
                    </div>

                    <div>

                        <div className="p-4 border-2 flex flex-col gap-4 border-gray-300 rounded-lg">
                            {questions.map((q, idx) => (
                                <div key={idx} className='flex flex-col gap-2'>
                                    <p className='flex gap-1 items-center cursor-pointer' onClick={() => toggleAnswer(idx)}>
                                        {q.question} {q.displayAnswer ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </p>
                                    <p className='text-sm text-gray-700'>
                                        {q.displayAnswer && <p>{q.answer}</p>}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
