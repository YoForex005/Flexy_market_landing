/* eslint-disable @next/next/no-img-element */
"use client";

import styles from './Awards.module.css';

export default function Awards() {
    const awards = [
        { src: "/images/best_2.svg", label: "Awarded" },
        { src: "/images/best_4.svg", label: "Awarded" },
        { src: "/images/best_3.svg", label: "Awarded" },
        { src: "/images/best_6.svg", label: "Awarded" },
        { src: "/images/best_7.svg", label: "Awarded" },
        { src: "/images/best_9.svg", label: "Awarded" },
        { src: "/images/best_10.svg", label: "Awarded" },
    ];

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.badge} data-aos="fade-right">
                    <div className={styles.badgeIcon}>
                        <img src="/images/award.svg" alt="Award Icon" loading="lazy" />
                    </div>
                    <div className={styles.badgeText}>
                        <h3>Awarded Best <span className={styles.highlightText}>Broker</span></h3>
                        <p>Year After Year</p>
                    </div>
                </div>
                <div className={styles.scrollWrapper} data-aos="fade-left">
                    <div className={styles.track}>
                        {/* Duplicated for infinite scroll effect */}
                        {[...awards, ...awards, ...awards].map((award, index) => (
                            <div key={index} className={styles.item}>
                                <img src={award.src} alt={`Award ${index}`} loading="lazy" />
                                <span style={{ fontSize: '.95rem', color: '#98a2b3', fontWeight: 600 }}>{award.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
