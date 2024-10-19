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
          {/* NavBar */}
          <header className="absolute top-0 left-0 w-full bg-black bg-opacity-50 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <div className='flex items-center flex-shrink-0'>
                <Image src="/images/logo.png" alt="Logo" width={1920} height={1080} className='rounded-full h-20 w-20 mx-auto' />
                <h1 className="text-2xl font-bold text-white ml-4 whitespace-nowrap">EcoRover Team</h1>
              </div>
              <div className="navbar bg-opacity-0 flex justify-end">
                {/* Hamburger Menu for Mobile */}
                <div className="dropdown dropdown-end md:hidden">
                  <label tabIndex={0} className="btn btn-square btn-ghost text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#about">About</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#mission">Mission</a></li>
                    <li><a href="#erc">ERC</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
                {/* Full Menu for Larger Screens */}
                <nav className="hidden md:flex">
                  <ul className="flex space-x-6 text-gray-400">
                    <li><a href="#about" className="hover:text-white">About</a></li>
                    <li><a href="#team" className="hover:text-white">Team</a></li>
                    <li><a href="#mission" className="hover:text-white">Mission</a></li>
                    <li><a href="#erc" className="hover:text-white">ERC</a></li>
                    <li><a href="#projects" className="hover:text-white">Projects</a></li>
                    <li><a href="#contact" className="hover:text-white">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

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

        {/* Team Section */}
        <section
          id="team"
          className="py-20 text-center bg-fixed bg-cover bg-center"
        >
          <div className="bg-black bg-opacity-70 p-8 rounded-lg">
            <h3 className="text-4xl font-semibold text-white mb-6">Our Team</h3>
            <div className="flex justify-center mb-8">
              <Image src="https://picsum.photos/1920/1080" width={1920} height={1080} alt="Team Photo" className="rounded-lg shadow-lg max-w-full w-full md:w-1/3" />
            </div>
            <p className="text-lg text-gray-300">
              Our team is composed of talented individuals from various fields, working together to achieve our ambitious goals.
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