import Constants from 'expo-constants';

const config = Constants.manifest.extra;

export const baseUrl = config.connectionStrings.rylo;

export default {
  baseUrl,
};
