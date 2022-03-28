import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveAuthToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('AUTH_TOKEN', token);
    return true;
  } catch (e) {
    return false;
  }
};

export const getAuthToken = async (): Promise<string | false> => {
  const token = await AsyncStorage.getItem('AUTH_TOKEN');
  return token ?? false;
};
