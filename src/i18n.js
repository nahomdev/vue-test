import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",

  fallbackLocale: "en",
  messages: {
    en: {
      welcome: "Welcome to my app!",
      greeting: "Hello!",
    },
    amh: {
      welcome: "እንኳን ደህና መጣህ !",
      greeting: "ስላም !",
    },
  },
});

export default i18n;
