import { colorSchemeDarkBlue, colorSchemeLight, themeQuartz } from 'ag-grid-community';
import { Theme, type ETheme } from '../stores/useSystemStore';

const gridDarkTheme = themeQuartz.withPart(colorSchemeDarkBlue).withParams({}, 'custom-dark');
const gridLightTheme = themeQuartz.withPart(colorSchemeLight).withParams({}, 'custom-light');

export const getGridTheme = (theme: ETheme) => theme === Theme.DIM ? gridDarkTheme : gridLightTheme;