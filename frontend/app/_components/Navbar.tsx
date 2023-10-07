/* eslint-disable react/no-unused-prop-types */

'use client';

import './Navbar.css';

import Image from 'next/image';
import { usePathname } from 'next-intl/client';

import NavbarLink from './NavbarLink';

type NavbarProps = {
  locale: string;
  position: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';
  background?: boolean;
};

function Navbar({ locale, position, background }: NavbarProps) {
  const englishId = 'en';
  const portugueseId = 'pt-br';

  const pathname = usePathname();

  const toggleLangInUrl = (urlString: string, currentLang: string) => {
    if (currentLang === englishId) {
      return `/${portugueseId}${urlString}`;
    }
    return `/${englishId}${urlString}`;
  };

  const newUrl = toggleLangInUrl(pathname, locale);

  return (
    <div className="w-full z-10">
      <nav
        className="w-full py-7"
        style={{
          position,
          backgroundImage: background ? 'url("/assets/img/greymatter-navbar-background.webp")' : 'none',
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto">
          <div>
            <ul className="flex justify-center font-600 text-sm space-x-10">
              <li>
                <NavbarLink href="/#who-we-are">
                  {locale === englishId ? 'who we are' : 'Quem somos'}
                </NavbarLink>
              </li>
              <li>
                <NavbarLink href="/#team">
                  {locale === englishId ? 'Team' : 'Equipe'}
                </NavbarLink>
              </li>
              <li>
                <NavbarLink href="/#community">
                  {locale === englishId ? 'Community' : 'Comunidade'}
                </NavbarLink>
              </li>
              <li>
                <NavbarLink href="/#application">
                  {locale === englishId ? 'Application' : 'Fale conosco'}
                </NavbarLink>
              </li>
              <li>
                <NavbarLink
                  href={newUrl}
                  className="uppercase text-center text-white"
                >
                  <Image
                    src={
                      locale === englishId
                        ? 'https://flagcdn.com/w40/br.png'
                        : 'https://flagcdn.com/w40/gb.png'
                    }
                    width="30"
                    height={30}
                    alt={locale === englishId ? 'Brazil' : 'United Kingdom'}
                  />
                </NavbarLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
