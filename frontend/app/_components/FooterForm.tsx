'use client';

import React from 'react';

export default function FooterForm() {
  return (
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
        Enviar
      </button>
    </form>
  );
}
