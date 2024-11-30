import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact"
      className="py-20 text-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1673586410488-b694d350756e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container bg-black bg-opacity-70 mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 gap-12">

        <div className="w-full lg:w-1/2 text-center lg:text-left p-6 flex flex-col justify-center">
          <div className="flex flex-col items-center text-lg text-gray-300 mt-8">
            <h3 className="title-font text-3xl font-semibold text-white mb-6 ">{t('follow')}</h3>
            <p className="text-lg text-gray-300 mb-8 flex text-center justify-center">{t('followSocial')}</p>

            <div className="flex space-x-4 mb-8">
              <a href="mailto:ieu.ecorover@gmail.com" className="hover:text-white transition-colors"> <svg className="h-8 w-8 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></a>
              <a href="https://www.linkedin.com/company/eco-rover" className="hover:text-white transition-colors"><svg className="h-8 w-8 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></a>
              <a href="https://www.instagram.com/ieu_eco_rover" className="hover:text-white transition-colors"><svg className="h-8 w-8 text-gradient-to-r  text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
            </div>

            <h3 className="title-font text-3xl font-semibold flex text-center justify-center text-white mb-6"></h3>
            <a href="/file/ECO - ROVERSponsorlukDosyası.pdf" className="hover:text-white flex text-center justify-center">{t('click')}</a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 text-left p-6 flex flex-col justify-center items-center">
          <h3 className="title-font flex text-center justify-center text-3xl font-semibold text-white mb-6">{t('getInTouch')}</h3>

          <div className="flex flex-col lg:flex-row items-start justify-start gap-8 px-6 lg:px-12">

            {/*Burakcan Akçit contact info*/}
            <div className="flex flex-col w-full lg:w-1/2 items-start">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-lg text-white">{t('coLead')}</h2>
                <h2 className="text-lg text-orange-500 font-semibold">{t('burakcan')}</h2>
              </div>
              <ul className="text-gray-300">
                <li className="flex items-center mb-2">
                  <a href="mailto:burakcanakcit@gmail.com " className="hover:text-white transition-colors flex items-center"><svg className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>{t('burakcanMail')}</a></li>
                <li className="flex items-center mb-2">
                  <a href="https://www.linkedin.com/in/burakcan-akcit-2727a0223" className="hover:text-white transition-colors flex items-center"><svg className="h-6 w-6 text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" /></svg>{t('burakcanLn')}</a>
                </li>
                <li className="flex items-center mb-2">
                  <a href="https://www.instagram.com/burakcan.akcit" className="hover:text-white transition-colors flex items-center"><svg className="h-6 w-6 text-gradient-to-r  text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>{t('burakcanInstagram')}</a>
                </li>
                <li className="flex items-center mb-2"><svg className="h-6 w-6 text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>{t('burakcanTel')}</li>
              </ul>
            </div>

            {/*Irmak İsal contact info*/}
            <div className="flex flex-col w-full lg:w-1/2 items-start">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-sm text-white font-mono">{t('headFinance')}</h2>
                <h2 className="text-sm text-orange-500 font-thin">{t('irmak')}</h2>
              </div>
              <ul className="text-gray-300">
                <li className="flex items-center mb-2">
                  <a href="mailto:isalirmak@gmail.com " className="hover:text-white transition-colors flex items-center"><svg className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>{t('irmakMail')} </a></li>
                <li className="flex items-center mb-2">
                  <a href="https://www.linkedin.com/in/irmak-i%C5%9Fal-8a64a4162" className="hover:text-white transition-colors flex items-center"><svg className="h-6 w-6 text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" /></svg>{t('irmakLn')}</a>
                </li>
                <li className="flex items-center mb-2">
                  <a href="https://www.instagram.com/river_4991/?next=%2Fkultursebiha%2Ffeed%2F&hl=zh-cn" className="hover:text-white transition-colors flex items-center"><svg className="h-6 w-6 text-gradient-to-r  text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>{t('irmakInstagram')}</a>
                </li>
                <li className="flex items-center mb-2"><svg className="h-6 w-6 text-orange-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>{t('irmakTel')}</li>
              </ul>
            </div>
          </div>

          {/*Location*/}
          <div className="flex flex-col items-center text-lg text-gray-300 mt-8">
            <div className="flex items-center justify-center mb-1">
              <svg className="h-6 w-6 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>{t('ieu')}</p>
            </div>
            <p className="text-center">{t('address')}</p>
          </div>

        </div>
      </div>
    </section>
  );
}