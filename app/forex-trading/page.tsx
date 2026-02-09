import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import UnifiedHero from '@/components/UnifiedHero';
import UnifiedMarketTable from '@/components/UnifiedMarketTable';
import ForexFeatures from '@/components/ForexFeatures';
import ForexCTA from '@/components/ForexCTA';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Forex Trading | Trade Currency Pairs | Flexy Markets',
    description: 'Trade EURUSD, GBPUSD, and 40+ other currency pairs with leverage up to 1:1000. Benefit from tight spreads and fast execution with Flexy Markets.',
};

export default function ForexTradingPage() {
    // Standard Data
    const standardData = [
        { symbol: "USDJPY#", name: "Dollar vs Japanese Yen", avgSpread: "2.5", lowSpread: "2.0", leverage: "1,000", country: "us" },
        { symbol: "EURUSD#", name: "Euro vs U.S. Dollar", avgSpread: "2.0", lowSpread: "1.5", leverage: "1,000", country: "eu" },
        { symbol: "AUDUSD#", name: "Australian Dollar vs U.S. Dollar", avgSpread: "2.4", lowSpread: "2.3", leverage: "1,000", country: "au" },
        { symbol: "GBPJPY#", name: "Pound Sterling vs Japanese Yen", avgSpread: "3.8", lowSpread: "3.0", leverage: "1,000", country: "gb" },
        { symbol: "GBPUSD#", name: "Pound Sterling vs U.S. Dollar", avgSpread: "2.4", lowSpread: "1.8", leverage: "1,000", country: "gb" },
        { symbol: "EURJPY#", name: "Euro vs Japanese Yen", avgSpread: "3.2", lowSpread: "2.1", leverage: "1,000", country: "eu" },
        { symbol: "EURGBP#", name: "Euro vs Pound Sterling", avgSpread: "2.4", lowSpread: "1.8", leverage: "1,000", country: "eu" },
        { symbol: "USDCHF#", name: "U.S. Dollar vs Swiss Franc", avgSpread: "2.6", lowSpread: "1.9", leverage: "1,000", country: "us" },
        { symbol: "NZDUSD#", name: "New Zealand Dollar vs U.S. Dollar", avgSpread: "2.9", lowSpread: "2.8", leverage: "1,000", country: "nz" },
        { symbol: "EURCHF#", name: "Euro vs Swiss Franc", avgSpread: "3.3", lowSpread: "2.4", leverage: "1,000", country: "eu" },
    ].map(item => ({ ...item, icon: `https://flagcdn.com/w40/${item.country}.png` }));

    // Ultra Low Data
    const ultraData = [
        { symbol: "USDJPY#", name: "Dollar vs Japanese Yen", avgSpread: "1.4", lowSpread: "0.9", leverage: "1,000", country: "us" },
        { symbol: "EURUSD#", name: "Euro vs U.S. Dollar", avgSpread: "1.2", lowSpread: "0.8", leverage: "1,000", country: "eu" },
        { symbol: "AUDUSD#", name: "Australian Dollar vs U.S. Dollar", avgSpread: "1.7", lowSpread: "1.7", leverage: "1,000", country: "au" },
        { symbol: "GBPUSD#", name: "Pound Sterling vs U.S. Dollar", avgSpread: "1.5", lowSpread: "0.8", leverage: "1,000", country: "gb" },
        { symbol: "EURJPY#", name: "Euro vs Japanese Yen", avgSpread: "2.5", lowSpread: "1.4", leverage: "1,000", country: "eu" },
        { symbol: "EURGBP#", name: "Euro vs Pound Sterling", avgSpread: "2.1", lowSpread: "1.5", leverage: "1,000", country: "eu" },
        { symbol: "EURGBP#", name: "Euro vs Pound Sterling", avgSpread: "2.1", lowSpread: "1.5", leverage: "1,000", country: "eu" },
        { symbol: "USDCHF#", name: "U.S. Dollar vs Swiss Franc", avgSpread: "1.8", lowSpread: "1.1", leverage: "400", country: "us" },
        { symbol: "NZDUSD#", name: "New Zealand Dollar vs U.S. Dollar", avgSpread: "2.1", lowSpread: "2.0", leverage: "1,000", country: "nz" },
        { symbol: "EURCHF#", name: "Euro vs Swiss Franc", avgSpread: "1.8", lowSpread: "1.3", leverage: "400", country: "eu" },
    ].map(item => ({ ...item, icon: `https://flagcdn.com/w40/${item.country}.png` }));

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Forex Trading',
        description: 'Trade major, minor, and exotic currency pairs with leverage up to 1:1000 and tight spreads.',
        brand: {
            '@type': 'Brand',
            name: 'Flexy Markets'
        },
        provider: {
            '@type': 'Organization',
            name: 'Flexy Markets'
        }
    };

    return (
        <main>
            <JsonLd data={productSchema} />
            <NavBar />
            <UnifiedHero
                title={<>Discover<br />Forex Trading</>}
                subtitle="Buy and sell the most liquid currencies, like EURUSD, 24/5 with market-leading execution and conditions."
                activeMarket="Forex Trading"
                paddingTop="210px"
                paddingBottom="180px"
                stickers={[
                    { countryCode: "eu", top: "15%", left: "15%", rotate: "-15deg", delay: "0s", size: 70 },
                    { countryCode: "ch", top: "45%", left: "8%", rotate: "10deg", delay: "1s", size: 100 },
                    { countryCode: "ca", top: "50%", left: "14%", rotate: "-5deg", delay: "1s", size: 80 },
                    { countryCode: "au", top: "12%", right: "20%", rotate: "12deg", delay: "2s", size: 60 },
                    { countryCode: "us", top: "55%", right: "12%", rotate: "-8deg", delay: "1.5s", size: 110 },
                    { countryCode: "eu", top: "60%", right: "8%", rotate: "5deg", delay: "1.5s", size: 90 },
                    { countryCode: "nz", top: "30%", right: "8%", rotate: "-12deg", delay: "3s", size: 70 },
                ]}
            />
            <UnifiedMarketTable
                title="Pick Your Pairs"
                description="The Forex market operates Monday – Friday 00:05 – 23:50 GMT+2"
                standardData={standardData}
                ultraData={ultraData}
            />
            <ForexFeatures />
            <ForexCTA />
            <Footer />
        </main>
    );
}
