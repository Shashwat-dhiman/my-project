import React from "react";
import Topbar from "./topbar";
import Navbar from "./navbar";
import MobileMenu from "./mobileMenu";
import BottomSection from "./bottomSection";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header>
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Navbar />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <BottomSection />
        </header>
    );
};

export default Header;