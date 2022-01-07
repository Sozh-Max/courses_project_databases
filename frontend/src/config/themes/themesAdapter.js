import { DARK_THEME } from './constants';
import { darkTheme } from './darkTheme';

export const themesAdapter = theme => {
  switch(theme) {
    case DARK_THEME:
      return darkTheme;
    default:
      return darkTheme;
  }
}