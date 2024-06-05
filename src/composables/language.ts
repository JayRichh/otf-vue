import ISO6391 from "iso-639-1";

export const languagesNameList: {
  code: string;
  nativeName: string;
  name: string;
}[] = ISO6391.getAllCodes().map(code => ({
  code,
  nativeName: ISO6391.getNativeName(code),
  name: ISO6391.getName(code),
}));

export function getLanguageName(code: string) {
  const language = languagesNameList.find(language => language.code === code);
  return language ? language.name : "Unknown";
}

export function getLangIcon(code: string) {
  return `https://www.countryflags.io/${code}/flat/32.png`;
}

export function getLangIconWithLabel(code: string) {
  return `https://www.countryflags.io/${code}/flat/32.png ${getLanguageName(code)}`;
}
