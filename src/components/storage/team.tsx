"use client";
import '../../app/globals.css';
import React, { useEffect, useState } from 'react'; 

interface TeamProps {
    name: string;
    role: string;
    Department: string;
    imageUrl: string; 
  }

  export function Team({ name, role, Department, imageUrl}: TeamProps) {
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
    const teamData: Record<string, { name: string; role: string; Department: string; imageUrl:string }[]> = {
        Mechanics: [
            { name: "Ege Mutlu", role: "Captain of the Mechanical Team", Department: "Focuses on electrical systems.", imageUrl: "/images/egeMutlu.jpg" },
            { name: "Ali Efe Gür", role: "", Department: "", imageUrl: "/images/aliEfeGur.jpg" },
            { name: "Mert Aktaş", role: "", Department: "", imageUrl: "/images/mertAktas.jpg" },
        ],
        Software: [
            { name: "Uğur Emin Baynal", role: "Captain of the Software Team", Department: "", imageUrl: "/images/ugurEminBaynal.jpg" },
            { name: "Hasan Ömer Gültekin", role: "", Department: "", imageUrl: "/images/hasanOmerGultekin.jpg" },
            { name: "Mehmet Ali", role: "", Department: "", imageUrl: "/images/mehmetAli.jpg" },
            { name: "Metehan Şaba", role: "", Department: "", imageUrl: "/images/metehanSaba.jpg" },
            { name: "Enes Uysal", role: "", Department: "", imageUrl: "/images/enesUysal.jpg" },
            { name: "Mehmet Eren Öğsüz", role: "", Department: "", imageUrl: "/images/mehmetErenOgsuz.jpg" },
            { name: "Sezen Çetinkaya", role: "", Department: "", imageUrl: "/images/sezenCetinkaya.jpg" },
            { name: "İsmail Tarım", role: "", Department: "", imageUrl: "/images/ismailTarım.jpg" },
            { name: "Berat Bora Altaş", role: "", Department: "", imageUrl: "/images/beratBoraAltas.jpg" },
            { name: "İdil Buse Zengin", role: "", Department: "", imageUrl: "/images/idilBuseZengin.jpg" },
            { name: "Aras Fırat", role: "", Department: "", imageUrl: "/images/arasFırat.jpg" },
            { name: "Mehmet Akın Savşçı", role: "", Department: "", imageUrl: "/images/mehmetAkınSavacı.jpg" },
        ],
        Electronics: [
            { name: "Arda Demirdöğen", role: "Captain of the Electronics Team", Department: "", imageUrl: "/images/ardaDemirdogen.jpg" },
            { name: "Eray Kılıç", role: "", Department: "", imageUrl: "/images/erayKılıc.jpg" },
            { name: "Derin Ünal", role: "", Department: "", imageUrl: "/images/derinUnal.jpg" },
            { name: "Can Uysal", role: "", Department: "", imageUrl: "/images/logo.png" },
            { name: "Gökalp Arslan", role: "", Department: "", imageUrl: "/images/gokalpArslan.jpg" },
            { name: "Eren Kaya", role: "", Department: "", imageUrl: "/images/erenKaya.jpg" },
            { name: "Berke Herdem", role: "", Department: "", imageUrl: "/images/berkeHerdem.jpg" },
        ],
        Science: [
            { name: "Alara Rodoplu", role: "Head of the Science", Department: "Science", imageUrl: "/images/alaraRodoplu.jpg" },
        ],
    };

    const teamColumns: Record<string, string> = {
        Mechanics: "grid-cols-3",   
        Software: "grid-cols-4",    
        Electronics: "grid-cols-3", 
        Science: "grid-cols-0",    
    };

    return (
        <div className="relative flex flex-col items-center">
            {/* Menü Listesi */}
            <ul className="flex flex-col lg:flex-row flex-wrap justify-center items-center menu bg-transparentrounded-box p-4 gap-4 mb-10">
                <li>
                <button onClick={() => setActiveTeam(activeTeam === "Mechanics" ? null : "Mechanics")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                    <span>Mechanics</span>
                </button>
                </li>
                <li>
                <button onClick={() => setActiveTeam(activeTeam === "Software" ? null : "Software")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                    <svg className="h-8 w-8 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <span>Software</span>
                </button>
                </li>
                <li>
                <button onClick={() => setActiveTeam(activeTeam === "Electronics" ? null : "Electronics")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                     <svg className="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />  <rect x="9" y="9" width="6" height="6" />  <line x1="9" y1="1" x2="9" y2="4" />  <line x1="15" y1="1" x2="15" y2="4" />  <line x1="9" y1="20" x2="9" y2="23" />  <line x1="15" y1="20" x2="15" y2="23" />  <line x1="20" y1="9" x2="23" y2="9" />  <line x1="20" y1="14" x2="23" y2="14" />  <line x1="1" y1="9" x2="4" y2="9" />  <line x1="1" y1="14" x2="4" y2="14" /></svg>
                  
                    <span>Electronics</span>
                </button>
                </li>
                <li>
                <button onClick={() => setActiveTeam(activeTeam === "Science" ? null : "Science")} className="w-64 flex flex-row items-center justify-center space-x-2 text-white  bg-orange-800 hover:bg-orange-900 focus:outline-none focus:ring-2 focus:ring-orange-800 focus:text-white">
                <svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16 4l3 3l-12.35 12.35a1.5 1.5 0 0 1 -3 -3l12.35 -12.35" />  <line x1="10" y1="10" x2="16" y2="10" />  <path d="M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6" /></svg>
                    <span>Science</span>
                </button>
                </li>
            </ul>

            {/* Aktif takımın üyelerini göster */}
            <div className={`flex flex-col items-center transition-all duration-500 ${activeTeam ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} mx-auto max-w-screen-lg`}>
                <div className={`grid gap-24 ${activeTeam === 'Science' ? 'grid-cols-1' : activeTeam === 'Mechanics' ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
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