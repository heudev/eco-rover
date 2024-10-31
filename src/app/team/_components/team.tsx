"use client";
import { useState } from 'react';
import { teamData } from '@/constants/members';

interface TeamProps {
    name: string;
    role: string;
    Department: string;
    imageUrl: string;
}

export function Team({ name, Department, imageUrl }: TeamProps) {
    return (
        <div className="flex justify-center items-center perspective">

            <div className="relative w-60 h-60 group">
                {/* Front */}

                <div
                    className="absolute w-full h-full flex flex-col items-center justify-center rounded-full shadow-lg front-face"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                </div>

                {/*Hidden by default*/}
                <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-full shadow-lg backface-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 backdrop-blur-md">
                    <p className="text-white">{Department}</p>
                    <p className="text-white">contact</p>
                </div>

                <div className="absolute top-[250px] left-0 w-full flex flex-col items-center justify-center">
                    <p className="text-white text-lg font-bold">{name}</p>
                </div>

                {/* glow effect*/}
                <div className="glow-effect"></div>
            </div>
        </div>
    );
}

export function Menu() {
    const [activeTeam, setActiveTeam] = useState<string | null>(null);

    // Takımlar ve üyeleri


    return (
        <div className="relative flex flex-col items-center">
            {/* Menü Listesi */}
            <ul className="flex flex-col lg:flex-row flex-wrap justify-center items-center menu bg-transparentrounded-box p-4 gap-4 mb-10">
                <li>
                    <button onClick={() => setActiveTeam(activeTeam === "Mechanics" ? null : "Mechanics")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                        <span>Mechanics</span>
                    </button>

                </li>
                <li>
                    <button onClick={() => setActiveTeam(activeTeam === "Software" ? null : "Software")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span>Software</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setActiveTeam(activeTeam === "Electronics" ? null : "Electronics")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                        <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />  <rect x="9" y="9" width="6" height="6" />  <line x1="9" y1="1" x2="9" y2="4" />  <line x1="15" y1="1" x2="15" y2="4" />  <line x1="9" y1="20" x2="9" y2="23" />  <line x1="15" y1="20" x2="15" y2="23" />  <line x1="20" y1="9" x2="23" y2="9" />  <line x1="20" y1="14" x2="23" y2="14" />  <line x1="1" y1="9" x2="4" y2="9" />  <line x1="1" y1="14" x2="4" y2="14" /></svg>
                        <span>Electronics</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setActiveTeam(activeTeam === "Science" ? null : "Science")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                        <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35" />  <line x1="10" y1="10" x2="16" y2="10" />  <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" /></svg>
                        <span>Science</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => setActiveTeam(activeTeam === "HumanResourceFinance" ? null : "HumanResourceFinance")} className="w-64 flex flex-row items-center justify-center ml-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                        <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                        <span>Human Resources & Finance</span>
                    </button>
                </li>
            </ul>

            {/* Aktif takımın üyelerini göster */}
            <div className={`flex flex-col items-center transition-all duration-500 ${activeTeam ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} mx-auto max-w-screen-lg`}>
            <div className={`grid gap-24 ${ activeTeam === 'Science' || activeTeam === 'HumanResourceFinance' ? 'grid-cols-1' : activeTeam === 'Mechanics' ? 'grid-cols-1 lg:grid-cols-2': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' }`}>
                    {activeTeam && teamData[activeTeam]?.map((member, index) => (
                        <div className="flex justify-center items-center" key={index}>
                            <Team name={member.name} role={member.role} Department={member.Department} imageUrl={member.imageUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}