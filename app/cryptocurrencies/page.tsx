import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import MarketFeatures from '@/components/MarketFeatures';
import ForexCTA from '@/components/ForexCTA';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Crypto Trading | Bitcoin, Ethereum & Altcoins | Flexy Markets',
    description: 'Trade popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and Solana (SOL) with leverage. 24/7 crypto trading market access.',
};

export default function CryptoTradingPage() {
    const standardData = [
        { symbol: "BTCUSD", name: "Bitcoin vs US Dollar", avgSpread: "25.00", lowSpread: "15.00", leverage: "50", icon: "https://assets.coincap.io/assets/icons/btc@2x.png" },
        { symbol: "ETHUSD", name: "Ethereum vs US Dollar", avgSpread: "1.50", lowSpread: "0.80", leverage: "50", icon: "https://assets.coincap.io/assets/icons/eth@2x.png" },
        { symbol: "SOLUSD", name: "Solana vs US Dollar", avgSpread: "0.05", lowSpread: "0.03", leverage: "20", icon: "https://assets.coincap.io/assets/icons/sol@2x.png" },
        { symbol: "ADAUSD", name: "Cardano vs US Dollar", avgSpread: "0.002", lowSpread: "0.001", leverage: "20", icon: "https://assets.coincap.io/assets/icons/ada@2x.png" },
        { symbol: "XRPUSD", name: "Ripple vs US Dollar", avgSpread: "0.003", lowSpread: "0.002", leverage: "20", icon: "https://assets.coincap.io/assets/icons/xrp@2x.png" },
    ];

    const ultraData = [
        { symbol: "BTCUSD", name: "Bitcoin vs US Dollar", avgSpread: "15.00", lowSpread: "10.00", leverage: "50", icon: "https://assets.coincap.io/assets/icons/btc@2x.png" },
        { symbol: "ETHUSD", name: "Ethereum vs US Dollar", avgSpread: "1.00", lowSpread: "0.50", leverage: "50", icon: "https://assets.coincap.io/assets/icons/eth@2x.png" },
        { symbol: "SOLUSD", name: "Solana vs US Dollar", avgSpread: "0.04", lowSpread: "0.02", leverage: "20", icon: "https://assets.coincap.io/assets/icons/sol@2x.png" },
        { symbol: "ADAUSD", name: "Cardano vs US Dollar", avgSpread: "0.0015", lowSpread: "0.001", leverage: "20", icon: "https://assets.coincap.io/assets/icons/ada@2x.png" },
        { symbol: "XRPUSD", name: "Ripple vs US Dollar", avgSpread: "0.002", lowSpread: "0.001", leverage: "20", icon: "https://assets.coincap.io/assets/icons/xrp@2x.png" },
    ];

    const features = [
        { title: "24/7 Trading", description: "Trade cryptocurrencies 24 hours a day, 7 days a week.", iconClass: "fas fa-clock" },
        { title: "Deep Liquidity", description: "Execute large orders with stable pricing and minimal slippage.", iconClass: "fas fa-water" },
        { title: "Wide Range", description: "Access all major cryptos including Bitcoin, Ethereum, and Altcoins.", iconClass: "fas fa-coins" },
        { title: "Secure Wallet", description: "Trade with confidence using our regulated and secure environment.", iconClass: "fas fa-lock" },
    ];

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Cryptocurrency Trading",
        "description": "Trade Bitcoin, Ethereum, and other major cryptocurrencies with leverage and deep liquidity.",
        "brand": {
            "@type": "Brand",
            "name": "Flexy Markets"
        },
        "provider": {
            "@type": "Organization",
            "name": "Flexy Markets"
        }
    };

    return (
        <main>
            <JsonLd data={productSchema} />
            <NavBar />
            <UnifiedHero
                title={<>Discover<br />Crypto Derivatives Trading</>}
                subtitle="Trade Crypto derivatives including Bitcoin at real-time prices with unparalleled conditions."
                activeMarket="Cryptocurrencies"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { imageUrl: "https://assets.coincap.io/assets/icons/btc@2x.png", top: "20%", right: "12%", rotate: "15deg", delay: "0s", size: 90 },
                    { imageUrl: "https://assets.coincap.io/assets/icons/eth@2x.png", top: "50%", right: "18%", rotate: "-8deg", delay: "1.5s", size: 80 },
                    { imageUrl: "https://assets.coincap.io/assets/icons/sol@2x.png", top: "30%", left: "10%", rotate: "-5deg", delay: "1s", size: 70 },
                    { imageUrl: "https://assets.coincap.io/assets/icons/ada@2x.png", top: "65%", left: "20%", rotate: "10deg", delay: "2s", size: 65 },
                    { imageUrl: "https://assets.coincap.io/assets/icons/dot@2x.png", top: "15%", left: "25%", rotate: "5deg", delay: "0.5s", size: 60 },
                ]}
            />
            <UnifiedMarketTable
                title="Crypto Market Prices"
                standardData={standardData}
                ultraData={ultraData}
            />
            <MarketFeatures
                title="Why Trade Crypto With Us?"
                features={features}
            />
            <ForexCTA />
            <Footer />
        </main>
    );
}
