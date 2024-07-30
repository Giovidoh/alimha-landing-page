import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";

const Map = () => {
    return (
        <>
            {/* Small devices */}
            <div className="lg:hidden h-full rounded-3xl overflow-hidden">
                <GoogleMapsEmbed
                    apiKey="AIzaSyBuJwy9SaKOhk2hVE0UOHxDhqtpHV9TSFk"
                    height={250}
                    width="100%"
                    mode="place"
                    style="position: static"
                    q="Brooklyn+Bridge,New+York,NY"
                />
            </div>

            {/* Large devices */}
            <div className="hidden lg:block h-full rounded-3xl overflow-hidden">
                <GoogleMapsEmbed
                    apiKey="AIzaSyBuJwy9SaKOhk2hVE0UOHxDhqtpHV9TSFk"
                    height={538}
                    width="100%"
                    mode="place"
                    style="position: static"
                    q="Brooklyn+Bridge,New+York,NY"
                />
            </div>
        </>
    );
};

export default Map;
