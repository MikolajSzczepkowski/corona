import * as Colors from './colors';

export const extraLargeFontSize = 50;
export const largeFontSize = 30;
export const buttonFontSize = 18;
export const baseFontSize = 15;
export const smallFontSize = 14;
export const smallestFontSize = 10;
export const largeHeaderFontSize = 20;
export const headerFontSize = 18;

const base = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
};

export const link = {
  color: Colors.red,
  fontWeight: 'bold',
};

export const bodyText = {
  color: Colors.text,
  fontSize: smallFontSize,
  lineHeight: 23,
};

export const headerText = {
  color: Colors.red,
  fontSize: headerFontSize,
  fontWeight: 'bold',
};

export const descriptionText = {
  color: Colors.lightText,
  fontSize: smallFontSize,
};

export const screenHeader = {
  ...base,
  color: Colors.baseText,
  fontSize: largeFontSize,
  fontWeight: 'bold',
};

export const screenFooter = {
  ...base,
  ...descriptionText,
};

export const sectionHeader = {
  ...base,
  ...headerText,
};
