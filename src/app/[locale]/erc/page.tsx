import React from 'react';
import Navbar from '@/app/[locale]/_components/navbar';
import Head from 'next/head';
import { useTranslations } from 'next-intl';

export default function ERCPage() {
    const g = useTranslations('general');
    const t = useTranslations('erc');

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
                        <h3 className="title-font text-4xl font-semibold text-white mb-6">{t('whatIsERC')}</h3>
                        <p className="text-lg text-gray-300 text-justify">
                            <br />{t('info1')}
                            <br />{t('info2')}
                            <br />{t('info3')}
                            <br />{t('info4')}
                           </p>
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
