"use client";
import Image from 'next/image'; 

export default function Navbar() {
    return (
        // NavBar
        <header className="absolute top-0 left-0 w-full bg-black bg-opacity-50 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center flex-shrink-0'>
                    <Image 
                        src="/images/logo.png" 
                        alt="Logo" 
                        width={1920} 
                        height={1080} 
                        className='rounded-full h-20 w-20 mx-auto' 
                    />
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
                            <li><a href="/team">Team</a></li> 
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
                            <li><a href="/team" className="hover:text-white">Team</a></li>
                            <li><a href="#mission" className="hover:text-white">Mission</a></li>
                            <li><a href="#erc" className="hover:text-white">ERC</a></li>
                            <li><a href="#projects" className="hover:text-white">Projects</a></li>
                            <li><a href="#contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}