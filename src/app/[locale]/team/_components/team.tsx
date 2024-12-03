"use client";
import { useState } from 'react';
import { teamData } from '@/constants/members';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

interface TeamProps {
    name: string;
    role: string;
    department: string;
    imageUrl: string;
    lnLink: string;
}

export function Team({ name, role, department, imageUrl, lnLink }: TeamProps) {
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
                <div className="absolute z-10 w-full h-full flex flex-col items-center justify-center rounded-full shadow-lg backface-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50 backdrop-blur-md">
                    <p className="text-white">{department}</p>
                    <a href={lnLink} className="hover:text-white transition-colors"><svg className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></a>
                </div>

                <div className="absolute top-[250px] left-0 w-full flex flex-col items-center justify-center">
                    <p className="text-white text-lg font-bold">{name}</p>
                    <p className="text-white">{role}</p>
                </div>

                {/* glow effect*/}
                <div className="glow-effect"></div>
            </div>
        </div>
    );
}

export function Menu() {
    const [activeTeam, setActiveTeam] = useState<string | null>(null);
    const t = useTranslations('teamComponent');
    const locale = useLocale();

    return (
      <div className="relative flex flex-col items-center">
        <ul className="flex flex-col lg:flex-row flex-wrap justify-center items-center menu bg-transparentrounded-box p-4 gap-4 mb-10">
            <li>
                <button onClick={() => setActiveTeam(activeTeam === "Mechanics" ? null : "Mechanics")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    <span>{t('Mechanics')}</span>
                </button>

            </li>
            <li>
                <button onClick={() => setActiveTeam(activeTeam === "Software" ? null : "Software")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>{t('Software')}</span>
                </button>
            </li>
            <li>
                <button onClick={() => setActiveTeam(activeTeam === "Electronics" ? null : "Electronics")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />  <rect x="9" y="9" width="6" height="6" />  <line x1="9" y1="1" x2="9" y2="4" />  <line x1="15" y1="1" x2="15" y2="4" />  <line x1="9" y1="20" x2="9" y2="23" />  <line x1="15" y1="20" x2="15" y2="23" />  <line x1="20" y1="9" x2="23" y2="9" />  <line x1="20" y1="14" x2="23" y2="14" />  <line x1="1" y1="9" x2="4" y2="9" />  <line x1="1" y1="14" x2="4" y2="14" /></svg>
                    <span>{t('Electronics')}</span>
                </button>
            </li>
            <li>
                <button onClick={() => setActiveTeam(activeTeam === "Science" ? null : "Science")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                    <svg className="h-8 w-8 text-white" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35" />  <line x1="10" y1="10" x2="16" y2="10" />  <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" /></svg>
                    <span>{t('Science')}</span>
                </button>
            </li>
            <li>
                <button onClick={() => setActiveTeam(activeTeam === "HumanResourceFinance" ? null : "HumanResourceFinance")} className="w-64 flex flex-row items-center justify-center ml-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white py-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className='text-sm'>{t('HumanResourceFinance')}</span>
                </button>
            </li>
        </ul>

        {/* Aktif takımın üyelerini göster */}
        <div className={`grid gap-32 
            ${activeTeam === 'HumanResourceFinance' ? 'grid-cols-1 lg:grid-cols-2' : 
            activeTeam === 'Science' || activeTeam === 'Mechanics' ? 'grid-cols-1 lg:grid-cols-2' : 
            activeTeam === 'Electronics' ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}
            >
           {activeTeam && teamData[activeTeam] && teamData[activeTeam][locale] &&  Object(teamData[activeTeam][locale]).map((member: TeamProps, index: number) => (
            <div className="flex justify-center items-center" key={index}>
                <Team name={member.name} role={member.role} department={member.department} imageUrl={member.imageUrl} lnLink={member.lnLink} />
            </div>
            ))}
        </div>
      </div>
    );
  }