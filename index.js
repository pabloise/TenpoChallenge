/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './src/i18n/en/resources.json';
import translationES from './src/i18n/es/resources.json';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

const fallbackLanguage = 'en';

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    debug: false,
    fallbackLng: fallbackLanguage,
    preload: ['en', 'es'],
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {escapeValue: false},
  });

AppRegistry.registerComponent(appName, () => App);
