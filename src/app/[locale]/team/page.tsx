"use client";
import { Menu as TeamMenu } from './_components/team';
import { Team as TeamMemberCard } from './_components/team';
import Head from 'next/head';
import Navbar from '../_components/navbar';

import { useTranslations } from 'next-intl';

export default function Home() {
    const g = useTranslations('general');
    const t = useTranslations('team');

    const scrollToSection = () => {
        const section = document.getElementById('team-leads');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="team-container min-h-screen bg-black text-gray-300 scroll-smooth">

            <Head>
                <title>Eco Rover</title>
                <meta name="description" content="Discover the fascinating journey of Mars Rover" />
            </Head>

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/images/galaxy-night-panoramic.jpg')" }}>

                <Navbar />

                {/* Hero Content */}
                <div className="hero bg-base-200 bg-opacity-0 min-h-screen flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <h1 className="title-font text-5xl font-bold mb-4 text-center">{t('missionTeamTitle')}</h1>
                        <p className="text-lg leading-relaxed text-center">
                            {t('subTitle')}
                            <br />{t('subTitle1')}
                        </p>

                        {/* Animated Button */}
                        <button
                            onClick={scrollToSection}
                            className="p-4 mt-4 rounded-full bg-gradient-to-r from-transparent to-red-800 shadow-lg animate-bounce">
                            <svg
                                className="h-8 w-8 text-white animate-pulse"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="7 7 12 12 17 7" />
                                <polyline points="7 13 12 18 17 13" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team-leads" className="text-center bg-fixed bg-cover bg-center bg-black bg-opacity-70 " style={{ backgroundImage: "url('https://wkukplus.com/images/shows/mars/bg.jpeg')", backgroundAttachment: "fixed", }}>
                <div className="bg-black bg-opacity-70 p-8 rounded-lg">
                    <div className="min-h-screen bg-opacity-70 rounded-lg p-4">

                        <div className="flex flex-col items-center justify-center">

                            <h3 className="title-font text-4xl font-semibold text-white mb-8">{t('advisors')}</h3>

                            <div className="flex flex-wrap justify-center items-center w-full mb-16">

                                <div className="flex flex-wrap flex-col lg:flex-row items-center gap-24 mx-auto p-4">
                                    <TeamMemberCard name="Pınar Oğuz Ekim" role={t('advisor')} department={t('pınarD')} imageUrl="https://odin-oasis.izmirekonomi.edu.tr/images/photos/32462caecc122eb133c171e61f69dca9bd08d662.jpg" lnLink="https://www.linkedin.com/in/pinar-oguz-ekim-2b475543/" />
                                    <TeamMemberCard name="Şeniz Ertuğrul" role={t('advisor')} department={t('senizD')} imageUrl="/members/senizErtugrul.png" lnLink="https://www.linkedin.com/in/%C5%9Feniz-ertu%C4%9Frul-9a19a510b/" />
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h3 className="title-font text-4xl font-semibold text-white mb-8">{t('leaders')}</h3>

                            <div className="flex flex-wrap justify-center items-center w-full mb-16">

                                <div className="flex flex-col lg:flex-row items-center gap-24 mx-auto p-4">
                                    <TeamMemberCard name="Burakcan Akçit" role={t('leader')} department={t('aerospace')} imageUrl="/members/burakcanAkcit.jpg" lnLink="https://www.linkedin.com/in/burakcan-akcit-2727a0223/" />
                                    <TeamMemberCard name="Berkay Bağcı" role={t('leader')} department={t('mechanical')} imageUrl="/members/berkayBagci.jpg" lnLink="https://www.linkedin.com/in/berkay-ba%C4%9Fc%C4%B1-073803164/" />
                                </div>

                            </div>
                        </div>


                        <div className="flex flex-col items-center justify-center">

                            <h3 className="title-font text-4xl font-semibold text-white mb-8">{t('captains')}</h3>
                            <div className="flex flex-wrap justify-center items-center w-full mb-16">

                                <div className="flex flex-wrap justify-center flex-col lg:flex-row items-center gap-24 mx-auto p-4">
                                    <TeamMemberCard name="Uğur Emin Baynal" role={t('cSoftware')} department={t('ugurD')} imageUrl="/members/ugurEminBaynal.jpg" lnLink="https://www.linkedin.com/in/ugur-emin-baynal-1b74781b2/?locale=en_US" />
                                    <TeamMemberCard name="Metehan Şaba" role={t('cSoftware')} department={t('electrical')} imageUrl="/members/metehanSaba.jpg" lnLink="https://www.linkedin.com/in/metehan-%C5%9Faba/" />
                                    <TeamMemberCard name="Arda Demirdöğen" role={t('cElectronics')} department={t('electrical')} imageUrl="/members/ardaDemirdogen.jpg" lnLink="https://www.linkedin.com/in/arda-demird%C3%B6%C4%9Fen-72b237240/" />
                                    <TeamMemberCard name="Ege Mutlu" role={t('cMechanics')} department={t('aerospace')} imageUrl="/members/egeMutlu.jpg" lnLink="https://www.linkedin.com/in/ege-mutlu-671917284" />
                                    <TeamMemberCard name="Alara Rodoplu" role={t('hScience')} department={t('medicine')} imageUrl="/members/alaraRodoplu.jpg" lnLink="https://www.linkedin.com/in/alara-rodoplu-196923245/" />
                                    <TeamMemberCard name="Irmak İşal" role={t('hFinance')} department={t('ırmakD')} imageUrl="/members/irmakIsal.jpg" lnLink="https://www.linkedin.com/in/irmak-i%C5%9Fal-8a64a4162/" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <TeamMenu />
                </div>
            </section>

            <footer className="bg-black py-6">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy;  {g('footer')}</p>
                </div>
            </footer>
        </div>
    );
}