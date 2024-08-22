import React from "react";
import AlpayLogo from "@/public/assets/alpay-logo.svg";
import Navbar from "@/components/alpay/Navbar";
import Button from "../buttons/Button";

const Header = () => {
    return (
        <header className="sticky top-0 left-0 flex justify-center bg-white w-screen px-5 sm:px-20 min-[1120px]:px-40 py-5 z-50">
            <div className="flex justify-between items-center w-full">
                <AlpayLogo />
                <div className="w-1/2 max-[870px]:hidden">
                    <Navbar />
                </div>
                <div className="max-[950px]:hidden">
                    <Button
                        text="Contactez-nous"
                        className="bg-primary-blue text-white px-3 py-2"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
