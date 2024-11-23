// components/SponsorshipPage.tsx
import React from 'react';
import { sponsorShip } from '@/constants/SponsorshipPage';
import Navbar from '@/components/navbar';
import Contact from '@/components/contact';
import Head from 'next/head';
import Image from 'next/image';

export default function SponsorshipPage() {

    return (
        <div className="min-h-screen bg-black text-gray-300">
            <Head>
                <title>Eco Rover Sponsorship</title>
                <meta name="description" content="Support the Eco Rover team on their journey to explore Mars!" />
            </Head>

            <main>
                {/* Hero Section */}
                <section
                    className="relative flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/galaxy-night-panoramic.jpg')" }}
                >
                    <Navbar />

                    {/* Hero Content */}
                
                    <div className="container mx-auto text-center px-6 mt-40 lg:px-0 flex flex-col items-center">
                        <h3 className="title-font text-4xl font-semibold text-white mb-6">Our Current Sponsors</h3>
                        <p className="text-lg text-gray-300 mb-8">We are grateful for the support of our partners.</p>
                        <div className="flex flex-col items-center gap-12">
                        {Object.keys(sponsorShip).map((category) => (
                            <div key={category} className="w-full">

                            {/* Category */}
                            <div className="flex justify-center mb-6">
                                <Image
                               src={`/sponsorship/${category}.svg`}
                               alt={category}
                               className="max-w-max h-32 md:h-40 lg:h-48 rounded-lg object-contain"
                               width={3780}
                               height={1080}
                                />
                            </div>

                            {/* Sponsors */}
                            <div className="flex flex-wrap justify-center gap-8">
                                {sponsorShip[category].map((sponsor, index) => (
                                <div key={index} className="transition-transform transform hover:scale-105 text-center">
                                    {/* logo */}
                                    <div className="bg-white rounded-lg p-4 shadow-lg flex items-center justify-center mb-2">
                                    <Image
                                        src={sponsor.url}
                                        width={1920}
                                        height={1080}
                                        alt={sponsor.label}
                                        className="h-36 w-96 rounded-lg"
                                    />
                                    </div>

                                    <p className="mt-2 text-white font-semibold">
                                    {sponsor.link1 && (
                                        <a
                                        href={sponsor.link1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        >
                                        <button className="bg-orange-800 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                                            {sponsor.label}
                                        </button>
                                        </a>
                                    )}
                                    </p>

                                    <div className="flex items-center justify-center mt-2">
                                    {sponsor.instagram && (
                                        <a
                                        href={sponsor.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        >
                                        <svg
                                            className="h-8 w-8 text-gradient-to-r from-orange-600 to-rose-700"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </svg>
                                        </a>
                                    )}
                                    </div>
                                </div>
                                ))}
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

                {/* Sponsorship Packages Section */}
                <section id="sponsorship-packages" className="py-20 bg-black">
                    <div className="container mx-auto text-center px-6 lg:px-0">
                        <h3 className="title-font text-4xl font-semibold text-white mb-6">Our Sponsorship Packages</h3>
                        <p className="text-lg text-gray-300 mb-10">Choose the sponsorship level that aligns with your brand and goals.</p>

                        <div className="grid gap-8 md:grid-cols-2">
                            {[
                                {
                                    title: 'Bronze Sponsor',
                                    amount: 'Minimum 15,000 TL',
                                    perks: [
                                        'Logo on the vehicle (10x10 size)',
                                        'Team apparel logo (5x5 size)',
                                        '1 year website display',
                                        'Social media acknowledgment',
                                        'Name on school bulletins',
                                    ],
                                    bgColor: 'bg-gradient-to-r from-orange-300 to-orange-500',
                                },
                                {
                                    title: 'Silver Sponsor',
                                    amount: 'Minimum 25,000 TL',
                                    perks: [
                                        'Logo on the vehicle (15x15 size)',
                                        'Team apparel logo (8x8 size)',
                                        '1 year website display',
                                        'Social media acknowledgment with activity highlights',
                                        'Name on school bulletins',
                                        'Special certificate of appreciation',
                                    ],
                                    bgColor: 'bg-gradient-to-r from-gray-400 to-gray-600',
                                },
                                {
                                    title: 'Gold Sponsor',
                                    amount: 'Minimum 35,000 TL',
                                    perks: [
                                        'Logo on the vehicle (20x20 size)',
                                        'Team apparel logo (12x12 size)',
                                        '1 year website display',
                                        'Social media acknowledgment with activity highlights',
                                        'Name on school bulletins',
                                        'Special certificate of appreciation and event invitation',
                                    ],
                                    bgColor: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
                                },
                                {
                                    title: 'Diamond Sponsor',
                                    amount: 'Minimum 50,000 TL',
                                    perks: [
                                        'Logo on the vehicle (30x30 size)',
                                        'Team apparel logo (20x20 size)',
                                        '2 years website display',
                                        'Social media acknowledgment with activity highlights',
                                        'Name on school bulletins',
                                        'Special certificate and plaque of appreciation',
                                    ],
                                    bgColor: 'bg-gradient-to-r from-blue-400 to-blue-600',
                                },
                            ].map((tier) => (
                                <div
                                    className={`bg-white ${tier.bgColor} text-white shadow-xl rounded-lg p-8 text-center`}
                                    key={tier.title}
                                >
                                    <h3 className="text-3xl font-bold">{tier.title}</h3>
                                    <p className="text-lg mt-2">{tier.amount}</p>
                                    <ul className="mt-6 space-y-3 text-gray-900">
                                        {tier.perks.map((perk, index) => (
                                            <li key={index} className="text-lg">• {perk}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>





                {/* Call to Action Section */}
                <Contact />
            </main>

            <footer className="bg-black py-6">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; 2024 Eco Rover Team. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
