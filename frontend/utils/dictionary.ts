type DictionaryKeys =
  | 'readMore'
  | 'whoWeAre'
  | 'team'
  | 'community'
  | 'application'
  | 'terms'
  | 'privacy'
  | 'moreStories'
  | 'languageFlags'
  | 'languageFlagAlt';

type Dictionary = {
  [key in DictionaryKeys]: {
    [key: string]: string;
  };
};

const dictionary: Dictionary = {
  readMore: {
    en: 'Read More',
    'pt-br': 'Leia Mais',
  },
  whoWeAre: {
    en: 'Who We Are',
    'pt-br': 'Quem Somos',
  },
  team: {
    en: 'Team',
    'pt-br': 'Equipe',
  },
  community: {
    en: 'Community',
    'pt-br': 'Comunidade',
  },
  application: {
    en: 'Application',
    'pt-br': 'Fale Conosco',
  },
  terms: {
    en: 'Terms & Conditions',
    'pt-br': 'Termos & Condições',
  },
  privacy: {
    en: 'Privacy Policy',
    'pt-br': 'Política de Privacidade',
  },
  moreStories: {
    en: 'More Stories',
    'pt-br': 'Mais Histórias',
  },

  languageFlags: {
    en: 'https://flagcdn.com/w40/br.png',
    'pt-br': 'https://flagcdn.com/w40/gb.png',
  },
  languageFlagAlt: {
    en: 'Português',
    'pt-br': 'English',
  },
};

export default dictionary;
