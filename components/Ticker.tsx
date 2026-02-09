"use client";

import { useEffect, useRef, memo } from 'react';


function Ticker() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const containerElement = container.current;

        if (!containerElement) {
            return;
        }

        // Check if widget is already injected to prevent duplicates
        if (containerElement.childElementCount > 0) {
            return;
        }

        // Create the required DOM structure
        const widgetDiv = document.createElement("div");
        widgetDiv.className = "tradingview-widget-container__widget";
        containerElement.appendChild(widgetDiv);

        // Add copyright element to satisfy widget script requirements
        const copyrightDiv = document.createElement("div");
        copyrightDiv.className = "tradingview-widget-copyright";
        copyrightDiv.style.display = "none"; // Hide it visually but keep it in DOM
        containerElement.appendChild(copyrightDiv);

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.async = true;
        script.type = "text/javascript";
        script.innerHTML = JSON.stringify({
            "symbols": [
                { "proName": "FX_IDC:XAUUSD", "title": "Gold" },
                { "proName": "FX_IDC:EURUSD", "title": "EUR/USD" },
                { "proName": "FX_IDC:GBPUSD", "title": "GBP/USD" },
                { "proName": "FX_IDC:USDJPY", "title": "USD/JPY" },
                { "proName": "FX_IDC:AUDUSD", "title": "AUD/USD" },
                { "proName": "FX_IDC:USDCAD", "title": "USD/CAD" },
                { "proName": "FX_IDC:NZDUSD", "title": "NZD/USD" },
                { "proName": "FX_IDC:EURGBP", "title": "EUR/GBP" },
                { "proName": "FX_IDC:EURJPY", "title": "EUR/JPY" },
                { "proName": "FX_IDC:GBPJPY", "title": "GBP/JPY" }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": true,
            "displayMode": "regular",
            "locale": "en"
        });

        containerElement.appendChild(script);

        // No explicit cleanup needed: React removes the container element on unmount.
        // Clearing innerHTML manually causes issues with the external script if it's still initializing.
    }, []);

    return (
        <div
            className="tradingview-widget-container"
            ref={container}
            style={{ width: "100%", height: "72px", marginTop: "20px", position: "relative", zIndex: 5 }}
        >
            {/* Widget and Script injected here */}
        </div>
    );
}

export default memo(Ticker);
