"use client";
import { Menu as TeamMenu } from './_components/team';
import { Team as TeamMemberCard } from './_components/team';
import Head from 'next/head';
import Navbar from '@/components/navbar';

export default function TeamPage() {
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
                        <h1 className="text-5xl font-bold mb-4 text-center">Meet the Stars Behind the Mission!</h1>
                        <p className="text-lg leading-relaxed text-center">
                            Eclipse, our Eco Rover creation, blends sustainability with exploration.
                            <br />Designed to illuminate the unknown, it navigates where light and shadow meet!
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

                            <h3 className="text-4xl font-semibold text-white mb-8">ADVISORS</h3>

                            <div className="flex flex-wrap justify-center items-center w-full mb-16">

                                <div className="flex flex-wrap flex-col lg:flex-row items-center gap-24 mx-auto p-4">
                                    <TeamMemberCard name="Pınar Oğuz Ekim" role="Advisor" department="Associate Professor at IUE Electrical - Electronics Engineering" imageUrl="https://odin-oasis.izmirekonomi.edu.tr/images/photos/32462caecc122eb133c171e61f69dca9bd08d662.jpg" lnLink= "https://www.linkedin.com/in/pinar-oguz-ekim-2b475543/"/>
                                    <TeamMemberCard name="Şeniz Ertuğrul" role="Advisor" department="Professor at IUE Mechatronics Engineering Department" imageUrl="/members/senizErtugrul.png" lnLink= "https://www.linkedin.com/in/%C5%9Feniz-ertu%C4%9Frul-9a19a510b/"/>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">

                            <h3 className="text-4xl font-semibold text-white mb-8">LEADERS</h3>

                            <div className="flex flex-wrap justify-center items-center w-full mb-16">

                                <div className="flex flex-col lg:flex-row items-center gap-24 mx-auto p-4">
                                    <TeamMemberCard name="Burakcan Akçit" role="Lead" department="Aerospace Engineering and Mechanical Engineering" imageUrl="/members/burakcanAkcit.jpg" lnLink= "https://www.linkedin.com/in/burakcan-akcit-2727a0223/"/>
                                    <TeamMemberCard name="Berkay Bağcı" role="Lead" department="Mechanical Engineering" imageUrl="/members/berkayBagcı.jpg" lnLink= "https://www.linkedin.com/in/berkay-ba%C4%9Fc%C4%B1-073803164/"/>
                                </div>

                            </div>
                        </div>


                        <div className="flex flex-col items-center justify-center">

                            <h3 className="text-4xl font-semibold text-white mb-8">CAPTAINS</h3>
                            <div className="flex flex-wrap justify-center items-center w-full mb-16">

                                <div className="flex flex-wrap justify-center flex-col lg:flex-row items-center gap-24 mx-auto p-4">
                                    <TeamMemberCard name="Uğur Emin Baynal" role="Captain of the Software Team" department="Electrical - Electronics Engineering / Computer Engineering" imageUrl="/members/ugurEminBaynal.jpg" lnLink= "https://www.linkedin.com/in/ugur-emin-baynal-1b74781b2/?locale=en_US" />
                                    <TeamMemberCard name= "Metehan Şaba" role= "Captain of the Software Team" department= "Electrical - Electronics Engineering" imageUrl= "/members/metehanSaba.jpg" lnLink= "https://www.linkedin.com/in/metehan-%C5%9Faba/" />
                                    <TeamMemberCard name="Arda Demirdöğen" role="Captain of the Electronic Team" department="Electrical - Electronics Engineering" imageUrl="/members/ardaDemirdogen.jpg" lnLink= "https://www.linkedin.com/in/arda-demird%C3%B6%C4%9Fen-72b237240/" />
                                    <TeamMemberCard name="Ege Mutlu" role="Captain of the Mechanical Team" department="Aerospace Engineering" imageUrl="/members/egeMutlu.jpg" lnLink= "https://www.linkedin.com/in/ege-mutlu-671917284" />
                                    <TeamMemberCard name="Alara Rodoplu" role="Head of the Science" department="Medicine" imageUrl="/members/alaraRodoplu.jpg" lnLink= "https://www.linkedin.com/in/alara-rodoplu-196923245/"/>
                                    <TeamMemberCard name="Irmak İşal" role="Head of the Finance" department="English Translation and Interpreting, and International Trade and Finance " imageUrl="https://media.licdn.com/dms/image/v2/D4D03AQE9APTpFyiUyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710583941967?e=2147483647&v=beta&t=10c22P0AohC2OBuxhOrLzmNeK9jw7g1mQLbKGA1FY5g" lnLink= "" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <TeamMenu />
                </div>
            </section>

            <footer className="bg-black py-6">
                <div className="container mx-auto text-center text-gray-400">
                    <p>&copy; 2024 EcoRover Team. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}