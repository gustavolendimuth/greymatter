import './Footer.css';

import { PortableText } from '@portabletext/react';
import { getClient } from 'lib/sanityClient';
import { getFooter, getSiteSettings } from 'lib/sanityFetch';
import Link from 'next/link';
import { FaGripLinesVertical, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ImageType, TypedObject } from 'types/propertiesTypes';
import { Footer } from 'types/sectionsTypes';
import dictionary from 'utils/dictionary';

import FooterForm from './FooterForm';
import Img from './Img';

export default function Footer({ locale, greymatterLogo, data }: { locale: string, greymatterLogo: ImageType, data: Footer }) {
  const { formText, logo } = data

  if (!formText || !logo || !greymatterLogo) return null;

  return (
    <footer className="flex flex-col bg-ternary gap-3 pt-12 lg:pt-24 pb-3 lg:pb-7 text-white w-full">
      <div className="flex justify-center flex-col lg:flex-row sm:justify-between xl:w-[1140px] lg:w-[992px] gap-7 lg:gap-5 w-auto px-10 m-auto">
        <div className="flex lg:flex-col flex-row justify-center items-baseline flex-wrap gap-7 min-w-[120px]">
          <p className="text-lg font-600 text-light hidden md:block">
            Grey Matter
          </p>
          <Link href="#who-we-are">
            { dictionary.whoWeAre[locale] }
          </Link>
          <Link href="#team">
            { dictionary.team[locale] }
          </Link>
          <Link href="#community">
            { dictionary.community[locale] }
          </Link>
          <Link href="#application">
            { dictionary.application[locale] }
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col pb-5 w-full">
          <div className="flex justify-center items-center">
            <Img
              alt={greymatterLogo?.alt || ''}
              image={greymatterLogo}
              width={400}
              height={100}
              className="object-fit"
            />
          </div>
          <div className="flex gap-4 justify-center items-center">
            <Link href="https://www.linkedin.com/company/grey-matter-tech/?viewAsMember=true">
              <FaLinkedinIn className="footer-linkedin-icon" />
            </Link>
            <FaGripLinesVertical className="footer-linkedin-icon" />
            <Link href="https://www.instagram.com/greymatter.tech/?igshid=YmMyMTA2M2Y%3D">
              <FaInstagram className="footer-linkedin-icon" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col m-auto lg:justify-between items-center gap-3 w-full max-w-[370px] lg:max-w-[320px]">
          <div className="text-base text-primary">
            <PortableText value={formText} />
          </div>
          <FooterForm />
          <div className="py-4">
            <Img
              alt="Vieira Rezende logo"
              className="object-contain"
              image={logo}
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 p-3">
        <Link href="#terms-and-conditions">
          { dictionary.terms[locale]}
        </Link>
        <Link href="#privacy-policy">
          { dictionary.privacy[locale]}
        </Link>
        <Link href="#cookies">Cookies</Link>
      </div>
    </footer>
  );
}
