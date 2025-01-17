import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Navbar() {
    const t = useTranslations('navbar');
    const locale = useLocale();
    const otherLocale = locale === 'en' ? 'tr' : 'en';

    return (
        // NavBar
        <header className="absolute top-0 left-0 w-full bg-black bg-opacity-50 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className='flex items-center flex-shrink-0'>
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={1920}
                            height={1080}
                            className='rounded-full w-20 h-20 md:h-32 md:w-32 mx-auto'
                        />
                    </Link>
                </div>
                <div className="title-font navbar bg-opacity-0 flex justify-end">

                    {/* Hamburger Menu for Mobile */}
                    <div className="dropdown dropdown-end md:hidden flex gap-5">
                        <div className='bg-white text-black rounded p-1'>
                            <a href={"/" + otherLocale}>
                                {otherLocale.toUpperCase()}
                            </a>
                        </div>
                        <label tabIndex={0} className="btn btn-square btn-ghost text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/#about">{t('about')}</Link></li>
                            <li><Link href="/mission">{t('visionAndMission')}</Link></li>
                            <li><Link href="/erc">ERC</Link></li>
                            {/*  <li><Link href="/#projects">Projects</Link></li> */}
                            <li><Link href="/sponsorship">{t('sponsorship')}</Link></li>
                            <li><Link href="/team">{t('team')}</Link></li>
                            <li><Link href="/#contact">{t('contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Full Menu for Larger Screens */}
                    <nav className="hidden md:flex">
                        <ul className="flex items-center space-x-6 text-gray-400">
                            <li><Link href="/#about" className="hover:text-white">{t('about')}</Link></li>
                            <li><Link href="/mission" className="hover:text-white">{t('visionAndMission')}</Link></li>
                            <li><Link href="/erc" className="hover:text-white">ERC</Link></li>
                            {/*  <li><Link href="/#projects" className="hover:text-white">Projects</Link></li> */}
                            <li><Link href="/sponsorship" className="hover:text-white">{t('sponsorship')}</Link></li>
                            <li><Link href="/team" className="hover:text-white">{t('team')}</Link></li>
                            <li><Link href="/#contact" className="hover:text-white">{t('contact')}</Link></li>
                            <li className='bg-white text-black rounded p-1'>
                                <a href={"/" + otherLocale}>
                                    {otherLocale.toUpperCase()}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}