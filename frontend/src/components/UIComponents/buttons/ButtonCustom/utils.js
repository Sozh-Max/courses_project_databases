import { buttonParams } from './constants';

export const getIcon = (icon, iconCustom, customType) => {
  if (icon) {
    return icon;
  }
  if (iconCustom) {
    return buttonParams[customType].icon;
  }
  return null
}
