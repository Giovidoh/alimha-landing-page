import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import BurgerButton from "./BurgerButton";
import ButtonGradientStyle1 from "./ButtonGradientStyle1";

const Header = () => {
    return (
        <div className="flex px-[10%] py-5">
            <div className="flex justify-between items-center w-3/4 pr-10">
                <Logo />
                <NavBar />
            </div>
            <div className="flex justify-between items-center w-1/4 pl-16">
                <BurgerButton />
                <ButtonGradientStyle1 text="Devenir partenaire" />
            </div>
        </div>
    );
};

export default Header;
