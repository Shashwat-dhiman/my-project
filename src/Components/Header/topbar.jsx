const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className="w-full bg-[#142653] text-white border-b-[4px] border-green-600 h-[80px]">

            <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-1 h-full">

                <div className="md:hidden flex items-center gap-6">

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-xl"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
                <div>
                    <img
                        src="https://cdn.brafflawfirm.com/wp-content/uploads/2026/01/Brafflogo.svg"
                        alt="logo"
                        className="h-14 md:h-[72px] w-auto"
                    />
                </div>

                <div className="hidden lg:flex items-center justify-center text-[24px]">
                    Start Your FREE Case Consultation Today
                    <img src="https://cdn.brafflawfirm.com/wp-content/uploads/2025/06/Vector.webp" alt="arrow-icon" className="w-12 h-4" />
                </div>

                <div className="flex items-center gap-3">

                    <button className="hidden md:block border border-white px-3 py-2.5 text-md hover:bg-white hover:text-[#142653] transition">
                        Get Free Legal Help Now
                    </button>

                    <button className="hidden md:block font-medium border border-green-500 bg-green-500 px-3 py-2.5 text-md hover:bg-green-600 transition whitespace-nowrap">
                        Call 800-818-0080
                    </button>

                    <button className="md:hidden">
                        <img
                            src="https://cdn.brafflawfirm.com/img/phone.png"
                            alt="Call"
                            className="w-9 h-9"
                        />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Topbar;