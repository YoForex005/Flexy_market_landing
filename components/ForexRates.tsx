"use client";

import { useState, useEffect, useCallback } from 'react';
import styles from './ForexRates.module.css';

export default function ForexRates({ compact = false }) {
    const [assets, setAssets] = useState<{ symbol: string; price: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchForexData = useCallback(async () => {
        const forexPairs = ["EUR", "GBP", "JPY", "AUD", "CAD"];
        try {
            const response = await fetch("https://api.frankfurter.app/latest?from=USD");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            if (!data.rates) {
                throw new Error("Invalid API response: No rates found");
            }

            const formattedData = forexPairs.map(pair => ({
                symbol: `${pair}/USD`,
                price: (1 / data.rates[pair]).toFixed(4)
            }));

            setAssets(formattedData);
            setError(null);
        } catch (err) {
            setError(`Unable to load rates`);
            console.error("Error fetching data:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchForexData();
        const interval = setInterval(fetchForexData, 5000);
        return () => clearInterval(interval);
    }, [fetchForexData]);

    if (loading) return null; // Or a spinner
    if (error) return null;

    return (
        <div className={`${styles.wrapper} ${compact ? styles.compact : ''}`}>
            <div className={styles.container}>
                {assets.map((asset, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.currencyPair}>{asset.symbol}</div>
                        <div className={styles.currencyPrice}>{asset.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
