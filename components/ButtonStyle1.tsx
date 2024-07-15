import React from "react";

const ButtonStyle1 = ({
    gradientFromColor,
    gradientToColor,
    text,
}: {
    gradientFromColor: string;
    gradientToColor: string;
    text: string;
}) => {
    return (
        <button
            className={`bg-gradient-to-r from-${gradientFromColor} to-${gradientToColor} font-bold capitalize tracking-wide text-white rounded-xl py-3 px-6`}
        >
            {text}
        </button>
    );
};

{
    /* Example :
<ButtonStyle1
    gradientFromColor="primary-blue"
    gradientToColor="secondary-blue"
    text="Devenir partenaire"
/>;
*/
}

export default ButtonStyle1;
