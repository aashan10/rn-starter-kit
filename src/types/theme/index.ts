import {ThemeType} from '@ui-kitten/components';

export interface AppTheme extends ThemeType {
  name: string;
  accent: 'light' | 'dark';
}
