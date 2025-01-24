"use client";

import React, { useState, useRef, useEffect } from "react";

//icons
import { GiCash } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { CiBookmarkPlus } from "react-icons/ci";

export default function TabsSmBasicLeadingIcon() {
    const [tabSelected, setTabSelected] = useState({
        currentTab: 1,
        noTabs: 5, // Updated to match the number of tabs in dataTabs
    });

    const wrapperRef = useRef(null);

    const handleKeyDown = (e) => {
        if (e.keyCode === 39) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab >= 1 &&
                    tabSelected.currentTab < tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab + 1,
                    });
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: 1,
                    });
                }
            }
        }

        if (e.keyCode === 37) {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                if (
                    tabSelected.currentTab > 1 &&
                    tabSelected.currentTab <= tabSelected.noTabs
                ) {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.currentTab - 1,
                    });
                } else {
                    setTabSelected({
                        ...tabSelected,
                        currentTab: tabSelected.noTabs,
                    });
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    // Data for tabs
    const dataTabs = [
        {
            id: 1,
            tabName: "Cost Transparency",
            icons: <GiCash />,
            desc1: "Plan with confidence using our clear, itemized breakdown of costs—no hidden fees or surprises.",
            desc2: "Use our budget calculator to estimate your total expenses based on the services and features you select.",
            desc3: "Stay in control of your spending and make smarter decisions while planning your event.",
            tabLabel: "tab-label-1ci",
        },
        {
            id: 2,
            tabName: "End To End Assistance",
            icons: <FaRegHandshake />,
            desc1: "We’re with you every step of the way, from choosing the perfect venue to finalizing bookings and coordinating vendors.",
            desc2: "Manage everything in one place with our simple, user-friendly dashboard.",
            dessc3: "Focus on enjoying your event while we handle the logistics for you.",
            tabLabel: "tab-label-2ci",
        },
        {
            id: 3,
            tabName: "24/7 Support",
            icons: <MdContactSupport />,
            desc1: "Get assistance whenever you need it with our round-the-clock customer support, available by chat, email, or phone.",
            desc2: "Whether you’re facing last-minute questions or need expert advice, our team is always ready to help you plan your perfect event.",
            desc3: "Enjoy peace of mind knowing you have access to support at any time, ensuring everything goes smoothly from start to finish.",
            tabLabel: "tab-label-3ci",
        },
        {
            id: 4,
            tabName: "Discounts, Deals, and Exclusive Offers",
            icons: <BiSolidOffer />,
            desc1: "Save big with seasonal discounts, special offers, and limited-time deals on our platform.",
            desc2: "Find exclusive packages and offers that make premium venues and services affordable.",
            desc3: "Check out the “Deals” section for ongoing promotions that fit your budget.",
            tabLabel: "tab-label-4ci",
        },
        {
            id: 5,
            tabName: "Reliable And Fast Booking",
            icons: <CiBookmarkPlus />,
            ddesc1: "Secure your venue instantly with our fast and reliable booking process, ensuring you never miss out on your desired location.",
            desc2: "Our platform offers real-time availability updates, making sure you can book your event space without delay.",
            desc3: "Experience a seamless booking process, so you can move forward with other event details without any hassle.",
            tabLabel: "tab-label-5ci",
        },
    ];

    return (
        <>
            <div className="features flex justify-center items-center flex-col flex-wrap py-6 bg-gray-100">
                <h1 className="text-2xl font-semibold">Our Top Features</h1>
                <section className="w-2/3" aria-multiselectable="false">
                    <ul
                        className="flex items-center overflow-x-auto overflow-y-hidden border-b border-slate-200 mt-3"
                        role="tablist"
                        ref={wrapperRef}
                    >
                        {dataTabs.map((tab) => (
                            <li key={tab.id} className="" role="presentation">
                                <button
                                    className={`-mb-px inline-flex h-8 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-4 text-xs font-medium tracking-wide transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-600 focus:bg-emerald-50 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === tab.id
                                        ? "border-emerald-500 stroke-emerald-500 text-emerald-500 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:stroke-emerald-700 focus:text-emerald-700 disabled:border-slate-500"
                                        : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-emerald-500 hover:text-emerald-500 focus:border-emerald-600 focus:stroke-emerald-600 focus:text-emerald-600 disabled:text-slate-500"
                                        }`}
                                    id={tab.tabLabel}
                                    role="tab"
                                    aria-setsize={dataTabs.length}
                                    aria-posinset={tab.id}
                                    tabIndex={tabSelected.currentTab === tab.id ? 0 : -1}
                                    aria-controls={`tab-panel-${tab.id}`}
                                    aria-selected={tabSelected.currentTab === tab.id}
                                    onClick={() =>
                                        setTabSelected({ ...tabSelected, currentTab: tab.id })
                                    }
                                >
                                    <span className="order-2">{tab.tabName}</span>
                                    <span className="relative only:-mx-4">{tab.icons}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div>
                        {dataTabs.map((tab) => (
                            <div
                                key={tab.id}
                                className={`p-4 text-sm ${tabSelected.currentTab === tab.id ? "" : "hidden"
                                    }`}
                                id={`tab-panel-${tab.id}`}
                                aria-hidden={tabSelected.currentTab === tab.id ? "false" : "true"}
                                role="tabpanel"
                                aria-labelledby={tab.tabLabel}
                                tabIndex={-1}
                            >
                                <ol type="1" className="space-y-3 text-sm">
                                    <li>{tab.desc1}</li>
                                    <li>{tab.desc2}</li>
                                    <li>{tab.desc3}</li>
                                </ol>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
