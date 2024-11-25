import { sponsorShip } from '@/constants/SponsorshipPage';
import Navbar from '@/app/[locale]/_components/navbar';
import Contact from '@/app/[locale]/_components/contact';
import Head from 'next/head';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Home() {

  const t = useTranslations('home');

  return (
    <div className="min-h-screen bg-black text-gray-300 scroll-smooth">
      <Head>
        <title>Eco Rover</title>
        <meta name="description" content="Discover the fascinating journey of Mars Rover" />
      </Head>

      <main>
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1673586410488-b694d350756e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')" }}
        >
          <Navbar />

          {/* Hero Content */}
          <div className="title-font p-8 rounded-lg">
            <h2 className="font-custom text-5xl xl:text-9xl font-bold text-white">ECLIPSE</h2>
            <p className="mt-4 text-xl text-gray-300">{t('missionMars')}</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black">
          <h3 className="title-font text-4xl font-semibold mb-6 text-center">About Us</h3>
          <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
            <p className="text-lg text-gray-300 leading-relaxed">
              SAAT, we offer academic and technical development opportunities for students interested in aerospace engineering. We are the only representative of the European Aerospace Students&apos; Association (EUROAVIA) in the Aegean Region. Various activities, technical trips, and projects to improve the sectoral skills of our members are strengthening.
              <br />
              As part of this vision, the ECO-ROVER Team European Rover Challenge (ERC) competition established and its members are carefully selected is a team of engineers. Our goal is to create space exploration vehicles that contribute to innovation and technology by designing. To ensure teamwork, to achieve great successes with teamwork is to throw it away.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section 
        <section id="mission" className="py-20 bg-black">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start px-6 lg:px-12 gap-12 mt-20">
            <div className="lg:w-1/2 text-left">
               
               <h3 className="text-center text-4xl font-semibold text-white mb-6">Our Mission</h3>
                <p className="text-lg text-gray-300 mb-8">
                  As ECO-ROVER, we aim to develop innovative, sustainable, and high-performance rover vehicles by supporting the development of university students in the field of science and technology. Our goal as a team is to represent our country, our university, and our supporters in the best way on international platforms while providing practical experience for future engineers.
                </p>
            </div>
          
            <div className="lg:w-1/2 text-left">
              
              <h3 className="text-center text-4xl font-semibold text-white mb-6">Our Vision</h3>
              <p className="text-lg text-gray-300 mb-8">
               As a pioneering team in space exploration, we aim to produce sustainable solutions in international competitions with innovative technologies and make our university a recognized leader in the global scientific community. ECO-ROVER aims to inspire future space projects by supporting student entrepreneurship and teamwork.
              </p>
            </div>
          </div>
        </section> */}



        {/* Past Projects Section */}
        <section id="projects" className="py-20 bg-black">
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="title-font text-4xl font-semibold text-white mb-6">Our Past Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-black p-6 rounded-lg shadow-lg">
                <Image src="/images/horizon.png" width={1920} height={1080} alt="Project 1" className="mb-4 rounded-lg mx-auto" />
                <h4 className="text-2xl font-semibold text-white mb-2"></h4>
                <a href="https://horizonrocket.com " className="hover:text-white transition-colors text-center text-2xl font-bold">Horizon Rocket</a>
                <p className="text-gray-300">İzmir University of Economics Rocket Team</p>
              </div>
              <div className="bg-black p-6 rounded-lg shadow-lg">
                <Image src="/images/ecowheels.png" width={1920} height={1080} alt="Project 1" className="mb-4 rounded-lg mx-auto" />
                <a href="https://ecowheels.ieu.app" className="hover:text-white transition-colors text-center text-2xl font-bold">EcoWheels</a>
                <p className="text-gray-300">İzmir University of Economics Electric Vehicle Development Team</p>
              </div>

            </div>
          </div>
        </section>

        {/*
        {/* Current Work Section 
        <section id="projects" className="py-20">
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-white mb-6">What We&apos;ve Done So Far</h3>
            <p className="text-lg text-gray-300">
              We have made significant progress in the development of our Mars Rover, from designing the chassis to testing our sensors.
            </p>
          </div>
        </section>
        */}

        {/* Current Sponsors Section */}
        <section id="sponsors" className="bg-black">
          <div className="container mx-auto text-center px-6 lg:px-16 flex flex-col items-center">
            <h3 className="title-font text-4xl font-semibold text-white mb-6">Our Current Sponsors</h3>
            <p className="text-lg text-gray-300 mb-8">We are grateful for the support of our partners.</p>

            {/* Catogory */}
            <div className="md:flex justify-between gap-8">
              {Object.keys(sponsorShip).map((category) => (
                <div key={category} className="md:w-1/3">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={`/sponsorship/${category}.svg`}
                      alt={category}
                      className="h-32 md:h-40 lg:h-48 rounded-lg object-contain"
                      width={3780}
                      height={1080}
                    />
                  </div>
                  {sponsorShip[category].map((sponsor, index) => (
                    <div key={index} className="transition-transform transform hover:scale-105 text-center mb-4">
                      <div className="bg-white rounded-lg p-4 shadow-lg flex items-center justify-center mb-2">
                        <Image
                          src={sponsor.url}
                          width={1920}
                          height={1080}
                          alt={sponsor.label}
                          className="h-36 w-96 rounded-lg"
                        />
                      </div>
                      <div className="flex items-center justify-center space-x-4 mt-2 mb-4">
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
                        {sponsor.instagram && (
                          <a
                            href={sponsor.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                          >
                            <svg
                              className="h-8 w-8 text-gradient-to-r text-orange-800"
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
              ))}
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <Contact />

      </main>

      <footer className="bg-black py-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 EcoRover Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}