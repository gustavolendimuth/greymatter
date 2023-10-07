/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-destructuring */
import Home from 'app/[locale]/_home/Home';

export default function Index({ params: { locale } }) {
  return (
    <Home locale={locale} />
  );
}
