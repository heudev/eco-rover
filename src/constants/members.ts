const teamData: Record<string, { name: string; role: string; department: string; imageUrl: string; lnLink:string }[]> = {
    Mechanics: [
        { name: "Ege Mutlu", role: "Captain of the Mechanical Team", department: "Aerospace Engineering", imageUrl: "/members/egeMutlu.jpg", lnLink: "https://www.linkedin.com/in/ege-mutlu-671917284" },
        { name: "Mert Aktaş", role: "", department: "", imageUrl: "/members/mertAktas.jpg" , lnLink: "" },
        // { name: "Ali Efe Gür", role: "", Department: "", imageUrl: "/members/aliEfeGur.jpg" },
    ],
    Software: [
        { name: "Uğur Emin Baynal", role: "Co-Captain of the Software Team", department: "Electrical - Electronics Engineering / Computer Engineering", imageUrl: "/members/ugurEminBaynal.jpg" , lnLink: "https://www.linkedin.com/in/ugur-emin-baynal-1b74781b2/?locale=en_US" },
        { name: "Metehan Şaba", role: "Co-Captain of the Software Team", department: "Electrical - Electronics Engineering", imageUrl: "/members/metehanSaba.jpg" , lnLink: "https://www.linkedin.com/in/metehan-%C5%9Faba/"},
        { name: "Hasan Ömer Gültekin", role: "ROS and Inverse Kinematics ", department: "Aerospace Engineering", imageUrl: "/members/hasanOmerGultekin.jpg" , lnLink: "https://www.linkedin.com/in/hasan-%C3%B6mer-g%C3%BCltekin-9b060a294/"},
        { name: "Mehmet Ali Kayabaş", role: "", department: "Aerospace Engineering", imageUrl: "/members/mehmetAli.jpg" , lnLink: "https://www.linkedin.com/in/mehmet-ali-kayaba%C5%9F-b53936294/"},
        { name: "Enes Uysal", role: "Website and Interface", department: "Computer Engineering", imageUrl: "/members/enesUysal.jpg" , lnLink: "https://www.linkedin.com/in/hulkienesuysal/"},
        { name: "Mehmet Eren Öğsüz", role: "ROS and Inverse Kinematics, Otonom Systems", department: "Software Engineering", imageUrl: "/members/mehmetErenOgsuz.jpg" , lnLink: "https://www.linkedin.com/in/mehmet-eren-%C3%B6%C4%9Fs%C3%BCz-8240b221b/"},
        { name: "Sezen Çetinkaya", role: "Website and Interface", department: "Computer Engineering", imageUrl: "/members/sezenCetinkaya.jpg" , lnLink: "https://www.linkedin.com/in/sezencetinkaya/"},
        { name: "İsmail Tarım", role: "ROS and Inverse Kinematics", department: "Computer Engineering", imageUrl: "/members/ismailTarım.jpg" , lnLink: "https://www.linkedin.com/in/ismailtarim/"},
        { name: "Berat Bora Altaş", role: "ROS", department: "Computer Engineering", imageUrl: "/members/beratBoraAltas.jpg" , lnLink: "https://www.linkedin.com/in/berat-bora-alta%C5%9F-079180277"},
        { name: "İdil Buse Zengin", role: "Communication", department: "Computer Engineering", imageUrl: "/members/idilBuseZengin.jpg" , lnLink: "http://linkedin.com/in/idil-buse-zengin-65687331a" },
        { name: "Aras Fırat", role: "Communication", department: "Computer Engineering", imageUrl: "/members/arasFırat.jpg" , lnLink: "https://www.linkedin.com/in/aras-firat/" },
        { name: "Mehmet Akın Savşçı", role: "", department: "Computer Engineering", imageUrl: "/members/mehmetAkınSavacı.jpg" , lnLink: "https://www.linkedin.com/in/mehmet-ak%C4%B1n-sava%C5%9F%C3%A7%C4%B1-571472246/"},
        { name: "Muhammet Polatlı", role: "Communication", department: "Electrical - Electronics Engineering", imageUrl: "/images/logo.png" , lnLink: "https://www.linkedin.com/in/muhammet-polatl%C4%B1-7719352b7/"},
    ],
    Electronics: [
        { name: "Arda Demirdöğen", role: "Captain of the Electronics Team", department: "Electrical - Electronics Engineering", imageUrl: "/members/ardaDemirdogen.jpg" , lnLink: "https://www.linkedin.com/in/arda-demird%C3%B6%C4%9Fen-72b237240/"},
        { name: "Eray Özcan Kılıç", role: "3D/Image Processing", department: "Electrical - Electronics Engineering", imageUrl: "/members/erayKılıc.jpg" , lnLink: "https://www.linkedin.com/in/erayozcankilic/"},
        { name: "Derin Ünal", role: "PCB and Battery", department: "Electrical - Electronics Engineering", imageUrl: "/members/derinUnal.jpg" , lnLink: "https://www.linkedin.com/in/derinonal"},
        { name: "Can Uysal", role: "", department: "", imageUrl: "/members/canUysal.jpg" , lnLink: ""},
        { name: "Eren Kaya", role: "Battery", department: "Electrical - Electronics Engineering", imageUrl: "/members/erenKaya.jpg" , lnLink: "https://www.linkedin.com/in/eren-kaya-355434321"},
        { name: "Berke Herdem", role: "PCB", department: "Electrical - Electronics Engineering", imageUrl: "/members/berkeHerdem.jpg", lnLink: "https://www.linkedin.com/in/berkeherdem" },
        // { name: "Gökalp Arslan", role: "", department: "", imageUrl: "/members/gokalpArslan.jpg" , lnLink: ""},
    ],
    Science: [
        { name: "Alara Rodoplu", role: "Head of the Science", department: "Medicine", imageUrl: "/members/alaraRodoplu.jpg" , lnLink: "https://www.linkedin.com/in/alara-rodoplu-196923245/"},
        { name: "Ceren Ayık", role: "Science Task", department: "Medicine", imageUrl: "/images/logo.png" , lnLink: "https://www.linkedin.com/in/ceren-ay%C4%B1k-38aa26194"},
    ],
    HumanResourceFinance: [
        {name: "Irmak İşal", role:"Head of the Finance", department: "", imageUrl:"https://media.licdn.com/dms/image/v2/D4D03AQE9APTpFyiUyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710583941967?e=2147483647&v=beta&t=10c22P0AohC2OBuxhOrLzmNeK9jw7g1mQLbKGA1FY5g" , lnLink: "https://www.linkedin.com/in/irmak-i%C5%9Fal-8a64a4162/"},                    
    ]
};

export { teamData };