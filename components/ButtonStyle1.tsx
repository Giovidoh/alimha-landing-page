import React from "react";

const ButtonStyle1 = ({ text }: { text: string }) => {
    return (
        <button
            className={`bg-gradient-to-r from-primary-blue to-secondary-blue font-bold capitalize tracking-wide text-white rounded-xl py-3 px-6`}
        >
            {text}
        </button>
    );
};

{
    /* Example :
<ButtonStyle1
    text="Devenir partenaire"
/>;
*/
}

export default ButtonStyle1;
