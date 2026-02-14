import type { Metadata } from 'next'
import MenuClient from './MenuClient'

export const metadata: Metadata = {
    title: 'Best Fried Chicken & Burger in Kattanam | Pollomio',
    description: 'Discover the best fried chicken & burger in Kattanam at Pollomio. Fresh, crispy chicken and juicy burgers served hot for an unforgettable taste.',
    alternates: {
        canonical: "https://www.pollomio.in/menu",
    },
}

export default function MenuPage() {
    return <MenuClient />
}
