import { Link, useRouteError } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import notFound from '../assets/404.svg';

export default function Error() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('global');
  const error = useRouteError();

  const containerClasses =
    'w-4xl mx-auto p-4 mt-10 flex flex-col items-center space-y-5 text-xl';
  const btnClasses =
    'text-sm bg-teal-500 hover:bg-teal-700 transition-colors duration-300 text-white rounded p-2';

  if (error.status === 404) {
    return (
      <main className={containerClasses}>
        <img src={notFound} alt="404" className="h-96" />
        <h2>{t('error.pageNotFound')}</h2>
        <Link to="/" className={btnClasses}>
          {t('error.backHome')}
        </Link>
      </main>
    );
  }

  return (
    <main className={containerClasses}>
      <h3>{t('error.somethingWentWrong')}</h3>
      <Link to="/" className={btnClasses}>
        {t('error.backHome')}
      </Link>
    </main>
  );
}
