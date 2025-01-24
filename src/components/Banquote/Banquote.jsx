import React from 'react'

function Banquote() {
    //image data
    const ImageData = [
        {
            id: 1,
            imgSrc: "/Images/img1.jpg",
            address: "123 Wallaby Avenue, Park Road",
            price: 240000,
            parking: 2,
            bathroom: 5,
            capacity: 1200
        },
        {
            id: 2,
            imgSrc: "/Images/img2.jpg",
            address: "123 Wallaby Avenue, Park Road",
            price: 240000,
            parking: 2,
            bathroom: 5,
            capacity: 1200
        },
        {
            id: 3,
            imgSrc: "/Images/img3.jpg",
            address: "123 Wallaby Avenue, Park Road",
            price: 240000,
            parking: 2,
            bathroom: 5,
            capacity: 1200
        }
    ];

    return (
        <>
            <section className='banquote mt-24 py-3 flex flex-col justify-center items-center space-y-5'>
                <h1 className='text-2xl font-semibold'>Our Partner Banquote</h1>
                <div className='banqCards flex justify-around items-center flex-wrap space-x-10'>
                    {ImageData.map((item) => (
                        <a href="#" className="block rounded-lg p-4 shadow-md shadow-indigo-100 hover:shadow-indigo-300" key={item.id}>
                            <img
                                alt=""
                                src={item.imgSrc}
                                className="h-56 w-full rounded-md object-cover"
                            />

                            <div className="mt-2">
                                <dl>
                                    <div>
                                        <dt className="sr-only">Price</dt>

                                        <dd className="text-sm text-gray-500">Rs. {item.price} per day</dd>
                                    </div>

                                    <div>
                                        <dt className="sr-only">Address</dt>

                                        <dd className="font-medium">{item.address}</dd>
                                    </div>
                                </dl>

                                <div className="mt-6 flex items-center gap-8 text-xs">
                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            className="size-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                            />
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Parking</p>

                                            <p className="font-medium">{item.parking} spaces</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            className="size-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                            />
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Bathroom</p>

                                            <p className="font-medium">{item.bathroom} rooms</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            className="size-4 text-indigo-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">capacity</p>

                                            <p className="font-medium">{item.capacity} rooms</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <button className="btn btn-outline btn-accent">Check More Banquote</button>
            </section>
        </>
    )
}

export default Banquote
