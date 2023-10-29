export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1440,
};

export const theme = {
  colors: {
    accent: "#AF3D8F",
    activeAccent: "#85306d",
    primaryBackground: "#F3F2F2",
    secondaryBackground: "#D8D6D6",
    primaryText: "#4A4A4A",
    secondaryText: "#7C7C7C",
  },

  fonts: {
    montserrat: "'Montserrat', sans-serif",
  },

  fontSizes: {
    xxs: "14px",
    xs: "15px",
    s: "16px",
    m: "18px",
    l: "20px",
    xl: "24px",
    xxl: "32px",
  },

  fontWeights: { regular: 400, medium: 500, semiBold: 600, bold: 700 },

  radii: {
    borderRadius: {
      small: "8px",
      medium: "16px",
      large: "24px",
      circle: "50%",
    },
  },

  shadows: {},

  transitions: {
    default: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  breakpoints: {
    mobile: `${breakpoints.mobile}px`,
    tablet: `${breakpoints.tablet}px`,
    desktop: `${breakpoints.desktop}px`,
  },

  mq: {
    mobileOnly: `@media screen and (max-width: ${breakpoints.tablet - 0.02}px)`,
    mobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints.tablet
    }px) and (max-width: ${breakpoints.desktop - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
    notDesktop: `@media screen and (max-width: ${
      breakpoints.desktop - 0.02
    }px)`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  },
};
