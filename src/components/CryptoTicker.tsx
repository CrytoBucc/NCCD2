import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  change: number;
}

export default function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana,cardano,polkadot,dogecoin,chainlink&vs_currencies=usd&include_24hr_change=true'
        );
        const data = await response.json();

        const formattedPrices: CryptoPrice[] = [
          {
            symbol: 'BTC',
            name: 'Bitcoin',
            price: data.bitcoin.usd,
            change: data.bitcoin.usd_24h_change,
          },
          {
            symbol: 'ETH',
            name: 'Ethereum',
            price: data.ethereum.usd,
            change: data.ethereum.usd_24h_change,
          },
          {
            symbol: 'BNB',
            name: 'Binance Coin',
            price: data.binancecoin.usd,
            change: data.binancecoin.usd_24h_change,
          },
          {
            symbol: 'SOL',
            name: 'Solana',
            price: data.solana.usd,
            change: data.solana.usd_24h_change,
          },
          {
            symbol: 'ADA',
            name: 'Cardano',
            price: data.cardano.usd,
            change: data.cardano.usd_24h_change,
          },
          {
            symbol: 'DOT',
            name: 'Polkadot',
            price: data.polkadot.usd,
            change: data.polkadot.usd_24h_change,
          },
          {
            symbol: 'DOGE',
            name: 'Dogecoin',
            price: data.dogecoin.usd,
            change: data.dogecoin.usd_24h_change,
          },
          {
            symbol: 'LINK',
            name: 'Chainlink',
            price: data.chainlink.usd,
            change: data.chainlink.usd_24h_change,
          },
        ];

        setPrices(formattedPrices);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-900 py-2">
        <div className="text-center text-gray-400">Loading prices...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 py-2 overflow-hidden">
      <motion.div
        animate={{
          x: [0, -2000],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...prices, ...prices].map((crypto, index) => (
          <div
            key={`${crypto.symbol}-${index}`}
            className="flex items-center gap-2"
          >
            <span className="text-white font-medium">{crypto.symbol}</span>
            <span className="text-gray-400">${crypto.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}</span>
            <div
              className={`flex items-center gap-1 ${
                crypto.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {crypto.change >= 0 ? (
                <TrendingUp className="h-4 w-4" />
              ) : (
                <TrendingDown className="h-4 w-4" />
              )}
              <span>{Math.abs(crypto.change).toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}