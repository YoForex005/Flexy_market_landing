"use client";

import { useEffect, useRef, memo } from 'react';
import styles from './Ticker.module.css';

function Ticker() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const containerElement = container.current;

        if (!containerElement) {
            return;
        }

        containerElement.innerHTML = "";

        // Create the required DOM structure
        const widgetDiv = document.createElement("div");
        widgetDiv.className = "tradingview-widget-container__widget";
        containerElement.appendChild(widgetDiv);

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
            "colorTheme": "light",
            "isTransparent": true,
            "displayMode": "regular",
            "locale": "en"
        });

        containerElement.appendChild(script);

        // Cleanup logic to prevent memory leaks and race conditions
        return () => {
            if (containerElement) {
                containerElement.innerHTML = "";
            }
        };
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
