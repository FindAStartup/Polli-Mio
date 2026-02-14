import type { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
    title: 'Best Burger Shop in Kattanam Near Me | Pollomio',
    description: 'Get in touch with Pollomio, the best burger shop in Kattanam near me.Call, visit, or order online to enjoy delicious burgers today. ',
    alternates: {
        canonical: "https://www.pollomio.in/contact",
    },
}

export default function ContactPage() {
    return <ContactClient />
}
