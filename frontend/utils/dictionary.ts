type DictionaryKeys =
  | 'readMore'
  | 'whoWeAre'
  | 'team'
  | 'community'
  | 'portfolio'
  | 'posts'
  | 'insights'
  | 'greyNews'
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
  portfolio: {
    en: 'Portfolio',
    'pt-br': 'Portfólio',
  },
  posts: {
    en: 'Posts',
    'pt-br': 'Posts',
  },
  insights: {
    en: 'Insights & Publications',
    'pt-br': 'Insights & Publicações',
  },
  greyNews: {
    en: 'Grey News',
    'pt-br': 'Grey News',
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
