import SuportImg from "../../assets/support.png";

export default function Support() {
    return (
        <div className="m-[10%] flex sm:flex-row flex-col gap-8 p-[5%] justify-between items-center rounded-xl bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900">
            <div className="flex gap-4 items-center">
                <img src={SuportImg} alt="image" className="bg-white p-2 rounded-lg" />
                <div className="flex flex-col text-white gap-1">
                    <h2 className="font-semibold">Want to delve deeper into the program?</h2>
                    <p className="text-xs">Share your details to receive expert insights from our program team!</p>
                </div>
            </div>
            <div>
                <button className="bg-white py-2 px-6 text-blue-500 rounded-md font-bold">Get in touch</button>
            </div>
        </div>
    )
}
