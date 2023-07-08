// Interfaces
import ICommonThemes from "../interfaces/common/theme/interface-common-theme";

const themeLight: ICommonThemes = {
  dark: false,
  colors: {
    default: "#FFFFFF",
    primary: "#3d3a4f",
    secondary: "#777494",
    accent: "#7f017f",
    white: "#FFFFFF",
    black: "#000000",
    yellow: "#FFFF00",
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    button: "#FFFFFF",
    border: "#FFFFFF",
    error: "#FFFFFF",
    warning: "#FFFFFF",
    info: "#FFFFFF",
    success: "#FFFFFF",
    "section-primary": "#FFFFFF",
    "section-secondary": "#FFFFFF",
  },
};

export const themeDark: ICommonThemes = {
  dark: true,
  colors: {
    default: "#FFFFFF",
    primary: "#777494",
    secondary: "#3d3a4f",
    accent: "#7f017f",
    white: "#FFFFFF",
    black: "#000000",
    yellow: "#FFFF00",
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    button: "#FFFFFF",
    border: "#FFFFFF",
    error: "#FFFFFF",
    warning: "#FFFFFF",
    info: "#FFFFFF",
    success: "#FFFFFF",
    "section-primary": "#FFFFFF",
    "section-secondary": "#FFFFFF",
  },
};

// Set the values of colors for light theme
themeLight.colors.default = themeLight.colors.white;
themeLight.colors.error = themeLight.colors.red;
themeLight.colors.warning = themeLight.colors.yellow;
themeLight.colors.info = themeLight.colors.yellow;
themeLight.colors.success = themeLight.colors.green;
themeLight.colors.button = themeLight.colors.black;
themeLight.colors.border = themeLight.colors.black;
themeLight.colors["section-primary"] = themeLight.colors.white;
themeLight.colors["section-secondary"] = themeLight.colors.secondary;

// Set the values of colors for dark theme
themeDark.colors.default = themeDark.colors.black;
themeDark.colors.error = themeDark.colors.red;
themeDark.colors.warning = themeDark.colors.yellow;
themeDark.colors.info = themeDark.colors.yellow;
themeDark.colors.success = themeDark.colors.green;
themeDark.colors.button = themeDark.colors.white;
themeDark.colors.border = themeDark.colors.white;
themeDark.colors["section-primary"] = themeDark.colors.black;
themeDark.colors["section-secondary"] = themeDark.colors.secondary;

export default themeLight;
