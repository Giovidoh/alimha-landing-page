import React from "react";
import Image from "next/image";
import logo from "@/public/assets/alimha-logo.png";

const Logo = () => {
    return <Image src={logo} alt="logo" height={38} width={131} />;
};

export default Logo;
