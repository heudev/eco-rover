// components/SponsorshipPage.tsx
import React from 'react';
import { sponsorShip } from '@/constants/SponsorshipPage';
import Navbar from '@/components/navbar';
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
                
                    <div className="container mx-auto text-center px-6 mt-60 lg:px-0 flex flex-col items-center">
                        <h3 className="text-4xl font-semibold text-white mb-6">Partners on Our Rover Journey</h3>
                        <p className="text-lg text-gray-300 mb-8">We are grateful for the support of our partners.</p>
                        <div className="flex flex-wrap justify-center gap-8">
                            {sponsorShip.sponsor.map((sponsor, index) => (
                                <div key={index} className="transition-transform transform hover:scale-105 text-center">
                                    <div className="bg-white rounded-lg p-4 shadow-lg flex items-center justify-center mb-2">
                                        <Image src={sponsor.url} width={1920} height={1080} alt={sponsor.label} className='h-36 w-96 rounded-lg' />
                                    </div>
                                    <p className="mt-2 text-white font-semibold">{sponsor.label}</p>
                                    <div className="flex flex-col items-center mt-2 space-y-1">
                                        {sponsor.link1 && (
                                            <a href={sponsor.link1}target="_blank" rel="noopener noreferrer"className="text-gray-400 hover:text-white transition-colors"> Website 1</a>
                                        )}
                                        {sponsor.link2 && (
                                            <a href={sponsor.link2} target="_blank"rel="noopener noreferrer"className="text-gray-400 hover:text-white transition-colors">  Website 2</a>
                                        )}
                                        {sponsor.instagram && (
                                            <a href={sponsor.instagram}target="_blank"rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" >
                                                Instagram
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sponsorship Packages Section */}
                <section id="sponsorship-packages" className="py-20 bg-black">
                    <div className="container mx-auto text-center px-6 lg:px-0">
                        <h3 className="text-4xl font-semibold text-white mb-6">Our Sponsorship Packages</h3>
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
                <section
                    id="join-us"
                    className="py-20 text-center bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1673586410488-b694d350756e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')",
                        backgroundAttachment: "fixed"
                    }}
                >
                    <div className="bg-black bg-opacity-70 p-8 rounded-lg max-w-2xl mx-auto">
                        <h3 className="text-4xl font-semibold text-white mb-6">Ready to Make a Difference?</h3>
                        <p className="text-lg text-gray-300 mb-8">Connect with us and let’s work together to achieve something extraordinary.</p>
                        <a href="mailto:ieu.ecorover@gmail.com" className="btn btn-ghost glass">Contact Us</a>
                        <p className="mt-4 text-gray-400">
                            <a href="/file/ECO-ROVERSponsorlukDosyası.pdf" className="hover:text-white">Download our sponsorship brochure</a>
                        </p>
                    </div>
                </section>
            </main>

            <footer className="bg-black py-6">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; 2024 Eco Rover Team. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
