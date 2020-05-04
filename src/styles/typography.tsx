import styled from 'styled-components/native';
import * as Colors from './colors';

export const extraLargeFontSize = '50px';
export const largeFontSize = '30px';
export const buttonFontSize = '18px';
export const baseFontSize = '15px';
export const smallFontSize = '14px';
export const smallestFontSize = '10px';
export const largeHeaderFontSize = '20px';
export const headerFontSize = '18px';

const fontSans = 'OpenSans';

export const Link = styled.Text`
  color: ${Colors.red};
  font-weight: 700;
`;

export const BodyText = styled.Text`
  color: ${Colors.text};
  font-size: ${smallFontSize};
  line-height: 23px;
  font-family: ${fontSans};
`;

export const HeaderText = styled.Text`
  color: ${Colors.red};
  font-size: ${headerFontSize};
  font-weight: 700;
`;

export const DescriptionText = styled.Text`
  color: ${Colors.lightText};
  font-size: ${smallFontSize};
`;
