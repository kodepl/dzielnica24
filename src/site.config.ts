export const site = {
  name: "Dzielnica24",
  domain: "dzielnica24.pl",
  origin: "https://www.dzielnica24.pl",
  tagline: "Atlas codziennych faktów z miasta, domu i okolicy.",
  description:
    "Dzielnica24 zbiera sprawdzalne ciekawostki i praktyczne notatki o rytmie miasta, nawykach w domu oraz źródłach, którym warto ufać.",
};

export type DistrictId = "rytm" | "dom" | "liczby" | "okolica" | "weekend";

export const districts: Record<
  DistrictId,
  { id: DistrictId; name: string; blurb: string; hue: string }
> = {
  rytm: {
    id: "rytm",
    name: "Miasto i rytm",
    blurb: "Hałas, rozkłady, godziny szczytu i to, co da się sprawdzić przed wyjściem.",
    hue: "#2f6f8f",
  },
  dom: {
    id: "dom",
    name: "Dom i nawyki",
    blurb: "Wilgotność, światło, porządek dnia. Bez porad marketingowych z półki.",
    hue: "#6b5a3e",
  },
  liczby: {
    id: "liczby",
    name: "Liczby i fakty",
    blurb: "Ciekawostki z oficjalnych źródeł. Bez wymyślonych badań.",
    hue: "#3d6b4f",
  },
  okolica: {
    id: "okolica",
    name: "Okolica i kultura",
    blurb: "Ogłoszenia, wydarzenia, tablice. Jak odróżnić fakt od szumu.",
    hue: "#8a4b3a",
  },
  weekend: {
    id: "weekend",
    name: "Praktyczny weekend",
    blurb: "Krótkie listy spraw, które da się zamknąć w dwa dni bez chaosu.",
    hue: "#4a4f7a",
  },
};

export const districtList = Object.values(districts);
