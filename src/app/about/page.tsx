import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
    title: 'Top Grilled Chicken in Kerala | Pollomio',
    description: 'Pollomio serves the top grilled chicken in Kerala, made with fresh ingredients, bold spices, and grilled to perfection for an unforgettable taste.',
    alternates: {
        canonical: "https://www.pollomio.in/about",
    },

}

export default function AboutPage() {
    return <AboutClient />
}
