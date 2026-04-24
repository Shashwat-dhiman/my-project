import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const menuEnter = (menu) => setActiveMenu(menu);
    const menuLeave = () => setActiveMenu(null);
    const [openGroup, setOpenGroup] = useState(null);
    const languages = ["🇺🇸 English", "🇲🇽 Español"];
    const [lang, setLang] = useState(languages[0]);
    return (
        <nav className="w-full bg-[#1e40af] text-white">
            <div className="max-w-6xl mx-auto px-4">
                <ul className="hidden md:flex items-center justify-between gap-6 text-[18px]">
                    <li
                        className="relative cursor-pointer border-b-2 border-transparent hover:border-white hover:text-gray-300 py-1 transition-colors duration-200"
                        onMouseEnter={() => menuEnter('about')}
                        onMouseLeave={menuLeave}
                    >
                        <div className="flex items-center gap-1">
                            About <span className="ml-1"><ChevronDown className="w-3 h-3" /></span>
                        </div>
                        {activeMenu === 'about' && (
                            <div className="absolute top-full left-0 bg-white text-black w-56 shadow-lg z-50">
                                <p className="px-4 py-1.5 hover:bg-[#4469C9] hover:text-white">Meet Our Team</p>
                                <p className="px-4 py-1.5 hover:bg-[#4469C9] hover:text-white">No Win No Fee</p>
                                <p className="px-4 py-1.5 hover:bg-[#4469C9] hover:text-white">Injury Claim Calculator</p>
                            </div>
                        )}

                    </li>
                    <li
                        className="relative cursor-pointer border-b-2 border-transparent hover:border-white hover:text-gray-300  py-1.5 transition-colors duration-200"
                    >
                        Case Result
                    </li>
                    <li className="relative cursor-pointer border-b-2 border-transparent hover:border-white hover:text-gray-300  py-1.5 transition-colors duration-200">
                        Testimonials
                    </li>
                    <li
                        className="relative cursor-pointer border-b-2 border-transparent hover:border-white hover:text-gray-300  py-1.5 transition-colors duration-200"
                        onMouseEnter={() => menuEnter('Practice Area')}
                        onMouseLeave={menuLeave}
                    >
                        <div className="flex items-center gap-1">
                            Practice Area <span className="ml-1"><ChevronDown className="w-3 h-3" /></span>
                        </div>
                        {activeMenu === 'Practice Area' && (
                            <div className="absolute top-full left-0 bg-white text-black shadow-lg mt-1 w-[650px] grid grid-cols-2">

                                {[
                                    ["Car Accidents", "Slip And Fall Accidents"],
                                    ["Motorcycle Accidents", "Pedestrian Accidents"],
                                    ["Bicycle Accidents", "Truck Accidents"],
                                    ["Traumatic Brain Injuries", "Spinal Cord Injury"],
                                    ["Rideshare Accidents", "Uber Accidents"],
                                    ["Lyft Accidents", "Waymo Accidents"],
                                    ["Metrolink Train Accidents", "Dog Bite Accidents"],
                                    ["Premises Liability", "Public Transportation Accidents"],
                                    ["Workers Compensation Lawyers", "Distracted Driver Accidents"],
                                ].map((row, i) => (

                                    <div key={i} className="contents">

                                        <p className="px-4 py-2 border-b border-r border-gray-100 hover:bg-[#4469c9] hover:text-white">
                                            {row[0]}
                                        </p>

                                        <p className="px-4 py-2 border-b border-gray-100 hover:bg-[#4469c9] hover:text-white">
                                            {row[1]}
                                        </p>

                                    </div>

                                ))}
                            </div>
                        )}

                    </li>
                    <li
                        className="relative cursor-pointer border-b-2 border-transparent hover:border-white hover:text-gray-300  py-1.5 transition-colors duration-200"
                        onMouseEnter={() => menuEnter('locations')}
                        onMouseLeave={menuLeave}
                    >
                        <div className="flex items-center gap-1">
                            Consulation Office Location <span className="ml-1"><ChevronDown className="w-3 h-3" /></span>
                        </div>
                        {activeMenu === 'locations' && (
                            <div className="absolute top-full left-0 bg-white text-black w-72 shadow-lg">
                                {[
                                    { title: "A - D", items: ["Alameda", "Antioch", "Apple Valley", "Arcadia", "Bakersfield"] },
                                    { title: "E - H", items: ["El Monte", "Fresno", "Glendale"] },
                                    { title: "I - L", items: ["Inglewood", "Irvine", "Long Beach"] },
                                    { title: "M - P", items: ["Modesto", "Norwalk", "Pasadena"] },
                                    { title: "Q - T", items: ["Riverside", "San Diego", "Torrance"] },
                                    { title: "U - Z", items: ["Ventura", "Whittier"] },
                                ].map((group, index) => (
                                    <div key={index} className="border-b max-h-[300px] overflow-y-auto">
                                        <div
                                            onClick={() => setOpenGroup(openGroup === index ? null : index)}
                                            className="text-black text-[13px] hover:bg-[#4469C9] hover:text-white flex items-center justify-between px-2 py-0.5 font-medium">
                                            {group.title}
                                            <span>{openGroup === index ? "▲" : "▼"}</span>
                                        </div>
                                        {openGroup === index && (
                                            <div>
                                                {group.items.map((city, i) => (
                                                    <p
                                                        key={i}
                                                        className='px-4 text-[12px] py-0.5 hover:bg-[#4469c9] hover:text-white border-b border-gray-100'
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
                    </li>
                    <li className="relative cursor-pointer border-b-2 border-transparent hover:border-white hover:text-gray-300  py-1.5 transition-colors duration-200">
                        Article
                    </li>
                    <li className="relative cursor-pointer border-b-2 border-transparent hover:border-white hover:text-gray-300  py-1.5 transition-colors duration-200">
                        Contact
                    </li>
                    <li onClick={() => setLang(lang === languages[0] ? languages[1] : languages[0])} className="relative cursor-pointer border-b-2 border-transparent hover:border-white hover:text-gray-300  py-1.5 transition-colors duration-200">
                        {lang}
                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar