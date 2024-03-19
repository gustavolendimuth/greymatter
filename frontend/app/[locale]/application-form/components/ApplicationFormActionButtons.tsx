import Link from 'next/link';
import React from 'react';

import Img from '@/app/_components/Img';

import buttonAction from '../../../assets/images/greymatter-button-action.svg';

type Params = {
  locale: string;
};

export default function ApplicationFormActionButtons({ locale }: Params) {
  return (
    <div
      id="actionButtons"
      className="col-span-3 flex flex-col gap-y-3 p-12 sm:flex-row sm:justify-evenly sm:p-24"
    >
      <Link
        className="flex items-center justify-center rounded-lg border-2 bg-primary px-12 py-4 font-600 uppercase text-white"
        href="/"
      >
        {locale === 'en' ? 'Cancel' : 'Cancelar'}
      </Link>
      <button
        className="flex items-center justify-evenly gap-5 rounded-lg border-2 bg-primary p-24 px-12 py-4 font-600 uppercase text-white"
        type="submit"
      >
        {locale === 'en' ? 'Send' : 'Enviar'}
        <Img alt="Alt" className="img-fluid" src={buttonAction} width={20} height={20} />
      </button>
    </div>
  );
}
