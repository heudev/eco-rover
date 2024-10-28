import Navbar from '@/components/storage/navbar';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
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
          style={{ backgroundImage: "url('/images/galaxy-night-panoramic.jpg')" }}
        >
          <Navbar/>

          {/* Hero Content */}
          <div className="bg-black bg-opacity-70 p-8 rounded-lg">
            <h2 className="text-5xl font-bold text-white">Explore Mars with Our Rover</h2>
            <p className="mt-4 text-xl text-gray-300">Join our mission to uncover the mysteries of Mars.</p>
            <a href="#mission" className="mt-8 btn btn-ghost glass">Learn More</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black">
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-white mb-6">Who We Are</h3>
            <p className="text-lg text-gray-300">
              We are a passionate team dedicated to creating groundbreaking innovations in the field of space exploration.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission-vision" className="py-20 bg-black">
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-white mb-6">Mission & Vision</h3>
            <p className="text-lg text-gray-300">
              Our mission is to explore uncharted territories in space. Our vision is to inspire the next generation of space explorers.
            </p>
          </div>
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
            <h3 className="text-4xl font-semibold text-white mb-6">What is ERC and Why We Participate</h3>
            <p className="text-lg text-gray-300">
              ERC (European Rover Challenge) is a prestigious robotics competition focused on space exploration. We participate to challenge ourselves, innovate, and push the boundaries of technology.
            </p>
          </div>
        </section>

        {/* Past Projects Section */}
        <section id="projects" className="py-20 bg-black">
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-white mb-6">Our Past Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black p-6 rounded-lg shadow-lg">
                <Image src="https://picsum.photos/1920/1080" width={1920} height={1080} alt="Project 1" className="mb-4 rounded-lg mx-auto" />
                <h4 className="text-2xl font-semibold text-white mb-2">Project 1</h4>
                <p className="text-gray-300">Description of the project and its achievements.</p>
              </div>
              <div className="bg-black p-6 rounded-lg shadow-lg">
                <Image src="https://picsum.photos/1920/1080" width={1920} height={1080} alt="Project 1" className="mb-4 rounded-lg mx-auto" />
                <h4 className="text-2xl font-semibold text-white mb-2">Project 2</h4>
                <p className="text-gray-300">Description of the project and its achievements.</p>
              </div>
              <div className="bg-black p-6 rounded-lg shadow-lg">
                <Image src="https://picsum.photos/1920/1080" width={1920} height={1080} alt="Project 1" className="mb-4 rounded-lg mx-auto" />
                <h4 className="text-2xl font-semibold text-white mb-2">Project 3</h4>
                <p className="text-gray-300">Description of the project and its achievements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Work Section */}
        <section id="current-work" className="py-20">
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-white mb-6">What We&apos;ve Done So Far</h3>
            <p className="text-lg text-gray-300">
              We have made significant progress in the development of our Mars Rover, from designing the chassis to testing our sensors.
            </p>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-20 bg-black">
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-white mb-6">Our Sponsors</h3>
            <p className="text-lg text-gray-300 mb-8">
              We are grateful for the support of our sponsors who make our mission possible.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Image src="https://picsum.photos/1920/1080" width={1920} height={1080} alt="Sponsor 1" className="w-1/3 md:w-1/4 rounded-lg" />
              <Image src="https://picsum.photos/1920/1080" width={1920} height={1080} alt="Sponsor 1" className="w-1/3 md:w-1/4 rounded-lg" />
              <Image src="https://picsum.photos/1920/1080" width={1920} height={1080} alt="Sponsor 1" className="w-1/3 md:w-1/4 rounded-lg" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact"
          className="py-20 text-center bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1673586410488-b694d350756e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-white mb-6">Get in Touch</h3>
            <p className="text-lg text-gray-300 mb-8">Want to learn more about our mission or join the team? Contact us below.</p>
            <a href="mailto:team@marsrover.com" className="btn btn-ghost glass">Contact Us</a>
            <p className="mt-4 text-gray-400">
              <a href="/sponsorship.pdf" className="hover:text-white">Download our sponsorship brochure</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-black py-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 EcoRover Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}