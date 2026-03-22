// Pricing.jsx — pricing screen layout + plan content

import { useEffect, useState } from 'react';
import PricingCard from '../components/PricingCard/PricingCard';

function Pricing() {
    // Theme state for light/dark mode
    const [theme, setTheme] = useState('light');

    // On load: restore previous choice if available
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || savedTheme === 'light') {
            setTheme(savedTheme);
            return;
        }
        setTheme(document.documentElement.dataset.theme || 'light');
    }, []);

    // Sync theme to the html data attribute + local storage
    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'));
    };

    // Free plan content
    const hobbyPlan = {
        title: 'Hobby',
        priceAmount: 'Free',
        pricePeriod: null,
        includesText: 'Includes:',
        features: ['No credit card required', 'Limited Agent requests', 'Limited Tab completions'],
        buttonText: 'Download',
        buttonVariant: 'secondary',
    };

    // Paid plan content
    const proPlan = {
        title: 'Pro',
        priceAmount: '$20',
        pricePeriod: '/mo.',
        includesText: 'Everything in Hobby, plus:',
        features: [
            'Extended limits on Agent',
            'Unlimited Tab completions',
            'Background Agents',
            'Maximum context windows',
        ],
        buttonText: 'Get Pro',
        buttonVariant: 'primary',
    };

    return (
        <>
            {/* Small environment label shown at top */}
            <p className="fixed top-4 left-1/2 -translate-x-1/2 text-sm text-text-secondary bg-card px-4 py-2 rounded-lg shadow-sm">
                <strong className="text-text-primary">React App</strong> — running with Vite + Tailwind Tokens
            </p>

            {/* Theme toggle button */}
            <button
                onClick={toggleTheme}
                type="button"
                className="fixed top-4 right-4 text-sm bg-action-secondary text-text-primary hover:bg-action-secondary-hover hover:text-ink rounded-full px-4 py-2 transition-colors duration-200"
            >
                {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
            </button>

            {/* Main pricing cards row */}
            <div className="flex gap-6 justify-center items-start">
                <PricingCard {...hobbyPlan} />
                <PricingCard {...proPlan} />
            </div>
        </>
    );
}

export default Pricing;
