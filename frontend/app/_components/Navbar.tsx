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
    { name: dictionary.whoWeAre[locale], href: '/#who-we-are', current: false },
    { name: dictionary.team[locale], href: '/#team', current: false },
    { name: dictionary.community[locale], href: '/#community', current: false },
    { name: dictionary.application[locale], href: '/#application', current: false },
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
        backgroundImage: background ? 'url("/assets/img/greymatter-navbar-background.webp")' : 'none',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="bg-opacity-50 bg-ternary md:bg-transparent w-full"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 md:h-24 items-center justify-center">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
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
                {/* <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div> */}
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-8 items-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? '' : 'text-white',
                          'rounded-md px-3 py-2 text-sm font-medium uppercase tracking-widest',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href={newUrl}
                      className="px-3 py-2"
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
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0" />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-2 pb-8 pt-2 mx-auto">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? '' : 'text-white',
                    'block px-3 py-2 text-base font-medium uppercase tracking-widest text-center',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href={newUrl}
                className="px-3 py-2 block"
              >
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
