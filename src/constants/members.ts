type TeamProps= {
  name: string;
  role: string;
  department: string;
  imageUrl: string;
  lnLink: string;
}

type TeamData= {
  [key: string]: { 
    [locale: string]: TeamProps[];
  };
}
// { name: "", role: "", department: "", imageUrl: "/members/", lnLink: "" },
const teamData: TeamData = {
  Mechanics: {
    en: [
      { name: "Mert Aktaş", role: "", department: "", imageUrl: "/members/mertAktas.jpg", lnLink: "" },
      { name: "Burak Çiçek", role: "", department: "Aerospace Engineering", imageUrl: "/members/burakCicek.jpg", lnLink: "https://www.linkedin.com/in/burak-%C3%A7i%C3%A7ek-17a00b297/" },
      { name: "Erdem Gökkaya", role: "", department: "Mechanical Engineering", imageUrl: "/members/erdemGokkaya.jpg", lnLink: "https://www.linkedin.com/in/erdem-g%C3%B6kkaya-0bbb09273/" },
      { name: "Erkin Eriş", role: "", department: "Mechanical Engineering", imageUrl: "/members/erkinEris.jpg", lnLink: "https://www.linkedin.com/in/erkin-eri%C5%9F-a9504931b/" },
      { name: "Kawtar Ammara", role: "", department: "", imageUrl: "/members/kawtarAmmara.jpg", lnLink: "" },
    ],
    tr: [
      { name: "Mert Aktaş", role: "", department: "", imageUrl: "/members/mertAktas.jpg", lnLink: "" },
      { name: "Burak Çiçek", role: "", department: "Uzay ve Havacılık Mühendisliği", imageUrl: "/members/burakCicek.jpg", lnLink: "https://www.linkedin.com/in/burak-%C3%A7i%C3%A7ek-17a00b297/" },
      { name: "Erdem Gökkaya", role: "", department: "Makine Mühendisliği", imageUrl: "/members/erdemGokkaya.jpg", lnLink: "https://www.linkedin.com/in/erdem-g%C3%B6kkaya-0bbb09273/" },
      { name: "Erkin Eriş", role: "", department: "Makine Mühendisliği", imageUrl: "/members/erkinEris.jpg", lnLink: "https://www.linkedin.com/in/erkin-eri%C5%9F-a9504931b/" },
      { name: "Kawtar Ammara", role: "", department: "", imageUrl: "/members/kawtarAmmara.jpg", lnLink: "" },
    ],
  },
  Software: {
    en: [
      { name: "Mehmet Eren Öğsüz", role: "Head of Navigation and Tracking", department: "Software Engineering", imageUrl: "/members/mehmetErenOgsuz.jpg" , lnLink: "https://www.linkedin.com/in/mehmet-eren-%C3%B6%C4%9Fs%C3%BCz-8240b221b/"},
      { name: "Mehmet Kağan Kaça", role: "", department: "", imageUrl: "/members/mehmetKaganKaca.jpg", lnLink: "" },
      { name: "Canercan Demir", role: "", department: "Software Engineering", imageUrl: "/members/canercanDemir.jpg", lnLink: "https://www.linkedin.com/in/cddeveloper/" },
      { name: "Berat Bora Altaş", role: "ROS", department: "Computer Engineering", imageUrl: "/members/beratBoraAltas.jpg" , lnLink: "https://www.linkedin.com/in/berat-bora-alta%C5%9F-079180277"},
      { name: "İsmail Tarım", role: "Head of Robotic Arm", department: "Computer Engineering", imageUrl: "/members/ismailTarim.jpg" , lnLink: "https://www.linkedin.com/in/ismailtarim/"},
      { name: "Begüm Gençer", role: "", department: "Computer Engineering", imageUrl: "/members/begumGencer.jpg", lnLink: "https://www.linkedin.com/in/beg%C3%BCm-gen%C3%A7er-405b0a317/" },
      { name: "Cemile Dilvin Ağaçhanlı", role: "", department: "Computer Engineering", imageUrl: "/members/dilvinAgachanli.jpg", lnLink: "https://www.linkedin.com/in/dilvin-a%C4%9Fa%C3%A7hanl%C4%B1/" },
      { name: "Batuhan Can", role: "", department: "Software Engineering", imageUrl: "/members/batuhanCan.jpg", lnLink: "https://www.linkedin.com/in/canbthn/" },
      { name: "Efe Erdoğan", role: "Head of Control Mechanism", department: "Software Engineering", imageUrl: "/members/efeErdogan.jpg", lnLink: "https://www.linkedin.com/in/efe-erdo%C4%9Fan/" },
      { name: "Hasan Ömer Gültekin", role: "ROS and Inverse Kinematics ", department: "Aerospace Engineering", imageUrl: "/members/hasanOmerGultekin.jpg" , lnLink: "https://www.linkedin.com/in/hasan-%C3%B6mer-g%C3%BCltekin-9b060a294/"},
      { name: "Mehmet Ali Kayabaş", role: "", department: "Aerospace Engineering", imageUrl: "/members/mehmetAliKayabas.jpg" , lnLink: "https://www.linkedin.com/in/mehmet-ali-kayaba%C5%9F-b53936294/"},
      { name: "Elif Karslı", role: "", department: "Computer Engineering", imageUrl: "/members/elifKarsli.jpg", lnLink: "https://www.linkedin.com/in/elif-karsl%C4%B1-3b7aa52a1/" },
      { name: "Can Uysal", role: "Head of Drone Software ", department: "Aerospace Engineering", imageUrl: "/members/canUysal.jpg" , lnLink: "https://www.linkedin.com/in/can-uysal-118b35237/"},
      { name: "Enes Uysal", role: "Head of Website and Interface", department: "Computer Engineering", imageUrl: "/members/enesUysal.jpg" , lnLink: "https://www.linkedin.com/in/hulkienesuysal/"},
      { name: "Sezen Çetinkaya", role: "Website and Interface", department: "Computer Engineering", imageUrl: "/members/sezenCetinkaya.jpg" , lnLink: "https://www.linkedin.com/in/sezencetinkaya/"},
      { name: "İdil Buse Zengin", role: "Communication", department: "Software Engineering", imageUrl: "/members/idilBuseZengin.jpg" , lnLink: "https://www.linkedin.com/in/idil-buse-zengin-65687331a" },
      { name: "Aras Fırat", role: "Communication", department: "Computer Engineering", imageUrl: "/members/arasFirat.jpg" , lnLink: "https://www.linkedin.com/in/aras-firat/" },
      // { name: "Mehmet Akın Savşçı", role: "", department: "Computer Engineering", imageUrl: "/members/mehmetAkınSavacı.jpg" , lnLink: "https://www.linkedin.com/in/mehmet-ak%C4%B1n-sava%C5%9F%C3%A7%C4%B1-571472246/"}, 
    ],
    tr: [
      { name: "Mehmet Eren Öğsüz", role: "Yol Bulma ve Takibi Sorumlusu", department: "Yazılım Mühendisliği", imageUrl: "/members/mehmetErenOgsuz.jpg" , lnLink: "https://www.linkedin.com/in/mehmet-eren-%C3%B6%C4%9Fs%C3%BCz-8240b221b/"},
      { name: "Mehmet Kağan Kaça", role: "", department: "", imageUrl: "/members/mehmetKaganKaca.jpg", lnLink: "" },
      { name: "Canercan Demir", role: "", department: "Yazılım Mühendisliği", imageUrl: "/members/canercanDemir.jpg", lnLink: "https://www.linkedin.com/in/cddeveloper/" },
      { name: "Berat Bora Altaş", role: "ROS", department: "Bilgisayar Mühendisliği", imageUrl: "/members/beratBoraAltas.jpg" , lnLink: "https://www.linkedin.com/in/berat-bora-alta%C5%9F-079180277"},
      { name: "İsmail Tarım", role: "Robotik Kol Sorumlusu", department: "Bilgisayar Mühendisliği", imageUrl: "/members/ismailTarim.jpg" , lnLink: "https://www.linkedin.com/in/ismailtarim/"},
      { name: "Begüm Gençer", role: "", department: "Bilgisayar Mühendisliği", imageUrl: "/members/begumGencer.jpg", lnLink: "https://www.linkedin.com/in/beg%C3%BCm-gen%C3%A7er-405b0a317/" },
      { name: "Cemile Dilvin Ağaçhanlı", role: "", department: "Bilgisayar Mühendisliği", imageUrl: "/members/dilvinAgachanli.jpg", lnLink: "https://www.linkedin.com/in/dilvin-a%C4%9Fa%C3%A7hanl%C4%B1/" },
      { name: "Batuhan Can", role: "", department: "Yazılım Mühendisliği", imageUrl: "/members/batuhanCan.jpg", lnLink: "https://www.linkedin.com/in/canbthn/" },
      { name: "Efe Erdoğan", role: "Kontrol Mekanizması Sorumlusu", department: "Yazılım Mühendisliği", imageUrl: "/members/efeErdogan.jpg", lnLink: "https://www.linkedin.com/in/efe-erdo%C4%9Fan/" },
      { name: "Hasan Ömer Gültekin", role: "ROS ve Inverse Kinematics ", department: "Uzay ve Havacılık Mühendisliği", imageUrl: "/members/hasanOmerGultekin.jpg", lnLink: "https://www.linkedin.com/in/hasan-%C3%B6mer-g%C3%BCltekin-9b060a294/" },
      { name: "Mehmet Ali Kayabaş", role: "", department: "Uzay ve Havacılık Mühendisliği", imageUrl: "/members/mehmetAliKayabas.jpg" , lnLink: "https://www.linkedin.com/in/mehmet-ali-kayaba%C5%9F-b53936294/"},
      { name: "Elif Karslı", role: "", department: "Bilgisayar Mühendisliği", imageUrl: "/members/elifKarsli.jpg", lnLink: "https://www.linkedin.com/in/elif-karsl%C4%B1-3b7aa52a1/" },
      { name: "Can Uysal", role: "Drone Yazılımı Sorumlusu", department: "Uzay ve Havacılık Mühendisliği", imageUrl: "/members/canUysal.jpg" , lnLink: "https://www.linkedin.com/in/can-uysal-118b35237/"},
      { name: "Enes Uysal", role: "Website ve Arayüz Sorumlusu", department: "Bilgisayar Mühendisliği", imageUrl: "/members/enesUysal.jpg" , lnLink: "https://www.linkedin.com/in/hulkienesuysal/"},
      { name: "Sezen Çetinkaya", role: "Website ve Arayüz", department: "Bilgisayar Mühendisliği", imageUrl: "/members/sezenCetinkaya.jpg" , lnLink: "https://www.linkedin.com/in/sezencetinkaya/"},
      { name: "İdil Buse Zengin", role: "İletişim", department: "Yazılım Mühendisliği", imageUrl: "/members/idilBuseZengin.jpg" , lnLink: "https://www.linkedin.com/in/idil-buse-zengin-65687331a" },
      { name: "Aras Fırat", role: "İletişim", department: "Bilgisayar Mühendisliği", imageUrl: "/members/arasFirat.jpg" , lnLink: "https://www.linkedin.com/in/aras-firat/" },
      // { name: "Mehmet Akın Savşçı", role: "", department: "Bilgisayar Mühendisliği", imageUrl: "/members/mehmetAkınSavacı.jpg" , lnLink: "https://www.linkedin.com/in/mehmet-ak%C4%B1n-sava%C5%9F%C3%A7%C4%B1-571472246/"},
    ],
  },
  Electronics: {
      en: [
          { name: "Arda Demirdöğen", role: "Captain of the Electronics Team", department: "Electrical - Electronics Engineering", imageUrl: "/members/ardaDemirdogen.jpg", lnLink: "https://www.linkedin.com/in/arda-demird%C3%B6%C4%9Fen-72b237240/" },
          { name: "Eray Özcan Kılıç", role: "3D/Image Processing", department: "Electrical - Electronics Engineering", imageUrl: "/members/erayKilic.jpg", lnLink: "https://www.linkedin.com/in/erayozcankilic/" },
          { name: "Berke Herdem", role: "PCB", department: "Electrical - Electronics Engineering", imageUrl: "/members/berkeHerdem.jpg", lnLink: "https://www.linkedin.com/in/berkeherdem" },
          { name: "Muhammet Polatlı", role: "Communication", department: "Electrical - Electronics Engineering", imageUrl: "/members/muhammetPolatli.jpg" , lnLink: "https://www.linkedin.com/in/muhammet-polatl%C4%B1-7719352b7/"},
          { name: "Sinem İzgi", role: "Communication", department: "Electrical - Electronics Engineering", imageUrl: "/members/sinemIzgi.jpg" , lnLink: "https://www.linkedin.com/in/sinem-izgi-85974a259/"},
          { name: "Barbaros Bayırlı", role: "", department: "Electrical - Electronics Engineering", imageUrl: "/members/barbarosBayirli.jpg", lnLink: "https://www.linkedin.com/in/barbaros-bay%C4%B1rl%C4%B1-3a487a331/" },
        //{ name: "Derin Ünal", role: "PCB and Battery", department: "Electrical - Electronics Engineering", imageUrl: "/members/derinUnal.jpg" , lnLink: "https://www.linkedin.com/in/derinonal"},
        //{ name: "Eren Kaya", role: "Battery", department: "Electrical - Electronics Engineering", imageUrl: "/members/erenKaya.jpg" , lnLink: "https://www.linkedin.com/in/eren-kaya-355434321"},
      ],
      tr: [
          { name: "Arda Demirdöğen", role: "Elektronik Takım Kaptanı", department: "Elektrik - Elektronik Mühendisliği", imageUrl: "/members/ardaDemirdogen.jpg", lnLink: "https://www.linkedin.com/in/arda-demird%C3%B6%C4%9Fen-72b237240/" },
          { name: "Eray Özcan Kılıç", role: "3D/Görüntü İşleme", department: "Elektrik - Elektronik Mühendisliği", imageUrl: "/members/erayKilic.jpg", lnLink: "https://www.linkedin.com/in/erayozcankilic/" },
          { name: "Berke Herdem", role: "PCB", department: "Elektrik - Elektronik Mühendisliği", imageUrl: "/members/berkeHerdem.jpg", lnLink: "https://www.linkedin.com/in/berkeherdem" },
          { name: "Muhammet Polatlı", role: "İletişim", department: "Elektrik - Elektronik Mühendisliği", imageUrl: "/members/muhammetPolatli.jpg" , lnLink: "https://www.linkedin.com/in/muhammet-polatl%C4%B1-7719352b7/"},
          { name: "Sinem İzgi", role: "İletişim", department: "Elektrik - Elektronik Mühendisliği", imageUrl: "/members/sinemIzgi.jpg" , lnLink: "https://www.linkedin.com/in/sinem-izgi-85974a259/"},
          { name: "Barbaros Bayırlı", role: "", department: "Elektrik - Elektronik Mühendisliği", imageUrl: "/members/barbarosBayirli.jpg", lnLink: "https://www.linkedin.com/in/barbaros-bay%C4%B1rl%C4%B1-3a487a331/" },
        //{ name: "Derin Ünal", role: "PCB ve Batarya", department: "Elektrik - Elektronik Mühendisliği", imageUrl: "/members/derinUnal.jpg" , lnLink: "https://www.linkedin.com/in/derinonal"},
        //{ name: "Eren Kaya", role: "Batarya", department: "Elektrik - Elektronik Mühendisliği", imageUrl: "/members/erenKaya.jpg" , lnLink: "https://www.linkedin.com/in/eren-kaya-355434321"},
      ],
  },
  Science: {
      en: [
          { name: "Alara Rodoplu", role: "Head of the Science", department: "Medicine", imageUrl: "/members/alaraRodoplu.jpg", lnLink: "https://www.linkedin.com/in/alara-rodoplu-196923245/" },
          { name: "Ceren Ayık", role: "Science Task", department: "Medicine", imageUrl: "/members/cerenAyik.jpg", lnLink: "https://www.linkedin.com/in/ceren-ay%C4%B1k-38aa26194" },
    
      ],
      tr: [
          { name: "Alara Rodoplu", role: "Bilim Sorumlusu", department: "Tıp", imageUrl: "/members/alaraRodoplu.jpg", lnLink: "https://www.linkedin.com/in/alara-rodoplu-196923245/" },
          { name: "Ceren Ayık", role: "Bilim Görevi", department: "Tıp", imageUrl: "/members/cerenAyik.jpg", lnLink: "https://www.linkedin.com/in/ceren-ay%C4%B1k-38aa26194" },
  
      ],
  },
  HumanResourceFinance: {
      en: [
          { name: "Irmak İşal", role: "Head of the Finance", department: "English Translation and Interpreting, and International Trade and Finance", imageUrl: "/members/irmakIsal.jpg", lnLink: "https://www.linkedin.com/in/irmak-i%C5%9Fal-8a64a4162/" },
          { name: "Ece Fişek", role: "Head of the Translation Services", department: "English Translation and Interpreting", imageUrl: "/members/eceFisek.jpg",lnLink:"https://www.linkedin.com/in/ecefisek/" },
   
      ],
      tr: [
          { name: "Irmak İşal", role: "Mail İşler Sorumlusu", department: "İngilizce Mütercim ve Tercümanlık, ve uluslararası Ticaret ve Finans", imageUrl:"/members/irmakIsal.jpg", lnLink: "https://www.linkedin.com/in/irmak-i%C5%9Fal-8a64a4162/" },
          { name: "Ece Fişek", role: "Çeviri Hizmetleri Sorumlusu", department: "İngilizce Mütercim ve Tercümanlık", imageUrl: "/members/eceFisek.jpg",lnLink:"https://www.linkedin.com/in/ecefisek/" },
   
      ],
  },
};

export { teamData };