import Constants from 'expo-constants';

const config = Constants.manifest.extra;

export const
  baseUrl = config.connectionStrings.glitch;

export default {
  baseUrl,
}
