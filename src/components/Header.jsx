import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

export default function Header() {
  const [t, i18n] = useTranslation('global');

  return (
    <header className="bg-white dark:bg-gray-800 transition-colors duration-300 px-4 md:px-10 xl:px-14 py-3 md:py-5">
      <div className="flex items-center justify-center">
        <Link to="/" className="flex items-center gap-2">
          <span>{t('app_name.word1')}</span>
          {/* <span>Number</span> */}
          <img className="w-auto h-[4rem]" src={logo} alt="Logo" />
          <span>Ninjas</span>
        </Link>
      </div>
    </header>
  );
}
