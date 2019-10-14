import Constants from 'expo-constants';

const config = Constants.manifest.extra;

export const
  baseUrl = config.connectionString;

export default {
  baseUrl,
}
