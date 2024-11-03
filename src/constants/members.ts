const teamData: Record<string, { name: string; role: string; Department: string; imageUrl: string }[]> = {
    Mechanics: [
        { name: "Ege Mutlu", role: "Captain of the Mechanical Team", Department: "Focuses on electrical systems.", imageUrl: "/members/egeMutlu.jpg" },
        { name: "Mert Aktaş", role: "", Department: "", imageUrl: "/members/mertAktas.jpg" },
        // { name: "Ali Efe Gür", role: "", Department: "", imageUrl: "/members/aliEfeGur.jpg" },
    ],
    Software: [
        { name: "Uğur Emin Baynal", role: "Captain of the Software Team", Department: "", imageUrl: "/members/ugurEminBaynal.jpg" },
        { name: "Hasan Ömer Gültekin", role: "", Department: "", imageUrl: "/members/hasanOmerGultekin.jpg" },
        { name: "Mehmet Ali", role: "", Department: "", imageUrl: "/members/mehmetAli.jpg" },
        { name: "Metehan Şaba", role: "", Department: "", imageUrl: "/members/metehanSaba.jpg" },
        { name: "Enes Uysal", role: "", Department: "", imageUrl: "/members/enesUysal.jpg" },
        { name: "Mehmet Eren Öğsüz", role: "", Department: "", imageUrl: "/members/mehmetErenOgsuz.jpg" },
        { name: "Sezen Çetinkaya", role: "", Department: "", imageUrl: "/members/sezenCetinkaya.jpg" },
        { name: "İsmail Tarım", role: "", Department: "", imageUrl: "/members/ismailTarım.jpg" },
        { name: "Berat Bora Altaş", role: "", Department: "", imageUrl: "/members/beratBoraAltas.jpg" },
        { name: "İdil Buse Zengin", role: "", Department: "", imageUrl: "/members/idilBuseZengin.jpg" },
        { name: "Aras Fırat", role: "", Department: "", imageUrl: "/members/arasFırat.jpg" },
        { name: "Mehmet Akın Savşçı", role: "", Department: "", imageUrl: "/members/mehmetAkınSavacı.jpg" },
    ],
    Electronics: [
        { name: "Arda Demirdöğen", role: "Captain of the Electronics Team", Department: "", imageUrl: "/members/ardaDemirdogen.jpg" },
        { name: "Eray Kılıç", role: "", Department: "", imageUrl: "/members/erayKılıc.jpg" },
        { name: "Derin Ünal", role: "", Department: "", imageUrl: "/members/derinUnal.jpg" },
        { name: "Can Uysal", role: "", Department: "", imageUrl: "/members/canUysal.jpg" },
        { name: "Eren Kaya", role: "", Department: "", imageUrl: "/members/erenKaya.jpg" },
        { name: "Berke Herdem", role: "", Department: "", imageUrl: "/members/berkeHerdem.jpg" },
        // { name: "Gökalp Arslan", role: "", Department: "", imageUrl: "/members/gokalpArslan.jpg" },
    ],
    Science: [
        { name: "Alara Rodoplu", role: "Head of the Science", Department: "Science", imageUrl: "/members/alaraRodoplu.jpg" },
    ],
    HumanResourceFinance: [
        {name: "Irmak İşal", role:"Head of the Finance", Department: "", imageUrl:"https://media.licdn.com/dms/image/v2/D4D03AQE9APTpFyiUyw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710583941967?e=2147483647&v=beta&t=10c22P0AohC2OBuxhOrLzmNeK9jw7g1mQLbKGA1FY5g" },                    
    ]
};

export { teamData };