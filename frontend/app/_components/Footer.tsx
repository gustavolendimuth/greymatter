import './Footer.css';

import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { FaGripLinesVertical, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ImageType } from 'types/propertiesTypes';
import { Footer } from 'types/sectionsTypes';
import dictionary from 'utils/dictionary';

import FooterForm from './FooterForm';
import Img from './Img';

export default function Footer({
  locale,
  greymatterLogo,
  data,
}: {
  locale: string;
  greymatterLogo: ImageType;
  data: Footer;
}) {
  const { formText, logo } = data;

  if (!formText || !logo || !greymatterLogo) return null;

  return (
    <footer className="flex w-full flex-col gap-3 bg-ternary pb-3 pt-12 text-white lg:pb-7 lg:pt-24">
      <div className="m-auto flex w-auto flex-col justify-center gap-7 px-10 sm:justify-between lg:w-[992px] lg:flex-row lg:gap-5 xl:w-[1140px]">
        <div className="flex min-w-[120px] flex-row flex-wrap items-baseline justify-center gap-7 lg:flex-col">
          <p className="text-light hidden text-lg font-600 md:block">Grey Matter</p>
          <Link href="#who-we-are">{dictionary.whoWeAre[locale]}</Link>
          <Link href="#team">{dictionary.team[locale]}</Link>
          <Link href="#community">{dictionary.community[locale]}</Link>
          <Link href="#application">{dictionary.application[locale]}</Link>
        </div>
        <div className="flex w-full flex-col items-center justify-center pb-5">
          <div className="flex items-center justify-center">
            <Img
              alt={greymatterLogo?.alt || ''}
              image={greymatterLogo}
              width={400}
              height={100}
              className="object-fit"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="https://www.linkedin.com/company/grey-matter-tech/?viewAsMember=true">
              <FaLinkedinIn className="footer-linkedin-icon" />
            </Link>
            <FaGripLinesVertical className="footer-linkedin-icon" />
            <Link href="https://www.instagram.com/greymatter.tech/?igshid=YmMyMTA2M2Y%3D">
              <FaInstagram className="footer-linkedin-icon" />
            </Link>
          </div>
        </div>
        <div className="m-auto flex w-full max-w-[370px] flex-col items-center gap-3 lg:max-w-[320px] lg:justify-between">
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
      <div className="flex flex-wrap items-center justify-center gap-4 p-3">
        <Link href="#terms-and-conditions">{dictionary.terms[locale]}</Link>
        <Link href="#privacy-policy">{dictionary.privacy[locale]}</Link>
        <Link href="#cookies">Cookies</Link>
      </div>
    </footer>
  );
}
