'use client';

import './Footer-Dark-Multi-Column-icons.css';
import './Footer.css';

import { PortableText } from '@portabletext/react';
import { useHomeContext } from 'context/Provider';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGripLinesVertical, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FooterComponent, FooterComponentLogo } from 'types/componentsTypes';
import { TypedObject } from 'types/propertiesTypes';

import fetchContent from '../../utils/fetchContent';
import Img from './Img';

function Footer() {
  const { languageId } = useHomeContext();
  const englishId = 'd3761ab6-c643-40b1-9233-00802f961ce6';
  const [formButton, setFormButton] = useState<string>();
  const [formText, setFormText] = useState<TypedObject>();
  const [logo, setLogo] = useState<FooterComponentLogo>();

  useEffect(() => {
    const getContent = async () => {
      const data = await fetchContent('footer', languageId) as FooterComponent;
      if (data) {
        setFormButton(data.formButton);
        setFormText(data.formText);
        setLogo(data.logo);
      }
    };
    getContent();
  }, [languageId]);

  return (
    <footer className="flex flex-col bg-ternary gap-3 pt-12 lg:pt-24 pb-3 lg:pb-7 text-white w-full">
      <div className="flex justify-center flex-col lg:flex-row sm:justify-between xl:w-[1140px] lg:w-[992px] gap-7 lg:gap-5 w-auto px-10 m-auto">
        <div className="flex lg:flex-col flex-row justify-center items-baseline flex-wrap gap-7 min-w-[120px]">
          <p className="text-lg font-600 text-light hidden md:block">
            Grey Matter
          </p>
          <Link href="#who-we-are">
            {languageId === englishId ? 'Who we are' : 'Quem somos'}
          </Link>
          <Link href="#team">
            {languageId === englishId ? 'Team' : 'Equipe'}
          </Link>
          <Link href="#community">
            {languageId === englishId ? 'Community' : 'Comunidade'}
          </Link>
          <Link href="#application">
            {languageId === englishId ? 'Application' : 'Fale conosco'}
          </Link>
        </div>
        <div className="flex justify-center items-center flex-col pb-5 w-full">
          <div className="flex justify-center items-center">
            <Img
              alt={logo?.alt || ''}
              image={logo?.image}
              width={400}
              size={[400, 100]}
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
        <div className="flex flex-col m-auto lg:justify-between items-center gap-3 max-w-[360px] lg:max-w-[280px]">
          <div className="text-base text-primary">
            {formText && <PortableText value={formText} />}
          </div>
          <form className="flex w-full justify-center">
            <input
              type="email"
              name="subscribe"
              placeholder="email"
              className="w-full text-primary text-base p-3 rounded-l-md"
              onKeyDown={() => {}}
            />
            <button
              type="submit"
              className="bg-primary uppercase px-6 rounded-r-md tracking-tight text-white font-600 text-base"
            >
              {formButton}
            </button>
          </form>
          <div className="p-4">
            <Image
              alt="Vieira Rezende logo"
              src="/assets/img/greymatter-logo-vieira-rezende.webp"
              className="footer-vieira-rezende-logo"
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 p-3">
        <Link href="#terms-and-conditions">
          {languageId === englishId
            ? 'Terms & Conditions'
            : 'Termos & Condições'}
        </Link>
        <Link href="#privacy-policy">
          {languageId === englishId
            ? 'Privacy Policy'
            : 'Política de Privacidade'}
        </Link>
        <Link href="#cookies">Cookies</Link>
      </div>
    </footer>
  );
}

export default Footer;
