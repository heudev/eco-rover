import React from 'react';
import Navbar from '@/components/navbar';
import Head from 'next/head';

export default function ERCPage() {

    return (
        <div className="min-h-screen bg-black text-gray-300">
            <Head>
                <title>Eco Rover ERC</title>
                <meta name="description" content="Check it out Mission & Vision of the Eco Rover team!" />
            </Head>

            <main>
                {/* Hero Section */}
                <section
                    className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/rover_astronot.jpg')" }}
                >
                    <Navbar />

                </section>

                {/* ERC Section */}
                <section
                    id="erc"
                    className="py-20 text-center bg-fixed bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://wkukplus.com/images/shows/mars/bg.jpeg')",
                        backgroundAttachment: "fixed"
                    }}
                >
                    <div className="bg-black bg-opacity-70 p-8 rounded-lg">
                        <h3 className="title-font text-4xl font-semibold text-white mb-6">What is ERC and Why We Participate</h3>
                        <p className="text-lg text-gray-300 text-justify">
                            The European Rover Challenge (ERC) is the world&apos;s premier space exploration vehicle (ROVER) competition. The competition included 69 different participants from 23 different countries. Our university team is participating and challenging Mars-like space exploration vehicles capable of performing missions by designing and producing both technical skills and exhibiting their innovation skills.
                            <br/> As the Space and Aviation Technologies Club, we have developed engineering skills, gained experience in our work, and are ready to compete internationally. We have selected candidates to represent our country and our supporters in the best possible way to participate in the ERC with the aim of making the ERC a reality.
                            <br/>The European Rover Challenge (ERC) is an international competition organized by the European Space Foundation and the Space Ministry of Defence, which aims to promote the development of young engineers and scientists in the field of space science. Recognized as one of the most important competitions in the world, it encourages young people to innovate in the field of space technologies while providing opportunities to network with professionals. 
                            <br/>Thanks to this competition, both our team and our club have the opportunity to achieve international recognition. As part of this activity, you will invest in innovation, technology, and the future. With this sponsorship, young engineers and researchers can stand out by taking on a role that benefits society.
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
