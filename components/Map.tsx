import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const Map = () => {
    return (
        <div className="h-full w-1/2 rounded-3xl overflow-hidden mr-7">
            <GoogleMapsEmbed
                apiKey="AIzaSyBuJwy9SaKOhk2hVE0UOHxDhqtpHV9TSFk"
                height={538}
                width="100%"
                mode="place"
                style="position: static"
                q="Brooklyn+Bridge,New+York,NY"
            />
        </div>
    );
};

export default Map;
