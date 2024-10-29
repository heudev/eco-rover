import React from 'react';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Image from 'next/image';

export default function MissionPage() {
   
    return (
        <div className="min-h-screen bg-black text-gray-300">
            <Head>
                <title>Eco Rover Mission & Vision</title>
                <meta name="description" content="Check it out Mission & Vision of the Eco Rover team!" />
            </Head>

            <main>
                {/* Hero Section */}
                <section
                    className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/marsWater.png')" }}
                >
                    <Navbar />

                    {/* Hero Content */}
                    <div className="p-8 rounded-lg">
                        <h2 className="text-5xl font-bold text-white">Check It out our Mission & Vision</h2>
                        <p className="mt-4 text-xl text-gray-300">We are a passionate team dedicated to creating groundbreaking innovations in the field of space exploration.</p>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section
                    className="relative flex flex-col items-center justify-center text-center py-20  bg-fixed bg-cover "
                    style={{ backgroundImage: "url('/images/space.jpeg')" }}
                >
                    <div className="container bg-black bg-opacity-70 mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 gap-12">
                        
                        <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                            <div className="rounded-lg overflow-hidden flex items-center justify-center">
                                <Image 
                                    src={'/images/ecoRoverTeam.jpg'} 
                                    alt="Team" 
                                    width={500} 
                                    height={300}
                                    className="object-cover rounded-md"
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 flex flex-col justify-center">
                            <h3 className="text-4xl font-semibold text-white mb-6">Our Vision</h3>
                            <p className="text-lg text-gray-300 mb-8">
                                As a pioneering team in space exploration, we aim to produce sustainable solutions in international competitions with innovative technologies and make our university a recognized leader in the global scientific community.
                                <br /> ECO-ROVER aims to inspire future space projects by supporting student entrepreneurship and teamwork.
                            </p>

                            <h3 className="text-4xl font-semibold text-white mb-6">Our Mission</h3>
                            <p className="text-lg text-gray-300 mb-8">
                                As ECO-ROVER, we aim to develop innovative, sustainable, and high-performance rover vehicles by supporting the development of university students in the field of science and technology. Our goal as a team is to represent our country, our university, and our supporters in the best way on international platforms while providing practical experience for future engineers.
                            </p>
                        </div>
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
