import Head from 'next/head';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300">
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
              <h1 className="text-3xl font-bold text-white">EcoRover Team</h1>
              <nav>
                <ul className="flex space-x-6 text-gray-400">
                  <li><a href="#about" className="hover:text-white">About</a></li>
                  <li><a href="#mission" className="hover:text-white">Mission</a></li>
                  <li><a href="#contact" className="hover:text-white">Contact</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <div className="bg-black bg-opacity-70 p-8 rounded-lg">
            <h2 className="text-5xl font-bold text-white">Explore Mars with Our Rover</h2>
            <p className="mt-4 text-xl text-gray-300">Join our mission to uncover the mysteries of Mars.</p>
            <a href="#mission" className="mt-8 btn btn-ghost glass">Learn More</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black">
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-white mb-6">About Our Mission</h3>
            <p className="text-lg text-gray-300">
              Our Mars Rover is designed to explore the Martian surface and collect data to help scientists understand the planet better.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-center text-white mb-10">Mission Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition-all">
                <h4 className="text-2xl font-semibold text-white">Surface Exploration</h4>
                <p className="mt-4 text-gray-300">Our Rover is equipped with advanced sensors to study Mars’ terrain and geology.</p>
              </div>
              <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition-all">
                <h4 className="text-2xl font-semibold text-white">Atmospheric Studies</h4>
                <p className="mt-4 text-gray-300">We aim to analyze Mars&apos; atmosphere to study its composition and weather patterns.</p>
              </div>
              <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:bg-gray-700 transition-all">
                <h4 className="text-2xl font-semibold text-white">Sample Collection</h4>
                <p className="mt-4 text-gray-300">The Rover will collect and store Martian soil and rock samples for future analysis.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-black">
          <div className="container mx-auto text-center px-6 lg:px-0">
            <h3 className="text-4xl font-semibold text-white mb-4">Get In Touch</h3>
            <p className="text-lg text-gray-300 mb-8">Want to learn more about our mission or join the team? Contact us below.</p>
            <a href="mailto:team@marsrover.com" className="btn btn-primary">Contact Us</a>
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

export default Home;
