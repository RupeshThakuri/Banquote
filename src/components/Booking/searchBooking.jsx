import React from 'react';

// Import style
import style from "./searchBooking.module.css";

export default function SearchBooking() {
    // Data to map for the form
    const searchBookingData = [
        {
            id: 1,
            title: "Reserve Date",
            type: "date",
            placeholder: "dd-mm-yy",
        },
        {
            id: 2,
            title: "Capacity",
            type: "number",
            placeholder: "Enter required Capacity",
        },
        {
            id: 3,
            title: "Price",
            type: "number",
            placeholder: "Enter Desired Price",
        },
        {
            id: 4,
            title: "Location",
            type: "text",
            placeholder: "Enter Desired Location",
        },
    ];

    return (
        <>
            <div className="bg-white w-2/3 mx-auto p-6 rounded-md shadow-md">
                <h2 className="mb-4 text-xl font-semibold text-center">
                    Check Booking Availability
                </h2>
                <div className="forms flex flex-wrap justify-between gap-3">
                    {/* Mapping the above form data */}
                    {searchBookingData.map((item) => (
                        <div key={item.id} className="w-full sm:w-1/2 lg:w-1/4">
                            <p className="mb-2 text-sm font-medium text-gray-600">{item.title}</p>
                            <input
                                type={item.type}
                                placeholder={item.placeholder}
                                className={`w-full py-2 px-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-teal-500 ${style.inputForm}`}
                            />
                        </div>
                    ))}
                    <div className="w-full flex justify-center">
                        <a
                            className="rounded-md bg-teal-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 transition"
                            href="#"
                        >
                            Submit
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
