import languageConfig from "./lang.json";

const i18n = ({ keyword, lang }) => {
  return languageConfig[lang][keyword];
};

export default i18n;
