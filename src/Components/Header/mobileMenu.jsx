import { useState } from "react";
import BottomSection from "./bottomSection";
import { ChevronDown, ChevronUp } from "lucide-react";


const MobileMenu = ({ menuOpen }) => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const [openGroup, setOpenGroup] = useState(null);
    const languages = ["🇺🇸 English", "🇲🇽 Español"];
    const [lang, setLang] = useState(languages[0]);

    const sortingOption = [
        { title: "A - D", items: ["Alameda", "Antioch", "Apple Valley", "Arcadia", "Bakersfield"] },
        { title: "E - H", items: ["El Monte", "Fresno", "Glendale"] },
        { title: "I - L", items: ["Inglewood", "Irvine", "Long Beach"] },
        { title: "M - P", items: ["Modesto", "Norwalk", "Pasadena"] },
        { title: "Q - T", items: ["Riverside", "San Diego", "Torrance"] },
        { title: "U - Z", items: ["Ventura", "Whittier"] }
    ];

    if (!menuOpen) return null;

    return (
        <div className="fixed top-[80px] inset-x-0 bottom-0 bg-[#0f1f45] z-40 text-white flex flex-col">

            <div className="flex-1 overflow-y-auto">

                <div>
                    <div
                        onClick={() => toggleSection("about")}
                        className="flex justify-between px-4 py-3 text-[17px] cursor-pointer"
                    >
                        About
                        <span>{openSection === "about" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}</span>
                    </div>

                    {openSection === "about" && (
                        <div className="bg-[#1b2f55] text-gray-300">
                            <p className="px-6 py-4 border-t border-[#223d6f]">Meet Our Team</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">No Win No Fee</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Injury Claim Calculator</p>
                        </div>
                    )}
                </div>

                {["Case Results", "Testimonials"].map((item) => (
                    <div
                        key={item}
                        className="px-4 py-3 text-[17px]"
                    >
                        {item}
                    </div>
                ))}
                <div>
                    <div
                        onClick={() => toggleSection("practice")}
                        className="flex justify-between px-4 py-3 text-[17px] cursor-pointer"
                    >
                        Practice Areas
                        <span>{openSection === "practice" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}</span>
                    </div>

                    {openSection === "practice" && (
                        <div className="bg-[#1b2f55] text-gray-300">
                            <p className="px-6 py-4 border-t border-[#223d6f]">Car Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Slip And Fall Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Motorcycle Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Pedestrian Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Bicycle Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Truck Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Traumatic Brain Injuries</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Spinal Cord Injury</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Rideshare Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Uber Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Lyft Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Waymo Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Metrolink Train Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Dog Bite Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Premises Liability</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Public Transportation Accidents</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Workers Compensation Lawyers</p>
                            <p className="px-6 py-4 border-t border-[#223d6f]">Distracted Driver Accidents</p>
                        </div>
                    )}
                </div>

                <div>
                    <div
                        onClick={() => toggleSection("locations")}
                        className="flex justify-between px-4 py-3 text-[17px] cursor-pointer"
                    >
                        Consultation Office Locations
                        <span>{openSection === "locations" ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}</span>
                    </div>

                    {openSection === "locations" && (
                        <div className="bg-[#0f1f45] text-gray-300">

                            {sortingOption.map((group, index) => (
                                <div key={index} className="border-b-[1px] border-gray-700">

                                    <div
                                        onClick={() => setOpenGroup(openGroup === index ? null : index)}
                                        className="flex items-center justify-between px-4 py-3 text-[16px] font-medium text-white cursor-pointer hover:bg-[#4469C9] transition"
                                    >
                                        {group.title}
                                        <span className="text-sm">
                                            {openGroup === index ? "▲" : "▼"}
                                        </span>
                                    </div>

                                    {openGroup === index && (
                                        <div className="max-h-[200px] overflow-y-auto">
                                            {group.items.map((city, i) => (
                                                <p
                                                    key={i}
                                                    className="px-6 py-3 text-[15px] bg-[#1b2f55] border-t border-gray-600 cursor-pointer hover:bg-[#4469C9] hover:text-white transition"
                                                >
                                                    {city}
                                                </p>
                                            ))}
                                        </div>
                                    )}

                                </div>
                            ))}

                        </div>
                    )}
                </div>

                {["Articles", "Contact"].map((item) => (
                    <div
                        key={item}
                        className="px-4 py-3 text-[17px]"
                    >
                        {item}
                    </div>
                ))}

                <div>
                    <div onClick={() => setLang(lang === languages[0] ? languages[1] : languages[0])} className="px-4 py-3 text-[17px]">
                        {lang}
                    </div>
                </div>

                <div className="mt-6 mx-10">
                    <img src="https://cdn.brafflawfirm.com/img/call-now.png" alt="advertisement" className="w-[90%] mx-auto" />
                </div>
            </div>

            <BottomSection />
        </div>
    );
};

export default MobileMenu;