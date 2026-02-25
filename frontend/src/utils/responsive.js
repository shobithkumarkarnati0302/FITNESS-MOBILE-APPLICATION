import { Dimensions, PixelRatio } from 'react-native';

const { width: W, height: H } = Dimensions.get('window');

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

export const isTablet = W >= 768;
export const isSmallPhone = W < 360;
export const wp = pct => (W * pct) / 100;
export const hp = pct => (H * pct) / 100;

export const hs = size =>
  PixelRatio.roundToNearestPixel((size / BASE_WIDTH) * W);
export const vs = size =>
  PixelRatio.roundToNearestPixel((size / BASE_HEIGHT) * H);

export const ms = (size, factor = 0.5) =>
  PixelRatio.roundToNearestPixel(size + (hs(size) - size) * factor);
export const rf = size => ms(size, 0.3) / PixelRatio.getFontScale();

export const spacing = { xs: hs(4), sm: hs(8), md: hs(16), lg: hs(24), xl: hs(32), xxl: hs(48), };
