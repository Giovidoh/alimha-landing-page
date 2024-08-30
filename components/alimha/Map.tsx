"use client";
import React from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

const Map = () => {
    const pathname = usePathname();
    return (
        <>
            {/* Small devices */}
            <div className="lg:hidden h-full rounded-3xl overflow-hidden">
                {pathname == "/en/alimha" ? (
                    <GoogleMapsEmbed
                        apiKey="AIzaSyBuJwy9SaKOhk2hVE0UOHxDhqtpHV9TSFk"
                        height={250}
                        width="100%"
                        mode="place"
                        style="position: static"
                        q="Dakar, Sénégal"
                        center="14.738742, -17.494657"
                        zoom="18"
                        maptype="roadmap"
                        language="en"
                    />
                ) : (
                    <GoogleMapsEmbed
                        apiKey="AIzaSyBuJwy9SaKOhk2hVE0UOHxDhqtpHV9TSFk"
                        height={250}
                        width="100%"
                        mode="place"
                        style="position: static"
                        q="Dakar, Sénégal"
                        center="14.738742, -17.494657"
                        zoom="18"
                        maptype="roadmap"
                    />
                )}
            </div>

            {/* Large devices */}
            <div className="hidden lg:block h-full rounded-3xl overflow-hidden">
                {pathname == "/en/alimha" ? (
                    <GoogleMapsEmbed
                        apiKey="AIzaSyBuJwy9SaKOhk2hVE0UOHxDhqtpHV9TSFk"
                        height={538}
                        width="100%"
                        mode="place"
                        style="position: static"
                        q="Dakar, Sénégal"
                        center="14.738742, -17.494657"
                        zoom="18"
                        maptype="roadmap"
                        language="en"
                    />
                ) : (
                    <GoogleMapsEmbed
                        apiKey="AIzaSyBuJwy9SaKOhk2hVE0UOHxDhqtpHV9TSFk"
                        height={538}
                        width="100%"
                        mode="place"
                        style="position: static"
                        q="Dakar, Sénégal"
                        center="14.738742, -17.494657"
                        zoom="18"
                        maptype="roadmap"
                    />
                )}
            </div>
        </>
    );
};

export default Map;
