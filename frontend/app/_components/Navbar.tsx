/* eslint-disable react/no-unused-prop-types */

'use client';

import './Navbar.css';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next-intl/client';
import { Fragment } from 'react';
import { ClassNameValue } from 'tailwind-merge';
import dictionary from 'utils/dictionary';

function classNames(...classes: ClassNameValue[]) {
  return classes.filter(Boolean).join(' ');
}

type NavbarProps = {
  locale: string;
  position: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';
  background?: boolean;
};

function Navbar({ locale, position, background }: NavbarProps) {
  const englishId = 'en';
  const portugueseId = 'pt-br';

  const navigation = [
    {
      name: dictionary.whoWeAre[locale],
      href: `/${locale}#who-we-are`,
      current: false,
    },
    { name: dictionary.team[locale], href: `/${locale}#team`, current: false },
    { name: dictionary.community[locale], href: `/${locale}#community`, current: false },
    {
      name: dictionary.application[locale],
      href: `/${locale}#application`,
      current: false,
    },
  ];

  const pathname = usePathname();

  const toggleLangInUrl = (urlString: string, currentLang: string) => {
    if (currentLang === englishId) {
      return `/${portugueseId}${urlString}`;
    }
    return `/${englishId}${urlString}`;
  };

  const newUrl = toggleLangInUrl(pathname, locale);

  return (
    <Disclosure
      as="nav"
      style={{
        position,
        backgroundImage: background
          ? 'url("/assets/img/greymatter-navbar-background.webp")'
          : 'none',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="w-full bg-ternary bg-opacity-70 md:bg-transparent"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-center md:h-24">
              <div className="absolute inset-y-0 left-0 z-20 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center md:items-stretch md:justify-start">
                <div className="hidden md:ml-6 md:block">
                  <div className="flex items-center space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? '' : 'text-white',
                          'rounded-md px-3 py-2 text-sm font-600 uppercase tracking-widest'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link href={newUrl} scroll={false} className="px-3 py-2">
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
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0" />
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="mx-auto space-y-2 px-2 pb-8 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? '' : 'text-white',
                    'block px-3 py-2 text-center text-base font-600 uppercase tracking-widest'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link href={newUrl} className="block px-3 py-2">
                <Image
                  className="mx-auto"
                  src={
                    locale === englishId
                      ? 'https://flagcdn.com/w40/br.png'
                      : 'https://flagcdn.com/w40/gb.png'
                  }
                  width="30"
                  height="30"
                  alt={locale === englishId ? 'Brazil' : 'United Kingdom'}
                />
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
