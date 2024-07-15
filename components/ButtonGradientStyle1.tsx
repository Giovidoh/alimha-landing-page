import React from "react";

const ButtonGradientStyle1 = ({ text }: { text: string }) => {
    return (
        <button className="bg-gradient-to-r from-primary-blue to-secondary-blue font-bold capitalize tracking-wide whitespace-nowrap text-white rounded-xl py-3 px-6">
            {text}
        </button>
    );
};

{
    /* Example :
<ButtonGradientStyle1
    text="Devenir partenaire"
/>;
*/
}

export default ButtonGradientStyle1;
