export const SITE = {
  name: 'Hetkijkpunt',
  domain: 'hetkijkpunt.nl',
  tagline: 'Jouw kijkpunt op Nederland',
  description:
    'Hetkijkpunt is een Nederlands lifestyle- en cultuurmagazine. Lifestyle, trends en actualiteit in Nederland.',
} as const;

export const CATEGORIES: Record<string, string> = {
  culinair: 'Culinair',
  cultuur: 'Cultuur',
  hobbys: "Hobby's",
  innovatie: 'Innovatie',
  kunst: 'Kunst',
  lifestyle: 'Lifestyle',
  natuur: 'Natuur',
  'nieuws-en-bekendheden': 'Nieuws en bekendheden',
  psychologie: 'Psychologie',
  reizen: 'Reizen',
  wetenschap: 'Wetenschap',
};

export const AUTHORS: Record<string, string> = {
  frank: 'Frank',
  donnovan: 'Donnovan',
};

export const TAGS = ['pair1', 'pair2', 'pair3', 'pair4', 'pair5', 'post1936'];
