import React from "react";
import Logo from "../Logo";
import NavBar from "../NavBar";
import BurgerButton from "../BurgerButton";
import ButtonGradientStyle1 from "../ButtonGradientStyle1";

const Header = () => {
    return (
        <header className="flex px-[10%] py-5">
            <div className="flex justify-between items-center w-3/4 pr-10">
                <Logo />
                <NavBar />
            </div>
            <div className="flex justify-between items-center w-1/4 pl-16">
                <BurgerButton />
                <ButtonGradientStyle1
                    fromColor="from-primary-blue"
                    toColor="to-secondary-blue"
                    text="Devenir partenaire"
                />
            </div>
        </header>
    );
};

export default Header;
