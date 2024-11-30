import React from 'react';
import Navbar from '@/app/[locale]/_components/navbar';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

export default function MissionPage() {
    const g = useTranslations('general');
    const t = useTranslations('mission');

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
                        <h2 className="title-font text-5xl font-bold text-white">{t('missionAndVision')}</h2>
                        <p className="mt-4 text-xl text-white">{t('subTitle')}</p>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section
                    className="relative flex flex-col items-center justify-center text-center py-20  bg-fixed bg-cover "
                    style={{ backgroundImage: "url('/images/space.jpeg')" }}
                >
                    <div className="container bg-black bg-opacity-70 mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 gap-12">

                        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 flex flex-col justify-center">
                            <h3 className="title-font text-4xl font-semibold text-white mb-6">{t('ourVision')}</h3>
                            <p className="text-lg text-gray-300 mb-8">
                                 {t('vision')}
                                <br /> {t('vision1')}
                            </p>
                        </div>

                        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 flex flex-col justify-center">
                            <h3 className="title-font text-4xl font-semibold text-white mb-6">{t('ourMission')}</h3>
                            <p className="text-lg text-gray-300 mb-8">
                            {t('mission')}
                            </p>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-black py-6">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; {g('footer')}</p>
                </div>
            </footer>
        </div>
    );
}
