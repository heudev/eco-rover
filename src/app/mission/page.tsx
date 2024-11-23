import React from 'react';
import Navbar from '@/components/navbar';
import Head from 'next/head';

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
                    style={{ backgroundImage: "url('/images/team1.jpg')" }}
                >
                    <Navbar />

                    {/* Hero Content */}
                    <div className="bg-black bg-opacity-70 p-8 rounded-lg">
                        <h2 className="title-font text-5xl font-bold text-white">Check It out our Mission & Vision</h2>
                        <p className="mt-4 text-xl text-white">We are a passionate team dedicated to creating groundbreaking innovations in the field of space exploration.</p>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section
                    className="relative flex flex-col items-center justify-center text-center py-20  bg-fixed bg-cover "
                    style={{ backgroundImage: "url('/images/space.jpeg')" }}
                >
                    <div className="container bg-black bg-opacity-70 mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 gap-12">

                        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 flex flex-col justify-center">
                            <h3 className="title-font text-4xl font-semibold text-white mb-6">Our Vision</h3>
                            <p className="text-lg text-gray-300 mb-8">
                                As a pioneering team in space exploration, we aim to produce sustainable solutions in international competitions with innovative technologies and make our university a recognized leader in the global scientific community.
                                <br /> ECO-ROVER aims to inspire future space projects by supporting student entrepreneurship and teamwork.
                            </p>
                        </div>

                        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 flex flex-col justify-center">
                            <h3 className="title-font text-4xl font-semibold text-white mb-6">Our Mission</h3>
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
